<script setup lang="ts">
import { ref, watch } from 'vue'
const model = defineModel<string>({ default: '' })
const emit = defineEmits(['search'])
const q = ref(model.value)
watch(q, (val)=> emit('search', val))
</script>
<template>
  <v-text-field v-model="q" label="Pretraga" prepend-inner-icon="mdi-magnify" clearable />
</template>