import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Navigation from "./components/Navigation"
import Container from "./components/Container"

import "./App.scss"

function App() {
  const [getPathname, setGetPathname] = useState("")

  // useEffect(() => {
  //   console.log(getPathname)
  // })

  const handleGetPathname = name => {
    setGetPathname(name)
  }
  return (
    <Router>
      <div>
        <Navigation pageName={getPathname} />
        <Container getPathnameContainer={handleGetPathname} />
      </div>
    </Router>
  )
}

export default App
