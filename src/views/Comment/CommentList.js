import React, {Component} from 'react'
import Comment from './Comment'
class CommentList extends Component {
  
  render () {
    return (
      <div>
        {this.props.comments.map((comment, i) => <Comment name={comment.name} context={comment.context} key={i}/> )}
      </div>
    )
  }
}

export default CommentList