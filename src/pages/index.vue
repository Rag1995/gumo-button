<script setup lang="ts">
import { useAudioStore, useSettingStore } from '@/stores'

const store = useAudioStore()
const { audioList } = toRefs(store)

const settingStore = useSettingStore()
const { onlyFavorite, favoriteAudio } = toRefs(settingStore)

const search = ref('')
const filteredAudioList = computed(() => {
  let list = audioList.value

  // 如果只顯示最愛，就過濾掉非最愛的音檔
  if(onlyFavorite.value)
    list = list.filter(({ audioSrc }) => favoriteAudio.value.includes(audioSrc))

  // 如果沒有搜尋關鍵字，就直接回傳原始列表
  if(!search.value) return list

  // 將搜尋關鍵字拆解成陣列，並過濾掉空字串
  const keywords = search.value.split(' ').filter(Boolean)
  if(!keywords.length) return list

  return list.filter(({ content }) => {
    return keywords.some(keyword => content.includes(keyword))
  })
})

</script>

<template>
  <div class="container pt-4">
    <div class="card mb-4 bg-base-100">
      <div class="card-body">
        <h3 class="flex flex-row items-center gap-2">
          這個是什麼？
          <PlayAudioBtn audio-src="/assets/audio/watagumo/這個是什麼.ogg" />
        </h3>
        <p>這是一個收集鬣狗美聲的快樂天地！</p>

        <hr>

        <h3>誰是鬣狗？</h3>
        <p>駕駛飛行船跨越異世界的鬣狗鍊金術士</p>

        <div class="flex flex-row items-center gap-6">
          <div class="avatar shrink-0">
            <div class="w-24 rounded-full">
              <img src="/assets/img/渡雲.jpg">
            </div>
          </div>
          <div class="grow">
            <h2>渡雲／わたぐも</h2>
            <div class="flex flex-row gap-1">
              <a
                href="https://www.youtube.com/@watagumo_hyena"
                target="_blank"
                class="group btn btn-sm btn-yt "
              >
                <!-- <i class="i-solar-bell-bold animatecss animatecss-swing animate-infinite" /> -->
                <i class="i-ri-youtube-fill animatecss-swing animate-infinite group-hover:animatecss" />
                看更多鬣狗！
              </a>
              <a
                href="https://x.com/watagumo_hyena"
                target="_blank"
                class="group btn btn-sm btn-x"
              >
                <i class="i-ri-twitter-x-line animatecss-swing animate-infinite group-hover:animatecss" />
                獲得鬣狗情報！
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-4 flex flex-row flex-wrap items-center justify-start gap-2">
      <label class="input input-bordered flex max-w-sm items-center gap-2">
        <input
          v-model.trim="search"
          type="text"
          class="grow"
          placeholder="尋找美妙鬣狗的聲音"
        >
        <i class="i-ri-search-line" />
      </label>


      <label class="btn" :class="{ 'btn-warning': onlyFavorite }">
        <input
          v-model="onlyFavorite"
          type="checkbox"
          class="fixed size-0 appearance-none opacity-0"
        >
        <i v-if="onlyFavorite" class="i-solar-star-bold" />
        <i v-else class="i-solar-star-linear " />
        顯示最愛
      </label>
    </div>

    <div class="min-h-screen">
      <AudioListContainer :audio-list="filteredAudioList" />
    </div>
  </div>
</template>