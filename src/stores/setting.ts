export const useSettingStore = defineStore('setting', () => {

  const muted = useLocalStorage('muted', false) // 靜音
  const volume = useLocalStorage('volume', 40) // 音量
  const currentVolume = computed(() => muted.value ? 0 : volume.value)
  watch(volume, (value) => {
    if(value <= 0) return muted.value = true
    if(muted.value) return muted.value = false
  })

  const onlyFavorite = useLocalStorage('only-favorite', false) // 只顯示最愛
  const favoriteAudio = useLocalStorage<string[]>('favorite-audio', [])

  return {
    muted, volume, currentVolume,
    onlyFavorite, favoriteAudio,
  }
})