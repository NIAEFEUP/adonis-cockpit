<script setup lang="ts">
import type { InferSerializable } from '../../../../src/types'
import Select from '../../../../src/fields/select'
import Tag from 'primevue/tag'

defineOptions({
  inheritAttrs: false,
})

defineProps<{
  field: InferSerializable<Select>
  value?: string[]
  record: any
}>()
</script>

<template>
  <div v-if="value" class="flex gap-1">
    <Tag v-for="v of value" :value="field.options[v]" class="text-xs" />
  </div>
</template>
