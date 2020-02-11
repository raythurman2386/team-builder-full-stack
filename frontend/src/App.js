import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Router from "./router"
import Context from "./context"

function App(props) {
  return (
    <Context>
      <CssBaseline />
      <Router />
    </Context>
  )
}

export default App
