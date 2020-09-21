import React from 'react'
import JoinUs from 'organisms/JoinUs'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { routes } from 'routes/configRoutes'

function App() {
  return (
    <BrowserRouter>
      <div style={{ width: '100%' }}>
        <Switch>
          {routes.map((route) => (
            <Route path={route.path}>
              <JoinUs />
            </Route>
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
