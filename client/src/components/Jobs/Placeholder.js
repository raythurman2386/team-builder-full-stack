import React from 'react'
import styled from 'styled-components'
import { animated } from 'react-spring'

import image from '../../assets/workers-team.svg'
import { useAnimation } from '../../hooks/useAnimation'

const Placeholder = () => {
  const { linkAnimation } = useAnimation()

  return (
    <Wrapper style={linkAnimation}>
      <img src={image} alt='One Team' />
      <h1>It appears you don't have any jobs!</h1>
      <p>How about adding some?</p>
    </Wrapper>
  )
}

export default Placeholder

const Wrapper = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;

  img {
    max-width: 500px;
    width: 60%;
    color: #2d3436;
    padding: 0;
  }

  h1 {
    color: #2d3436;
    font-size: 3rem;
    font-weight: 600;
  }

  p {
    font-size: 1.5rem;
    padding: 1rem;
  }
  @media (max-width: 840px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
`
