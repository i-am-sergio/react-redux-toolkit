import "./App.css";
import { useSelector } from "react-redux";
import TaskForm from './components/TaskForm'
import TasksList from './components/TasksList'

function App() {
  
  const tasksState = useSelector(state => state.tasks)
  console.log(tasksState)

  return (<div>
    <h1>Hello World</h1>
    <TaskForm />
    <TasksList />
  </div>);
}

export default App;
