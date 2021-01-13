import React from 'react'
import { Switch } from 'react-router-dom'
import Menu from './components/Menu'
import './App.css'
import { paths } from './config/paths'
import MakeRoutes from './config/routes'

const App = () => {
  return (
    <div>
      <Menu />
      <Switch>
        {paths.map((path, index) => (
          <MakeRoutes key={index} {...path} />
        ))}
      </Switch>
    </div>
  )
}

export default App
