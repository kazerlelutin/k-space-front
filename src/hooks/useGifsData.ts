import { GIF } from '@/types/gif'
import { useAsyncState } from './useAsyncState'

export function useGifsData() {
  const { data, run } = useAsyncState<GIF[]>()
  return {
    gifts: data,
    fetchGifs: () =>
      run(async () => {
        const response = await fetch(
          (import.meta.env.VITE_URL_BACK as string) + 'gifs'
        )
        const data = await response.json()
        return data
      }),
  }
}
