import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
// Components
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Jobs from './components/Jobs/Jobs'
import GlobalStyle from './styles/Global'
// Hooks
import { useNavbar } from './hooks/useNavbar'
import AddTech from './components/form/AddTech'

function App() {
  // Hook for just the navbar
  const [navBarOpen, handleNavbar] = useNavbar()

  return (
    <AppWrapper>
      <Navbar navbarState={navBarOpen} handleNavbar={handleNavbar} />
      <Sidebar />
      <Wrapper>
        <Switch>
          <Route exact path='/' component={Jobs} />
          <Route exact path='/techs' component={AddTech} />
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
  margin-left: 25rem;
  margin-top: 7rem;
  display: flex;
  @media (max-width: 769px) {
    margin: 7.5rem auto 0;
  }
`
