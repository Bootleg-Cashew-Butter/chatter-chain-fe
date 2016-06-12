import React, { Component } from 'react'
import styles from './Lobby.styl'
import Chat from '../Chat/Chat.component'
import ActiveUserList from '../ActiveUserList/ActiveUserList.component'
import Options from '../Options/Options.component'

export default class Lobby extends Component {
  render () {
    return <div className={styles.element}>
      <Chat />
      <Options />
      <ActiveUserList />
    </div>
  }
}
