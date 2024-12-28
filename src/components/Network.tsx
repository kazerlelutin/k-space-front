import { useFirstAppearance } from '@/hooks/useFirstAppearance'

type NetworkProps = {
  network: {
    name: string
    url: string
  }
}

export function Network({ network }: NetworkProps) {
  const isFirstAppearance = useFirstAppearance()

  return (
    <a href={network.url} target="_blank">
      <img
        src={`/assets/networks/${network.name}.webp`}
        alt={network.name}
        width={75}
        height={75}
        class={`w-[75px] h-[75px] ${isFirstAppearance} opacity-0 rounded-full`}
      />
    </a>
  )
}
