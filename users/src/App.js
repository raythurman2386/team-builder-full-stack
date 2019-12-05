import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
// Components
import Navbar from './components/navbar/Navbar'
import GlobalStyle from './styles/Global'
import TeamForm from './components/form/Form'
import Team from './components/team/Team'
import TeamPlaceholder from './components/team/TeamPlaceholder'
// Hooks
import { useLocalStorage } from './hooks/useLocalStorage'
import { useNavbar } from './hooks/useNavbar'

function App() {
  // Hook for just the navbar
  const [navBarOpen, handleNavbar] = useNavbar()
  // List for the team members
  const [teamList, setTeamList, handleDelete, handleEdit] = useLocalStorage(
    'team',
    [],
  )

  return (
    <div className='App'>
      <Navbar navbarState={navBarOpen} handleNavbar={handleNavbar} />
      <Wrapper>
        <Switch>
          <Route
            exact
            path='/'
            render={props => (
              <Team
                {...props}
                teamList={teamList}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          />
          <Route
            path='/add-member'
            render={props => (
              <TeamForm
                {...props}
                teamList={teamList}
                setTeamList={setTeamList}
              />
            )}
          />
          <Route path='/no-members' component={TeamPlaceholder} />
        </Switch>
        <GlobalStyle />
      </Wrapper>
    </div>
  )
}

export default App

const Wrapper = styled.div`
  max-width: 1120px;
  margin: 60px auto 0;
`
