import React, { Component } from 'react'
import autobind from 'autobind-decorator'
import CopyToClipboard from 'react-copy-to-clipboard'
import styles from './ChatCreator.styl'
import {parseJSON, checkStatus} from 'app/utils/fetchUtils'

export default class Lobby extends Component {
  constructor (props) {
    super(props)

    this.state = {
      chatUrl: null,
      chatError: null,
      chatPending: false,
      isLinkCopied: false
    }
  }

  render () {
    return <div className={styles.element}>
      {(() => {
        if (!this.state.chatUrl) {
          return <button
            key={0}
            className={styles.ccButton}
            onClick={this.sendCreateChat}>
            Create Chat
          </button>
        } else if (this.state.chatError) {
          return <p key={1}>Error</p>
        } else {
          return [
            <a key={0} href={this.chatUrlLink} className={styles.link}>
              {this.chatUrlLink}
            </a>,
            <div key={1} className={styles.copyLinkButtonWrap}>
              <CopyToClipboard text={this.chatUrlLink} onCopy={this.onCopy}>
                <button className={styles.copyLinkButton}>
                  {this.state.isLinkCopied ? 'Copied!' : 'Copy'}
                </button>
              </CopyToClipboard>
            </div>
          ]
        }
      })()}
    </div>
  }

  get chatUrlLink () {
    return `${window.location.href}${this.state.chatUrl}`
  }

  @autobind
  onCopy () {
    this.setState({
      isLinkCopied: true
    })
  }

  @autobind
  sendCreateChat () {
    this.setState({
      chatPending: true
    })
    fetch('http://localhost:4000/api/chats', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat: {}
      })
    })
    .then(checkStatus)
    .then(parseJSON)
    .then((json) => {
      this.setState({
        chatUrl: json.data.id,
        chatError: null,
        chatPending: false
      })
    })
    .catch((err) => {
      this.setState({
        chatError: err,
        chatPending: false
      })
    })
  }
}
