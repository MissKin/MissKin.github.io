import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Form from './form'
import Api from './api'

class App extends Component {
  state = {
    characters: [
      {
        'name': 'Charlie',
        'job': 'Janitor'
      },
      {
        'name': 'Mac',
        'job': 'Bouncer'
      },
      {
          'name': 'Dee',
          'job': 'Aspring actress'
      },
      {
          'name': 'Dennis',
          'job': 'Bartender'
      }
    ]
  }
  removeCharacter = index => {
    const { characters } = this.state
    this.setState ({
      characters: characters.filter ((character, i) => {
        return index !== i
      })
    })
  }
  handleSubmit = character => {
    this.setState({
      characters: [...this.state.characters, character]
    })
  }
  render () {
    return (
      <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Hello App !</h1>
        <Table charactersData = {this.state.characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit= {this.handleSubmit}/>
        <Api/>
      </div>
    )
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             this is edit place!
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
