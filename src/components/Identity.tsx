import { i18n } from '@/utils/i18n'

export function Identity() {
  return (
    <div class="h-[100dvh] flex items-center justify-center snap-center">
      <h1 class="text-5xl m-5">
        <span class="kll">Kazerlelutin</span>{' '}
        <span class="made whitespace-nowrap">{i18n.t('made')} ...</span>
      </h1>
    </div>
  )
}
