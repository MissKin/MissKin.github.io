import React, {Component} from 'react'
// import ReactDOM from 'react-dom';
import Logo from '../img/login_logo.png'
import InputCustom from '../components/input'
import './login.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  
  loginAction = () => {
    const {username, password} = this.state
    if (!username || !password) { return}
    alert('登录成功')
  };
  handleInput = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  };
  vauleChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }
  render () {
    // const {username, password} = this.state
    return (
      <div className='login-box'>
        <span className="img-logo"><img src={Logo} alt="logo"/></span>
        <span className='title'>刀具联盟配货员专用版</span>
        <div className='section'>
          <InputCustom placeholder="请输入账号" name="username" vauleChange={this.vauleChange} />
          {/* <input type="text" placeholder="请输入账号" name="username" value={username} onChange={this.handleInput}/> */}
        </div>
        <div className='section'>
        <InputCustom placeholder="请输入密码" name="password" vauleChange={this.vauleChange} />
          {/* <input type="password" name="password" value={password} placeholder="请输入密码" onChange={this.handleInput}/> */}
        </div>
        <button className='login-btn' hover-class="button-hover" onClick={this.loginAction}>登录</button>
      </div>)
  }
}

export default Login