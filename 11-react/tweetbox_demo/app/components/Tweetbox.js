import React from 'react'
import './Tweetbox.scss'

export default class Tweetbox extends React.Component {

  constructor(props) {
    super(props)
    this.onTextAreaChange = this.onTextAreaChange.bind(this)
    this.state = {
      content: '',
      maxTweetLength: 100 
    }
  }

  onTextAreaChange(event) {
    this.setState({ content: event.target.value })
  }

  render() {
    const { maxTweetLength, content } = this.state
    const isDisabled = content.length <= 0 || content.length > maxTweetLength

    const charsLeft = maxTweetLength - content.length 
    const spanClass = charsLeft < 20 ? 'tweetbox__span--warning' : ''

    return (
      <div className="tweetbox">
        <textarea
          className="tweetbox__textarea"
          onChange={this.onTextAreaChange} 
          placeholder="what's happening?"></textarea>
        <footer className="tweetbox__footer">
          <span className={spanClass}>{charsLeft}</span>
          <button disabled={isDisabled}>Tweet</button>
        </footer>
      </div>
    )
  }

}