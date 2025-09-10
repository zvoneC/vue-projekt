<template>
  <v-container class="py-12 text-center">
    <h1 class="text-h3 mb-4">Dobrodošli</h1>
    <p class="text-body-1 mb-8">
      Demo aplikacija za kolegij: Vue 3 + Vuetify + Router + Axios.
    </p>
    <SalesChart class="mb-10" />
    <v-btn color="primary" to="/products">Otvori proizvode</v-btn>
  </v-container>
</template>

<script setup lang="ts">
import SalesChart from '@/charts/SalesChart.vue'
</script>
