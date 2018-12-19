import React, {Component} from 'react'

class CommmentInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      context: ''
    }
  }

  handleNameChange (event) {
    this.setState ({
      name: event.target.value
    })
  }

  handleContextChange (event) {
    this.setState ({
      context: event.target.value
    })
  }

  handleSubmit () {
    if (this.props.onSubmit) {
      const {name, context} = this.state
      this.props.onSubmit({name, context})
    }
    this.setState({context: ''})
  }
  render () {
    return (
      <section className="comment-input">
        <div className="comment-field">
          <span className='comment-field-name'>用户名</span>
          <div className='comment-field-input'>
            <input value={this.state.name} onChange={this.handleNameChange.bind(this)} />
          </div>
        </div>
        <div className="comment-field">
          <span className='comment-field-name'>评论</span>
          <div className='comment-field-input'>
            <textarea value={this.state.context} onChange={this.handleContextChange.bind(this)} />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </section>
    )
  }
}

export default CommmentInput