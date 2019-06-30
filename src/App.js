import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Navigation from "./components/Navigation"
import Container from "./components/Container"

import "./App.scss"

function Index() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Users</h2>
}

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Container />
      </div>
    </Router>
  )
}

export default App
