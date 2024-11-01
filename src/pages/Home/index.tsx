import { Editor } from '@/ui/Editor'
import { Title } from '@/ui/Title'

export function Home() {
  return (
    <div class="p-3 dark:bg-dark-bg bg-white-bg">
      <h1>Get Started building Vite-최신 정보 Preact Apps </h1>
      <section>
        <Title title="Welcome to Vite-최신 정보 Preact" size={1} />
        <Title title="Welcome DEUX" size={2} />

        <Editor id="editor" />
      </section>
    </div>
  )
}
