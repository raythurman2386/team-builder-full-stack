import React, { useState } from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
// Components
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Jobs from './components/Jobs/Jobs'
import GlobalStyle from './styles/Global'
import Placeholder from './components/Jobs/Placeholder'
// Hooks
import { useNavbar } from './hooks/useNavbar'

function App(props) {
  // Hook for just the navbar
  const [navBarOpen, handleNavbar] = useNavbar()

  return (
    <AppWrapper>
      <Navbar navbarState={navBarOpen} handleNavbar={handleNavbar} />
      <Wrapper>
        <Sidebar />
        <Switch>
          <Route exact path='/' component={Jobs} />
        </Switch>
        <GlobalStyle />
      </Wrapper>
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.div`
  display: flex;
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 769px) {
    /* margin-top: 140px; */
  }
`
