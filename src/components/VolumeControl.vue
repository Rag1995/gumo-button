<script setup lang="ts">
import { useSettingStore } from '@/stores'

const store = useSettingStore()
const { muted, volume, currentVolume } = toRefs(store)

const updateVolume = (e: Event) => {
  const target = e.target as HTMLInputElement
  volume.value = parseInt(target.value)
}
</script>


<template>
  <div>
    <div class="flex flex-row items-center gap-2">
      <label class="btn btn-circle btn-ghost swap btn-sm shrink-0">
        <input v-model="muted" type="checkbox">
        <i class="swap-on i-solar-volume-cross-bold text-error" />
        <i class="swap-off i-solar-volume-loud-bold" />
      </label>

      <input
        :value="currentVolume"
        type="range"
        :min="0"
        :max="100"
        class="range range-xs w-32"
        :class="{ 'range-error': muted }"
        @input="updateVolume($event)"
      >
    </div>
  </div>
</template>