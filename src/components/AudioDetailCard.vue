<script setup lang="ts">
import { useAudioStore, useSettingStore } from '@/stores'

const audioStore = useAudioStore()
const { selectedAudioSrc, showAudioDetail, state, playRatio } = toRefs(audioStore)
const { getAudio, playAudio } = audioStore

const settingStore = useSettingStore()
const { favoriteAudio } = toRefs(settingStore)

const audio = computed(() => getAudio(selectedAudioSrc.value))


</script>

<template>
  <div class="fixed inset-x-0 bottom-0 z-10">
    <input
      id="audio-detail-card"
      v-model="showAudioDetail"
      type="checkbox"
      class="fixed size-0 appearance-none opacity-0"
    >
    <Transition mode="out-in">
      <div v-if="showAudioDetail" :key="audio?.audioSrc" class="card w-full rounded-b-none bg-base-300 drop-shadow-md">
        <div class="container">
          <div class="card-body pb-12">
            <div class="flex flex-row items-center gap-4">
              <div class="shrink-0">
                <button class="btn btn-circle btn-neutral" @click="playAudio">
                  <i v-if="state === 'playing'" aria-hidden="true" class="i-solar-stop-bold" />
                  <i v-else aria-hidden="true" class="i-solar-play-bold" />
                </button>
              </div>

              <Vue3Marquee pause-on-hover :delay="2" class="overflow-hidden">
                <div>
                  <span class="mr-4 text-3xl">
                    {{ audio?.content }}
                  </span>
                  by {{ audio?.vtuber }}
                </div>
              </Vue3Marquee>

              <div class="ml-auto flex shrink-0 flex-row items-center gap-2">
                <a
                  v-if="audio?.source"
                  :href="audio?.source"
                  target="_blank"
                  class="btn"
                >
                  來源
                </a>

                <label class="btn btn-square swap swap-rotate">
                  <input v-model="favoriteAudio" type="checkbox" :value="audio?.audioSrc">

                  <i class="swap-on i-solar-star-bold text-yellow-500" />
                  <i class="swap-off i-solar-star-linear " />
                </label>

                <!-- <button class="btn btn-square">
                  <i class="i-solar-download-minimalistic-outline" />
                </button> -->
                <button class="btn btn-square" @click="showAudioDetail = false">
                  <i class="i-ri-close-fill" />
                </button>
              </div>
            </div>
            <progress class="progress progress-primary" :value="playRatio" max="100" />
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.v-enter-active, .v-leave-active {
  transition: transform 0.15s;
}
.v-enter-to, .v-leave-from {
  transform: translateY(0);
}
.v-enter-from, .v-leave-to {
  transform: translateY(100%);
}
</style>