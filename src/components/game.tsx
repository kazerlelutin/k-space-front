import { useFirstAppearance } from '@/hooks/useFirstAppearance'
import { GAME } from '@/types/games'

type GameProps = {
  game: GAME
}

export function Game({ game }: GameProps) {
  const isFirstAppearance = useFirstAppearance()

  return (
    <a href={game.url} target="_blank">
      <img
        src={game.cover_url}
        alt={game.title}
        width={100}
        height={100}
        class={`w-full h-auto ${isFirstAppearance} opacity-0 rounded-full`}
      />
    </a>
  )
}
