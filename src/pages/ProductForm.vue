<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { createProduct, updateProduct, api } from '@/services/api'
import AppAlert from '@/components/AppAlert.vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute(); const router = useRouter()
const id = route.params.id ? Number(route.params.id) : null
const isEdit = !!id

const form = ref({ title: '', description: '', price: 0, brand: '', category: '' })
const alert = ref<{type:'success'|'error'|'info'|'warning', text:string}|null>(null)

onMounted(async()=>{
  if(isEdit){
    const { data } = await api.get(`/products/${id}`)
    form.value = { title: data.title, description: data.description, price: data.price, brand: data.brand, category: data.category }
  }
})

async function onSubmit(){
  try{
    if(isEdit){ await updateProduct(id!, form.value) }
    else { await createProduct(form.value) }
    alert.value = { type: 'success', text: isEdit ? 'Uspješno ažurirano!' : 'Uspješno dodano!' }
    setTimeout(()=> router.push('/products'), 800)
  }catch(e){
    alert.value = { type: 'error', text: 'Greška pri spremanju.' }
  }
}
</script>

<template>
  <v-container>
    <h2 class="text-h5 mb-4">{{ isEdit ? 'Uredi proizvod' : 'Novi proizvod' }}</h2>
    <AppAlert v-if="alert" :type="alert.type" :text="alert.text" />

    <v-form @submit.prevent="onSubmit" class="max-w-screen-sm">
      <v-text-field v-model="form.title" label="Naziv" required />
      <v-textarea v-model="form.description" label="Opis" />
      <v-text-field v-model.number="form.price" type="number" label="Cijena" />
      <v-text-field v-model="form.brand" label="Brand" />
      <v-text-field v-model="form.category" label="Kategorija" />
      <v-btn type="submit" color="primary" class="mt-4">Spremi</v-btn>
    </v-form>
  </v-container>
</template>