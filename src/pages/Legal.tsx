import { i18n } from '@/utils/i18n'

export function Legal() {
  return (
    <div class="bg-black text-white _snap-mandatory snap-y overflow-y-auto h-[100dvh] p-4">
      <a href="/" class="text-white underline">
        {i18n.t('home')}
      </a>

      <div class="flex justify-center">
        <div class="flex flex-col max-w-[550px] p-3 overflow-y-auto gap-3">
          <h1>{i18n.t('legalNotice')}</h1>
          <section>
            <h2>{i18n.t('editorSite')}</h2>
            <p>
              <strong>{i18n.t('name')}</strong>: Benoist Bouteiller
            </p>
            <p>
              <strong>{i18n.t('contact')}</strong>:{' '}
              <a href="https://bouteiller.contact/" target="_blank">
                {i18n.t('contactLink')}
              </a>
            </p>
          </section>

          <section>
            <h2>{i18n.t('hosting')}</h2>
            <p>
              <a href="https://www.cloudflare.com/fr-fr/" target="_blank">
                Cloudflare
              </a>
              {' / '}
              <a href="https://www.o2switch.fr/" target="_blank">
                O2switch
              </a>
            </p>
          </section>

          <section>
            <h2>{i18n.t('domainName')}</h2>
            <p>
              <strong>OVH</strong>:{' '}
              <a href="https://www.ovhcloud.com/fr/" target="_blank">
                OVHCloud
              </a>
            </p>
          </section>

          <section>
            <h2>{i18n.t('personalData')}</h2>
            <p>{i18n.t('personalDataText')}</p>
          </section>

          <section>
            <h2>{i18n.t('siteActivity')}</h2>
            <p>{i18n.t('siteActivityText')}</p>
          </section>

          <section>
            <h2>{i18n.t('responsibility')}</h2>
            <p>{i18n.t('responsibilityText')}</p>
          </section>

          <section>
            <p>{i18n.t('questionsContact')}</p>
          </section>
        </div>
      </div>
    </div>
  )
}
