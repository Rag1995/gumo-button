<script setup lang="ts">
import { useAudioStore } from '@/stores'

const props = defineProps<{
  audioSrc: string
  content: string
}>()

const store = useAudioStore()
const { showAudioDetail, selectedAudioSrc, state, playRatio } = toRefs(store)
const { playAudio } = store

const startPlayback = () => {
  selectedAudioSrc.value = props.audioSrc
  showAudioDetail.value = true
  playAudio()
}

</script>

<template>
  <button class="btn btn-neutral relative overflow-hidden rounded-full" @click="startPlayback">
    <!-- progress -->
    <Transition name="fade">
      <span
        v-if="selectedAudioSrc === audioSrc && state === 'playing'"
        class="absolute inset-y-0 left-0 w-[var(--play-ratio)] bg-gradient-to-r from-transparent to-base-content/20"
        :style="{ '--play-ratio': `${playRatio}%` }"
      />
    </Transition>

    <!-- icon -->
    <i v-if="selectedAudioSrc === audioSrc && state === 'playing'" aria-hidden="true" class="i-solar-stop-bold" />
    <i v-else aria-hidden="true" class="i-solar-play-bold" />

    <!-- content -->
    <div>{{ content }}</div>
  </button>
</template>