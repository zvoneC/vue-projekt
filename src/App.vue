<template>
  <v-app>
    <v-app-bar color="primary" dark>
      <v-app-bar-title>ALP Vue Projekt</v-app-bar-title>
      <v-spacer />
      <v-btn to="/" variant="text">Početna</v-btn>
      <v-btn to="/products" variant="text">Proizvodi</v-btn>
      <v-btn to="/about" variant="text">O projektu</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer class="d-flex justify-center py-3">© {{ new Date().getFullYear() }} SUM / FPMOZ</v-footer>
  </v-app>
</template>