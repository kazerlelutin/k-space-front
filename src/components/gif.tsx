import { useFirstAppearance } from '@/hooks/useFirstAppearance'
import { GIF } from '@/types/gif'

type GifProps = {
  gif: GIF
}
export function Gif({ gif }: GifProps) {
  const isFirstAppearance = useFirstAppearance()

  return (
    <video
      src={gif.images.downsized_small.mp4}
      alt={gif.title}
      data-first-appearance={isFirstAppearance}
      width={gif.images.downsized_small.width}
      height={gif.images.downsized_small.height}
      autoPlay
      loop
      muted
      class={`w-full h-auto ${isFirstAppearance} opacity-0 rounded-full`}
    />
  )
}
