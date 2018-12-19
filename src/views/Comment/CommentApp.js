import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './index.css'

class CommentApp extends Component {
  constructor () {
    super ()
    this.state = {
      comments: []
    }
  }

  handleSubmitComment (comment) {
    console.log(comment)
    if (!comment) {
      return
    }
    if (!comment.name) {
      return alert('用户名不能为空')
    }
    if (!comment.context) {
      return alert('内容不能为空')
    }
    console.log(comment)
    const { comments } = this.state
    comments.unshift(comment)
    this.setState({
      comments
    })
  }

  render() {
    return(
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
        <CommentList comments={this.state.comments}/>
      </div>
    )
  }
}
export default CommentApp