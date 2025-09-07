<template>
  <v-container class="py-12 text-center">
    <h1 class="text-h3 mb-4">Dobrodošli</h1>
    <p class="text-body-1 mb-8">Ovo je primjer projekta za kolegij – Vue + Vuetify + Router + Axios.</p>
    <SalesHero />
    <v-btn color="primary" to="/products">Pogledaj proizvode</v-btn>
  </v-container>
</template>
<script setup lang="ts">
import SalesHero from '@/charts/SalesChart.vue'
</script>