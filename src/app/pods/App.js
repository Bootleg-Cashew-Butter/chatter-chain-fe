import React, { Component } from 'react'
import styles from './App.styl'

export default class App extends Component {
  render () {
    return <div className={styles.element}>
      Teehee
      {this.props.children}
    </div>
  }

  componentDidMount () {
    console.log("I'm aliiiive")
  }
}
