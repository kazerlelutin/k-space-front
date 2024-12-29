import { InterObsProvider } from '@/providers/interObs'
import { i18n } from '@/utils/i18n'
import { Network } from './Network'

const networks = [
  {
    name: 'bluesky',
    url: 'https://bsky.app/profile/kazerlelutin.space',
  },
  {
    name: 'ko-fi',
    url: 'https://ko-fi.com/kazerlelutin',
  },
  {
    name: 'tiktok',
    url: 'https://www.tiktok.com/@kazerlelutin',
  },
  {
    name: 'youtube',
    url: 'https://www.youtube.com/@kazerll',
  },
  {
    name: 'itchio',
    url: 'https://kazerlelutin.itch.io/',
  },
  {
    name: 'giphy',
    url: 'https://giphy.com/kazerlelutin',
  },
]

export function FollowMe() {
  return (
    <div class="flex flex-col _snap-center gap-4 p-6 mb-4">
      <h2 class="uppercase">{i18n.t('followMe')}</h2>

      <div class="flex flex-wrap gap-6 p-4 justify-center items-center">
        {networks?.map((network) => (
          <div key={network.name} class="break-inside-avoid mb-4">
            <InterObsProvider key={network.name}>
              <Network network={network} />
            </InterObsProvider>
          </div>
        ))}
      </div>
    </div>
  )
}
