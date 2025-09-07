<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { fetchProducts, fetchCategories } from '@/services/api'
import SearchBar from '@/components/SearchBar.vue'
import Paginator from '@/components/Paginator.vue'
import AppAlert from '@/components/AppAlert.vue'
import TagChip from '@/components/TagChip.vue'

const products = ref<any[]>([])
const categories = ref<string[]>([])
const q = ref('')
const category = ref<string>('')
const limit = ref(8)
const skip = ref(0)
const total = ref(0)
const alert = ref<{type:'success'|'error'|'info'|'warning', text:string}|null>(null)

async function load() {
  try {
    const data = await fetchProducts({ q: q.value, limit: limit.value, skip: skip.value, category: category.value || undefined })
    products.value = data.products
    total.value = data.total
  } catch (e:any) {
    alert.value = { type: 'error', text: 'Greška pri dohvaćanju podataka.' }
  }
}
async function loadCategories(){ categories.value = await fetchCategories() }
watch([q, category, skip, limit], load)
onMounted(()=>{ load(); loadCategories() })
</script>

<template>
  <v-container>
    <h2 class="text-h4 mb-4">Proizvodi</h2>
    <AppAlert v-if="alert" :type="alert.type" :text="alert.text" />

    <v-row class="mb-4" align="center">
      <v-col cols="12" md="6">
        <SearchBar v-model="q" @search="(val)=>{ q = val; skip = 0 }" />
      </v-col>
      <v-col cols="12" md="3">
        <v-select :items="categories" v-model="category" label="Kategorija" clearable @update:modelValue="()=> skip=0" />
      </v-col>
      <v-col cols="12" md="3">
        <v-select :items="[8,12,16,24]" v-model="limit" label="Po stranici" />
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="p in products" :key="p.id" cols="12" md="4" lg="3">
        <v-card>
          <v-img :src="p.thumbnail" height="160" cover />
          <v-card-title class="text-wrap">{{ p.title }}</v-card-title>
          <v-card-subtitle class="d-flex ga-2 flex-wrap">
            <TagChip :text="p.category" /> <TagChip :text="p.brand" />
          </v-card-subtitle>
          <v-card-text>{{ p.description?.slice(0,120) }}...</v-card-text>
          <v-card-actions>
            <v-btn :to="`/products/${p.id}/edit`" size="small">Uredi</v-btn>
            <v-spacer />
            <v-chip>{{ p.price }} $</v-chip>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <div class="my-6 d-flex justify-center">
      <Paginator :total="total" :limit="limit" :skip="skip" @update:skip="(s)=> skip = s" />
    </div>

    <div class="text-right">
      <v-btn color="primary" to="/products/new">+ Novi proizvod</v-btn>
    </div>
  </v-container>
</template>