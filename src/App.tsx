import React from 'react'
import store from 'store'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { routes } from 'routes/configRoutes'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div style={{ width: '100%' }}>
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
