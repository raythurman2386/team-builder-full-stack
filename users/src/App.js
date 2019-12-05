import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
// Components
import Navbar from "./components/navbar/Navbar";
import GlobalStyle from "./styles/Global";
import TeamForm from "./components/form/Form";
import Team from "./components/team/Team";
import TeamPlaceholder from "./components/team/TeamPlaceholder";
// Hooks
import { useNavbar } from "./hooks/useNavbar";

function App(props) {
  // Hook for just the navbar
  const [navBarOpen, handleNavbar] = useNavbar();
  const [teamList, setTeamList] = useState([]);

  // Grab the team members from api
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/users")
      .then(res => {
        if (res.data.length === 0) {
          props.history.push("/no-members");
        } else {
          setTeamList(res.data);
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <Navbar navbarState={navBarOpen} handleNavbar={handleNavbar} />
      <Wrapper>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Team {...props} teamList={teamList} />}
          />
          <Route
            path="/add-member"
            render={props => (
              <TeamForm
                {...props}
                teamList={teamList}
                setTeamList={setTeamList}
              />
            )}
          />
          <Route path="/no-members" component={TeamPlaceholder} />
        </Switch>
        <GlobalStyle />
      </Wrapper>
    </div>
  );
}

export default App;

const Wrapper = styled.div`
  max-width: 1120px;
  margin: 60px auto 0;
`;
