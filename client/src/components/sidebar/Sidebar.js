import React from 'react'
import styled from 'styled-components'
import { animated } from 'react-spring'
import elevation from '../../styles/elevation'
import { useAnimation } from '../../hooks/useAnimation'

const Sidebar = () => {
  const { sidebarAnimation } = useAnimation()

  return (
    <SidebarWrapper style={sidebarAnimation}>
      <HeaderWrapper>Technicians</HeaderWrapper>
      <ListWrapper>
        <ListItem>Josh</ListItem>
        <ListItem>Herb</ListItem>
        <ListItem>Jason</ListItem>
        <ListItem>Devon</ListItem>
        <ListItem>Noah</ListItem>
      </ListWrapper>
    </SidebarWrapper>
  )
}

export default Sidebar

const SidebarWrapper = styled(animated.div)`
  background: #362f2d;
  padding-top: 50px;
  color: white;
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  @media (max-width: 769px) {
    display: none;
  }
`

const HeaderWrapper = styled.h2`
  margin: 1rem auto;
  font-size: 2.5rem;
`

const ListWrapper = styled.ul`
  list-style-type: none;
  width: 100%;
  text-align: center;
`

const ListItem = styled.li`
  padding: 1.5rem 0 1.5rem;
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 300ms linear 0s;
  border-bottom: 1px solid #362f2d;
  &:hover {
    color: #fdcb6e;
    border-bottom: 1px solid #fdcb6e;
    ${elevation[3]}
  }
`