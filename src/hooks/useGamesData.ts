import { GIF } from '@/types/gif'
import { useAsyncState } from './useAsyncState'
import { GAME } from '@/types/games'

export function useGamesData() {
  const { data, run } = useAsyncState<GAME[]>()
  return {
    games: data,
    fetchGames: () =>
      run(async () => {
        const response = await fetch(
          (import.meta.env.VITE_URL_BACK as string) + 'games'
        )
        const data = await response.json()
        return data
      }),
  }
}
