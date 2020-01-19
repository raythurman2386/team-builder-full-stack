import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { animated } from 'react-spring'

import Brand from './Brand'
import BurgerMenu from './BurgerMenu'
import CollapseMenu from './CollapseMenu'

import { useAnimation } from '../../hooks/useAnimation'
import elevation from '../../styles/elevation'

const Navbar = ({ navbarState, handleNavbar }) => {
  const { linkAnimation, barAnimation } = useAnimation()

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand />
          <NavLinks style={linkAnimation}>
            <Link to='/'>Home</Link>
            <Link to='/techs'>Add Technician</Link>
            <Link to='/add-job'>Add Job</Link>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu navbarState={navbarState} handleNavbar={handleNavbar} />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu navbarState={navbarState} handleNavbar={handleNavbar} />
    </>
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #2d3436;
  z-index: 2;
  font-size: 1.4rem;
  ${elevation[2]}
`

const FlexContainer = styled.div`
  max-width: 98%;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 5rem;
`

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`
