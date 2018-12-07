import React, {Component} from 'react'

export default class InputCustom extends Component{
  // constructor(props) {
  //   super(props)
  // }
  render(){
    return(
      <div className="input-wrapper">
        <input type="text" placeholder={this.props.placeholder} name={this.props.name} onChange={this.props.vauleChange}/>
      </div>
    )
  }
}
