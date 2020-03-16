import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, withRouter } from "react-router-dom"
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import App from "./App"

const AppWithRouter = withRouter(App)

const client = new ApolloClient({
  uri: 'https://graphql-teambuilder.herokuapp.com/'
})

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <AppWithRouter />
    </ApolloProvider>
  </Router>,
  document.getElementById("root")
)
