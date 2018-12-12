import React, {Component} from 'react'

const MessageForm = class MessageForm extends Component {
  onSubmit() {
    console.log(this.username)
    console.log(this.comment)
    // var username = this.refs.username.getDOMNode.value().trim()
    // var comment = this.refs.comment.getDOMNode.value().trim()

  }

  render () {
    return(
      <div>
        <input type="text" name="username" ref={input => this.username = input}/>
        <input type="text" name="comment"ref={input => this.comment = input} />
        <br/>
        <input type="button" value="提交" onClick="this.props.submitMessage"/>
      </div>
    )
  }
}
export default {
  MessageForm
}