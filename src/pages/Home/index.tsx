import { Editor } from '@/ui/Editor'
import { Title } from '@/ui/Title'
import { i18n } from '@/utils/i18n'

export function Home() {
  return (
    <div class="p-3 dark:bg-dark-bg bg-white-bg">
      <h1>Get Started building Vite-최신 정보 Preact Apps </h1>
      <section>
        <Title title={i18n.t('hello')} size={1} />
        <Title title="Welcome DEUX" size={2} />

        <Editor id="editor" />
      </section>
    </div>
  )
}
