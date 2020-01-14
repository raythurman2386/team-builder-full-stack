import React, { useState } from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
// Components
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import GlobalStyle from './styles/Global'
import TeamPlaceholder from './components/team/TeamPlaceholder'
// Hooks
import { useNavbar } from './hooks/useNavbar'

function App(props) {
  // Hook for just the navbar
  const [navBarOpen, handleNavbar] = useNavbar()

  return (
    <div className='App'>
      <Navbar navbarState={navBarOpen} handleNavbar={handleNavbar} />
      <Wrapper>
        <Sidebar />
        <Switch>
          <Route exact path='/' component={TeamPlaceholder} />
        </Switch>
        <GlobalStyle />
      </Wrapper>
    </div>
  )
}

export default App

const Wrapper = styled.div`
  width: 100%;
  margin: 50px auto 0;
  display: flex;
  flex: 1 0 0;
  @media (max-width: 769px) {
    margin-top: 140px;
  }
`
