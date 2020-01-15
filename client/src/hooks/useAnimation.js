import { useState } from 'react'
import { useSpring, config } from 'react-spring'

export const useAnimation = () => {
  let [linkAnimation] = useState()
  let [barAnimation] = useState()
  let [sidebarAnimation] = useState()

  linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 500,
    config: config.wobbly,
  })

  barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
    delay: 300,
  })

  sidebarAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 300,
    config: config.slow,
  })

  return { linkAnimation, barAnimation, sidebarAnimation }
}
