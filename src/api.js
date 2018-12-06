import React, { Component } from 'react'

class Api extends Component {
  state = {
    data: []
  };
  componentDidMount () {
    const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'
    fetch(url)
        .then(res => res.json())
        .then(res => {
          this.setState({
            data: res
          })
        })
  };
  render () {
    const data = this.state.data
    const result = data.map((every, index) => {
      return <li key={index}>{every}</li>
    })
    return (
      <ul className="api-wrapper"> {result} </ul>
    )
  }
}

export default Api