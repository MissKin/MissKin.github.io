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

  componentWillMount () {
    this._loadComments()
  }

  _loadComments () {
    let comments = localStorage.getItem('comments')
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({comments})
    }
  }

  _saveComments (comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }
  
  handleSubmitComment (comment) {
    if (!comment) {
      return
    }
    if (!comment.name) {
      return alert('用户名不能为空')
    }
    if (!comment.context) {
      return alert('内容不能为空')
    }
    const { comments } = this.state
    comments.unshift(comment)
    this._saveComments(comments)
    this.setState({
      comments
    })
  }

  handleDeleteComment (index) {
    let comments = this.state.comments
    comments.splice(index, 1)
    this.setState({comments})
    this._saveComments(comments)
  }
  render() {
    return(
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
        <CommentList comments={this.state.comments} onDeleteComment = {this.handleDeleteComment.bind(this)}/>
      </div>
    )
  }
}
export default CommentApp