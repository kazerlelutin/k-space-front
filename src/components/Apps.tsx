import { InterObsProvider } from '@/providers/interObs'
import { i18n } from '@/utils/i18n'
import { App } from './App'

const apps = [
  {
    name: 'nospoil',
    url: 'https://nospoil.ovh',
  },
  {
    name: 'roadcast',
    url: 'https://roadcast.app',
  },
]

export function Apps() {
  return (
    <div class="flex flex-col _snap-center gap-4 p-6 mb-4">
      <h2 class="uppercase">{i18n.t('apps')}</h2>
      <div class="columns-2 md:columns-4 gap-4 p-4">
        {apps?.map((app) => (
          <div key={app.name} class="break-inside-avoid mb-4">
            <InterObsProvider key={app.name}>
              <App app={app} />
            </InterObsProvider>
          </div>
        ))}
      </div>
    </div>
  )
}
