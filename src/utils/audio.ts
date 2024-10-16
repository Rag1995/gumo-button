import { Howl } from 'howler'
import { MaybeRef } from '@vueuse/core'
import { useSettingStore } from '@/stores'

export const useAudio = (src: MaybeRef<string | null>) => {

  const store = useSettingStore()
  const { currentVolume } = toRefs(store)

  type State = 'idle' | 'loading' | 'playing' | 'ended' | 'error'
  const state = ref<State>('idle')

  let sound: Howl
  const animationFrameId = ref<number>()
  const playRatio = ref(0)

  //使用 requestAnimationFrame 更新播放比例
  const updatePlayRatio = () => {
    if (state.value == 'playing') {
      playRatio.value = Math.floor((sound?.seek() ?? 1) / (sound?.duration() ?? 1) * 10000) / 100
      animationFrameId.value = requestAnimationFrame(updatePlayRatio) // 繼續更新
    }
  }

  const playAudio = async () => {
    const audioSrc = unref(src)
    if(!audioSrc) return

    // 如果音檔正在播放，則停止播放
    if(sound) sound?.stop()

    sound = new Howl({
      src: [audioSrc],
      onplay() {
        state.value = 'playing'
        updatePlayRatio()
      },
      onend() {
        if(animationFrameId.value) cancelAnimationFrame(animationFrameId.value) // 停止動畫幀
        playRatio.value = 100
        state.value = 'ended'
      },
    })

    sound.volume(currentVolume.value / 100) // 設置音量
    sound.play()
  }

  // 組件卸載時清理資源
  onUnmounted(() => {
    if(animationFrameId.value) cancelAnimationFrame(animationFrameId.value) // 停止動畫幀
    sound?.unload() // 釋放音頻資
  })

  return { state, playRatio, playAudio }
}
