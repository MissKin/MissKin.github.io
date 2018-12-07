import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'
import './index.css';
import Login from './Login/login'
// class App extends Component {
//   render () {
//     return (
//       <div className="App">
//         <h1>Hello World！</h1>
//       </div>
//     )
//   }
// }

// class TodoList extends Component {
//   render () {
//     return (
//       <div>
//         <App/>
//         <h2> Hello React!</h2>
//       </div>
//     )
//   }
// }
ReactDOM.render(<Login/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
