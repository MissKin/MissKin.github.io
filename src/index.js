import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'
import './index.css';
// import Login from './views/Login/login'
// import TodoBox from './views/TODO/todolist'
import CommentApp from './views/Comment/CommentApp'
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
ReactDOM.render(<CommentApp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
