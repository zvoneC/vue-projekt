<script setup lang="ts">
const props = defineProps<{ type?: 'success'|'error'|'info'|'warning'; text: string }>()
</script>
<template>
  <v-alert :type="props.type || 'info'" variant="tonal" class="mb-4">{{ props.text }}</v-alert>
</template>