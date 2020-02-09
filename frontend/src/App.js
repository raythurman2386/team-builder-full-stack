import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Router from "./router"
import Context from "./context"

function App(props) {
  return (
    <div className='App'>
      <Context>
        <CssBaseline />
        <Router />
      </Context>
    </div>
  )
}

export default App
