import { Apps } from '@/components/Apps'
import { FollowMe } from '@/components/FollowMe'
import { Footer } from '@/components/Footer'
import { Games } from '@/components/games'
import { Gifs } from '@/components/gifs'
import { Identity } from '@/components/Identity'

export function Home() {
  return (
    <div class="bg-black text-white _snap-mandatory snap-y overflow-y-auto h-[100dvh]">
      <Identity />
      <Gifs />
      <div class="h-48" />
      <Games />
      <div class="h-48" />
      <Apps />
      <div class="h-48" />
      <FollowMe />
      <div class="h-48" />
      <Footer />
    </div>
  )
}
