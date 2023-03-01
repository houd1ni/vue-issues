
<template>
  Hello, {{ props.prop }} !
  {{ v }}
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
console.log('Oups...')
const props = defineProps({
  prop: {type: String, required: true}
})
;(window as any).testFunc = () => props
const v = ref(false)
</script>