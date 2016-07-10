import 'whatwg-fetch'
import React from 'react'
import {render} from 'react-dom'
// import {Provider} from 'react-redux'
// import store from './store'
import AppRouter from 'app/router'
import styles from 'app/theme/index.styl'

render(
  <AppRouter className={styles.element} />,
  document.getElementById('app')
)
