import React from 'react'
import store from 'store'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { routes } from 'routes/configRoutes'
import { isLogin } from 'store/user'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {isLogin() && <Redirect to="/" />}
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App
