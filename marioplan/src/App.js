import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
import Dashboard from "./components/dashboard/Dashboard"
import Navbar from "./components/layout/Navbar"
import CreateProject from "./components/projects/CreateProject"
import ProjectDetails from "./components/projects/ProjectDetails"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/project/:id">
            <ProjectDetails />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/create">
            <CreateProject />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
