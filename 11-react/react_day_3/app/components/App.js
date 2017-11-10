import React from 'react'
import PasswordInput from './PasswordInput'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      tasks: [],
      newTaskText: ''
    }
  }

  componentDidMount() {
    const url = "http://localhost:9999/api/tasks" 
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({ tasks: res.items })
      })
  }

  handleInputChange(e) {
    this.setState({ newTaskText: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    var tasks = this.state.tasks
    tasks.push(this.state.newTaskText)
    this.setState({ tasks: tasks, newTaskText: '' }) 
  }

  render() {
    const { tasks } = this.state
    const createListItem = (task, index) => {
      return <li key={index}>{task}</li>
    } 

    return <div>
      <h1>todor</h1>
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          value={this.state.newTaskText} 
          onChange={this.handleInputChange} />
        <button>add</button>
      </form>
      <ul>
        {tasks.map(createListItem)}
      </ul>
    </div>
  }

}

module.exports = App