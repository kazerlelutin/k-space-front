import { useInterObs } from '@/providers/interObs'
import { useEffect, useState } from 'preact/hooks'

export function useFirstAppearance() {
  const [isFirstAppearance, setIsFirstAppearance] = useState('')
  const isOnScreen = useInterObs()

  useEffect(() => {
    if (!isFirstAppearance && isOnScreen) setIsFirstAppearance('video')
  }, [isOnScreen])

  return isFirstAppearance
}
