import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
  static popTypes = {
    comment: PropTypes.object.isRequired,
    onDeleteComment: PropTypes.func,
    index: PropTypes.number
  }

  constructor () {
    super()
    this.state= {timeString: ''}
  }

  componentWillMount() {
    this._updateTimeString()
  }

  componentDidMount () {
    this.timer = setInterval(() =>{
      this._updateTimeString()
    }, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }
  _updateTimeString () {
    const comment = this.props.comment
    const duration = (+new Date() - comment.createdTime) / 1000
    this.setState({
      timeString: duration > 60
      ? (duration / 60 / 60 > 1 ? `${Math.round(duration / 60 / 60)}小时前` : `${Math.round(duration / 60)}分钟前`)
      : `${Math.round(Math.max(duration, 1))}秒前`
    })
  }

  _getProcessedContent (context) {
    return context
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&quot;')
      .replace(/'/g, '&#039;')
      .replace(/'/g, '&#039;')
      .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }

  handleDelete () {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index)
    }
  }
  render () {
    const comment = this.props.comment
    return(
      <div className="comment">
        <div className='comment-user'>
          <span>{comment.name}</span>
        </div>
        <p dangerouslySetInnerHTML={{__html: this._getProcessedContent(comment.context)}}></p>
        <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
        <span className='comment-delete' onClick={this.handleDelete.bind(this)}>
          删除
        </span>
      </div>
    )
  }
}

export default Comment