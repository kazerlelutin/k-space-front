import { useGifsData } from '@/hooks/useGifsData'
import { InterObsProvider } from '@/providers/interObs'
import { useEffect } from 'preact/hooks'
import { Gif } from './gif'
import { i18n } from '@/utils/i18n'

export function Gifs() {
  const { fetchGifs, gifts } = useGifsData()

  useEffect(() => {
    if (!gifts) fetchGifs()
  }, [])

  return (
    <div class="flex flex-col snap-center gap-4 p-6 mb-4">
      <h2 class="uppercase">{i18n.t('gifs')}</h2>
      <div class="columns-2 md:columns-6 gap-4 p-4">
        {gifts?.map((gif) => (
          <div key={gif.id} class="break-inside-avoid mb-4">
            <InterObsProvider key={gif.id}>
              <Gif gif={gif} />
            </InterObsProvider>
          </div>
        ))}
      </div>
      <div class="text-right text-lg">
        {i18n.t('moreGifsOnMyGhiphyChannel')}
        {': '}
        <a
          href="https://giphy.com/kazerlelutin"
          target="_blank"
          rel="noopener noreferrer"
          class="underline"
        >
          giphy.com/kazerlelutin
        </a>
      </div>
    </div>
  )
}
