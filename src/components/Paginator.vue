<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{ total: number; limit: number; skip: number }>()
const emit = defineEmits(['update:skip'])
const page = computed({
  get: () => Math.floor(props.skip / props.limit) + 1,
  set: (p: number) => emit('update:skip', (p - 1) * props.limit)
})
const pages = computed(()=> Math.ceil(props.total / props.limit))
</script>
<template>
  <v-pagination v-model="page" :length="pages" rounded="circle" size="small" />
</template>