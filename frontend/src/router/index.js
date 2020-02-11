import React from "react"
import { Switch, Route } from "react-router-dom"
import SignIn from "../components/SignIn/SignIn"
import Register from "../components/Register/Register"
import Dashboard from "../components/Dashboard/Dashboard"
import ProtectedRoute from "../utils/ProtectedRoute"

const Router = () => (
  <Switch>
    <Route exact path='/' component={SignIn} />
    <Route exact path='/login' component={SignIn} />
    <Route exact path='/register' component={Register} />
    <ProtectedRoute exact path='/dashboard' component={Dashboard} />
  </Switch>
)

export default Router
