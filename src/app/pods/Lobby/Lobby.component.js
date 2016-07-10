import React, { Component } from 'react'
import styles from './Lobby.styl'
import ChatCreator from 'app/pods/ChatCreator/ChatCreator.component'

export default class Lobby extends Component {
  render () {
    return <div>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Chatter Chain</h1>
        <p className={styles.heroSubtitle}>Play a word chain game with friends.</p>
      </div>
      <ChatCreator />
    </div>
  }
}
