<script setup lang="ts">
import { useAudio } from '@/utils'

const props = defineProps<{
  audioSrc: string
}>()

const { audioSrc } = toRefs(props)
const { state, playAudio } = useAudio(audioSrc)

</script>

<template>
  <button class="btn btn-circle btn-neutral btn-sm text-xs" @click="playAudio">
    <i v-if="state === 'playing'" class="i-solar-stop-bold" />
    <i v-else class="i-solar-play-bold" />
  </button>
</template>