import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TagButtons from './components/TagButtons'
import ViewTasks from './components/ViewTasks'
import {
  GlobalDiv,
  TaskBlock,
  Form,
  Input,
  Select,
  Button,
  ShowTab,
  TagBtns,
  TaskShow,
} from './styledComponents'
import './App.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class App extends Component {
  state = {
    tasks: '',
    tag: tagsList[0].optionId,
    taskList: [],
    filterId: '',
  }

  onSubmitTask = event => {
    const {tasks, tag} = this.state
    event.preventDefault()
    const newTask = {
      id: uuidv4(),
      displayTask: tasks,
      tag,
      displayTag: tagsList.find(each => each.optionId === tag).displayText,
    }
    this.setState(prevState => ({
      taskList: [...prevState.taskList, newTask],
      tasks: '',
      tag: tagsList[0].optionId,
    }))
  }

  onChangeOption = event => {
    this.setState({tag: event.target.value})
  }

  onChangeTask = event => {
    this.setState({tasks: event.target.value})
  }

  filterList = id => {
    this.setState(prevState => ({
      filterId: prevState.filterId === id ? '' : id,
    }))
  }

  render() {
    const {tasks, taskList, filterId} = this.state
    const filteredList =
      filterId === ''
        ? taskList
        : taskList.filter(each => each.tag === filterId)
    console.log(filteredList)
    return (
      <GlobalDiv>
        <TaskBlock>
          <h1>Create a task!</h1>
          <Form onSubmit={this.onSubmitTask}>
            <label htmlFor="task">Task</label>
            <Input
              type="text"
              placeholder="Enter the task here"
              onChange={this.onChangeTask}
              value={tasks}
            />
            <label htmlFor="task">Tags</label>
            <Select onChange={this.onChangeOption}>
              {tagsList.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </Select>
            <Button type="submit">Add Task</Button>
          </Form>
        </TaskBlock>
        <ShowTab>
          <h1>Tags</h1>
          <TagBtns>
            {tagsList.map(each => (
              <TagButtons
                item={each}
                key={each.optionId}
                filterList={this.filterList}
                activeTag={filterId}
              />
            ))}
          </TagBtns>
          <h1>Tasks</h1>
          <TaskShow>
            {filteredList.map(each => (
              <ViewTasks task={each} key={each.id} />
            ))}
            {filteredList.length === 0 && <p>No Tasks Added Yet</p>}
          </TaskShow>
        </ShowTab>
      </GlobalDiv>
    )
  }
}

export default App
