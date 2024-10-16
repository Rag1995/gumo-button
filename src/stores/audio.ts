import { AudioItem } from '@/types'
import { useAudio } from '@/utils'

export const useAudioStore = defineStore('audio', () => {

  const audioList = ref<AudioItem[]>([
    {
      audioSrc: '/assets/audio/watagumo/這個是什麼.ogg',
      content: '這個是什麼?',
      vtuber: '渡雲',
    },
    {
      audioSrc: '/assets/audio/watagumo/拜託嘛.ogg',
      content: '拜託嘛ʕ ꈍᴥꈍʔ',
      vtuber: '渡雲',
    },
    {
      audioSrc: '/assets/audio/watagumo/chipi_chipi_chapa_chapa.ogg',
      content: 'chipi chipi chapa chapa',
      vtuber: '渡雲',
    },
    {
      audioSrc: '/assets/audio/watagumo/拉下操縱桿打開OO.ogg',
      content: '拉下操縱桿打開ＯＯ',
      vtuber: '渡雲',
    },
    {
      audioSrc: '/assets/audio/watagumo/等一下.ogg',
      content: '等一下',
      vtuber: '渡雲',
    },
    {
      audioSrc: '/assets/audio/watagumo/哈哈哈哈.ogg',
      content: '哈⬆️哈⬆️哈⬆️哈⬆️',
      vtuber: '渡雲',
    },
    {
      audioSrc: '/assets/audio/watagumo/呵哈哈哈哈哈哈.ogg',
      content: '呵哈哈哈哈哈哈',
      vtuber: '渡雲',
    },
    {
      audioSrc: '/assets/audio/watagumo/奇怪耶.ogg',
      content: '奇怪耶',
      vtuber: '渡雲',
    },
    {
      audioSrc: '/assets/audio/watagumo/嚇爛.ogg',
      content: '嚇爛',
      vtuber: '渡雲',
    },
    {
      audioSrc: '/assets/audio/watagumo/(鬣狗用力).ogg',
      content: '(鬣狗用力)',
      vtuber: '渡雲',
    },
    {
      audioSrc: '/assets/audio/watagumo/(鬣狗受驚).ogg',
      content: '(鬣狗受驚)',
      vtuber: '渡雲',
    },
    {
      audioSrc: '/assets/audio/watagumo/呦.ogg',
      content: '呦',
      vtuber: '渡雲',
    },
    {
      audioSrc: '/assets/audio/watagumo/啾命.ogg',
      content: '啾命~~',
      vtuber: '渡雲',
    },
    {
      audioSrc: '/assets/audio/watagumo/喘氣x3.ogg',
      content: '喘氣x3',
      vtuber: '渡雲',
    },
    {
      audioSrc: '/assets/audio/watagumo/鵝呀.ogg',
      content: '鵝呀',
      vtuber: '渡雲',
    },
    {
      audioSrc: '/assets/audio/watagumo/白吃喔.ogg',
      content: '白吃喔',
      vtuber: '渡雲',
    },
    {
      audioSrc: '/assets/audio/watagumo/(鬣狗嘆息).ogg',
      content: '(鬣狗嘆息)',
      vtuber: '渡雲',
    },
    {
      audioSrc: '/assets/audio/watagumo/笨蛋.ogg',
      content: 'バカ (笨蛋)',
      vtuber: '渡雲',
    },
    {
      audioSrc: '/assets/audio/watagumo/変態.ogg',
      content: '変態 (變態)',
      vtuber: '渡雲',
    },
    {
      audioSrc: '/assets/audio/watagumo/うるさい.ogg',
      content: 'うるさい (吵死了)',
      vtuber: '渡雲',
    },
    {
      audioSrc: '/assets/audio/watagumo/もう知らない.ogg',
      content: 'もう知らない (我不管了)',
      vtuber: '渡雲',
    },
  ])

  const getAudio = (audioSrc?: string | null): AudioItem | undefined => {
    if(!audioSrc) return undefined
    return audioList.value.find((audio) => audio.audioSrc === audioSrc)
  }
  const getAudioList = (audioSrc?: string[]): AudioItem[] => {
    if(!audioSrc) return []
    return audioList.value.filter((audio) => audioSrc.includes(audio.audioSrc))
  }

  const selectedAudioSrc = ref<string | null>(null)
  const showAudioDetail = ref(false)

  const { state, playRatio, playAudio } = useAudio(selectedAudioSrc)

  return {
    audioList,
    getAudio, getAudioList,
    selectedAudioSrc, showAudioDetail,
    state, playRatio, playAudio,
  }
})
