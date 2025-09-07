<script setup lang="ts">
const props = defineProps<{ text: string }>()
</script>
<template>
  <v-chip color="secondary" label>{{ props.text }}</v-chip>
</template>