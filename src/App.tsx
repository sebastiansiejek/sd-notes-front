import React from 'react'
import store from 'store'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import { Provider } from 'react-redux'
import { routes } from 'routes/configRoutes'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout style={{ height: '100vh' }}>
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}

export default App
