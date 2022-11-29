import {Switch, Redirect, Route} from 'react-router-dom'

import Login from './component/LoginPage'

import NotFound from './component/NotFound'

import ProtectedRoute from './component/ProtectedRoute'

import Home from './component/Home'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
