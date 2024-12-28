import { i18n } from '@/utils/i18n'

export function Footer() {
  return (
    <footer className="p-8 flex items-center justify-center flex-wrap gap-4">
      <a href="/legal">{i18n.t('legalNotice')}</a>
      <a
        href="https://linktr.ee/kazerlelutin"
        rel="noopener noreferrer"
        target="_blank"
      >
        {i18n.t('contact')}
      </a>
    </footer>
  )
}
