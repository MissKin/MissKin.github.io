import React, {Component} from 'react'
import PropTypes from 'prop-types'

class CommmentInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }
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
      this.props.onSubmit({name, context, createdTime: +new Date()})
    }
    this.setState({context: ''})
  }

  _saveNameStorage (name) {
    localStorage.setItem('name', name)
  }

  handleNameBlur (event) {
    localStorage.setItem('name',event.target.value)
  }

  componentDidMount() {
    // 自动获取焦点
    this.textarea.focus()
    // 名字持久化
    const nameStorage = localStorage.getItem('name')
    this.setState({
      name: nameStorage
    })
  }

  componentWillMount () {
    this._loadName()
  }
  _loadName() {
    const name = localStorage.getItem('name')
    if (name) {
      this.setState({name})
    }
  }
  render () {
    return (
      <section className="comment-input">
        <div className="comment-field">
          <span className='comment-field-name'>用户名</span>
          <div className='comment-field-input'>
            <input 
            value={this.state.name}
            onBlur = {this.handleNameBlur.bind(this)}
            onChange={this.handleNameChange.bind(this)} />
          </div>
        </div>
        <div className="comment-field">
          <span className='comment-field-name'>评论</span>
          <div className='comment-field-input'>
            <textarea
            ref = {(textarea) => this.textarea = textarea}
            value={this.state.context} onChange={this.handleContextChange.bind(this)} />
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