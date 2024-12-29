import { useGamesData } from '@/hooks/useGamesData'
import { InterObsProvider } from '@/providers/interObs'
import { i18n } from '@/utils/i18n'
import { useEffect } from 'preact/hooks'
import { Game } from './game'

export function Games() {
  const { games, fetchGames } = useGamesData()

  useEffect(() => {
    if (!games) fetchGames()
  }, [])

  return (
    <div class="flex flex-col _snap-center gap-4 p-6 mb-4">
      <h2 class="uppercase">{i18n.t('games')}</h2>
      <div class="columns-2 md:columns-6 gap-4 p-4">
        {games?.map((game) => (
          <div key={game.id} class="break-inside-avoid mb-4">
            <InterObsProvider key={game.id}>
              <Game game={game} />
            </InterObsProvider>
          </div>
        ))}
      </div>
      <div class="text-right text-lg">
        {i18n.t('viewOnItchIo')}
        {': '}
        <a
          href="https://kazerlelutin.itch.io/"
          target="_blank"
          rel="noopener noreferrer"
          class="underline"
        >
          kazerlelutin.itch.io
        </a>
      </div>
    </div>
  )
}
