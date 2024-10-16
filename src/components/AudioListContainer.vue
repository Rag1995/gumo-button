<script setup lang="ts">
import { AudioItem } from '@/types'

defineProps<{
  audioList: AudioItem[]
}>()

</script>

<template>
  <div>
    <TransitionGroup
      tag="div"
      class="flex flex-row flex-wrap items-center gap-2"
    >
      <AudioBtn
        v-for="({ audioSrc, content }, i) in audioList"
        :key="audioSrc"
        :data-index="i"
        :audio-src="audioSrc"
        :content="content"
      />
    </TransitionGroup>

    <AudioDetailCard />
  </div>
</template>

<style lang="scss" scoped>
.v-enter-active, .v-leave-active {
  transition: all 0.3s ease-out;
}
.v-enter-to, .v-leave-from {
  opacity: 1;
  transform: scale(1);
}
.v-enter-from, .v-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
.v-move {
  transition: all 0.3s ease-out;
}
</style>
