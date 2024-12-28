import { useFirstAppearance } from '@/hooks/useFirstAppearance'

type AppProps = {
  app: {
    name: string
    url: string
  }
}
export function App({ app }: AppProps) {
  const isFirstAppearance = useFirstAppearance()

  return (
    <a href={app.url} target="_blank" class="relative">
      <img
        src={`/assets/apps/${app.name}.webp`}
        alt={app.name}
        width={150}
        height={150}
        class={`w-[150px] h-[150px] ${isFirstAppearance} opacity-0 rounded-full`}
      />
      <div class="absolute bottom-0 left-0 right-0 p-1 flex items-center justify-center bg-black/75 text-white text-lg font-bold">
        {app.name}
      </div>
    </a>
  )
}
