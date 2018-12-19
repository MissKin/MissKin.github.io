import React, {Component} from 'react'
import './todo.css'

class TodoBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [
        {"id": "0001", "task":"吃饭", "complete": "false"},
        {"id": "0002", "task":"睡觉", "complete": "false"},
        {"id": "0003", "task":"打豆豆", "complete": "true"},
      ]
    }
  }
  // 删除一项
  handleTaskDelete = (taskId) => {
    const { data } = this.state
    this.setState({
      data: data.filter((task, index) => {
        return task.id !== taskId
      })
    })
  }
  // 切换任务状态
  handleToggle = (taskId) => {
    const { data } = this.state
    for (let i in data) {
      if (data[i].id === taskId) {
        data[i]['complete'] = data[i]['complete'] === 'true' ? 'false' :'true'
        break;
      }
    }
    this.setState({data})
  }

  // 任意随机id
  generateId = () => {
    return Math.floor(Math.random() * 9000) + 1000
  }
  // 新增 一项任务
  handleSubmit = (task) => {
    var { data } = this.state
    const id = this.generateId()
    this.setState({
      data: data.concat([{'id': id, "task": task, 'complete': 'false'}])
    })
  }
  componentDidMounted() {
    this.getInitialState()
  }
  render () {
    console.log(this.state.data)
    const statistics = {
      todoCount: this.state.data.length || 0,
      todoCompleteCount: this.state.data.filter((item) => {
        return item.complete === 'true'
      }).length
    }
    return (
    <div className="todobox">
      <h2 className="todo-title">React Todo</h2>
        <TodoList data={this.state.data}
          deleteTask = {this.handleTaskDelete}
          toggleTask = {this.handleToggle}
          todoCount={statistics.todoCount}
          todoCompleteCount= {statistics.todoCompleteCount}/>
        <TodoFooter submitTask = {this.handleSubmit}/>
    </div>
    )
  }
}

class TodoList extends Component {
  render() {
    const tasklist = this.props.data.map(function(listItem) {
      return (
        <TodoItem
          taskId = {listItem.id}
          key = {listItem.id}
          task = {listItem.task}
          complete = {listItem.complete}
          deleteTask = {this.props.deleteTask}
          toggleComplete = {this.props.toggleTask}
        />
      )
    }, this)
    return (
      <ul className="list-group">
        {tasklist}
      </ul>
    )
  }
}
class TodoItem extends Component {
  toggleComplete = () => {
    this.props.toggleComplete(this.props.taskId)
  }
  deleteTask = () => {
    this.props.deleteTask(this.props.taskId)
  }
  handleMouseOver = () => {
    // console.log(this.refs.deleteBtn)
  }
  handleMouseOut = () => {
    // console.log(this.refs.deleteBtn)
  }
   render () {
     let task = this.props.task
     let classes = 'list-group-item'
     let itemChecked
     console.log(this.props.complete)
     if (this.props.complete === 'true') {
      task = <s>{task}</s>
      itemChecked = true
      classes += ' list-group-item-success'
     } else {
      itemChecked = false;
     }
     console.log(itemChecked)
     return (
       <li className= {classes}
       onMouseOver = {this.handleMouseOver}
       onMouseOut = {this.handleMouseOut}
       >
       <input type="checkbox" checked={itemChecked} onChange={this.toggleComplete} className="pull-left"/>
        {task}
        <div className="pull-right">
          <button type="button" className="btn btn-xs close" onClick={this.deleteTask} ref="deleteBtn">刪除</button>
        </div>
       </li>
     )
   }
}

class TodoFooter extends Component {
  render () {
    return (
      <div>
        这是尾部
      </div>
    )
  }
}

export default TodoBox