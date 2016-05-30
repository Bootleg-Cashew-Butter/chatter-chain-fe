import React from 'react'
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'

import App from 'app/pods/App'
import Lobby from 'app/pods/Lobby/Lobby.component'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

const AppRouter = () => (
  <Router history={appHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Lobby} />
    </Route>
  </Router>
)

export default AppRouter
