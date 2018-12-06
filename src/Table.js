import React, { Component } from 'react'

// simple component

const Thead = () => {
  return (
    <thead>
      <th>Name</th>
      <th>Job</th>
      <th>remove</th>
    </thead>
  )
}

const Tbody = (props) => {
  const rows = props.charactersData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={ () => props.removeCharacter(index)}>删除</button>
        </td>
      </tr>
    )
  })
  return (
    <tbody>{rows}</tbody>
  )
}

// class component
class Table extends Component {
  render () {
    const { charactersData, removeCharacter } = this.props
    return (
      <table>
        <Thead/>
        <Tbody charactersData ={charactersData} removeCharacter= {removeCharacter}/>
      </table>
    )
  }
}

export default Table