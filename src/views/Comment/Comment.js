import React, { Component } from 'react'

class Comment extends Component {
  render () {
    return(
      <div className="comment">
        <div className='comment-user'>
          <span>{this.props.name}</span>
        </div>
        <p>{this.props.context}</p>
      </div>
    )
  }
}

export default Comment