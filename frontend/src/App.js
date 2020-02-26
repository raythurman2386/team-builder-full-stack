import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Router from "./router"
import { GlobalProvider } from "./context"

function App(props) {
  return (
    <GlobalProvider>
      <CssBaseline />
      <Router />
    </GlobalProvider>
  )
}

export default App
