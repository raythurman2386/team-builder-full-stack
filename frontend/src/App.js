import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { Switch, Route } from "react-router-dom"
import SignInSide from "./components/SignIn/SignIn"
import Register from "./components/Register/Register"
import Dashboard from "./components/Dashboard/Dashboard"

function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <Switch>
        <Route exact path='/' component={<h1>Hello</h1>} />
        <Route exact path='/login' component={SignInSide} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </div>
  )
}

export default App
