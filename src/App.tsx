import JoinUsContainer from 'containers/JoinUsContainer'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { routes } from 'routes/configRoutes'

function App() {
  return (
    <BrowserRouter>
      <div style={{ width: '100%' }}>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} path={route.path}>
              <JoinUsContainer />
            </Route>
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
