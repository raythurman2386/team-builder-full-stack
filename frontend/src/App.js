import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { Switch, Route } from "react-router-dom"
import SignIn from "./components/SignIn/SignIn"
import Register from "./components/Register/Register"
import Dashboard from "./components/Dashboard/Dashboard"
import { TechProvider, JobProvider } from "./context/context"
import { useAxios } from "./hooks/useAxios"

function App() {
  const [techs] = useAxios("http://localhost:4000/api/technicians")
  const [jobs] = useAxios("http://localhost:4000/api/jobs")

  return (
    <div className='App'>
      <TechProvider value={{ techs }}>
        <JobProvider value={{ jobs }}>
          <CssBaseline />
          <Switch>
            <Route exact path='/' component={<h1>Hello</h1>} />
            <Route exact path='/login' component={SignIn} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/dashboard' component={Dashboard} />
          </Switch>
        </JobProvider>
      </TechProvider>
    </div>
  )
}

export default App
