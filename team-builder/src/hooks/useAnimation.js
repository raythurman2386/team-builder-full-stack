import { useState } from 'react'
import { useSpring, config } from 'react-spring'

export const useAnimation = () => {
  let [linkAnimation] = useState()
  let [barAnimation] = useState()

  linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  })

  barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  })

  return { linkAnimation, barAnimation }
}
