import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Watching Youtube" }
  ]);

  const hoidanit = "Eric";
  const age = 25;
  const data = {
    address: "Hanoi",
    country: "Vietnam"
  }

  const addNewTodo = (name) => {
    const newToto = {
      id: randomIntFromInterval(1, 1000000),
      name
    }

    setTodoList([...todoList, newToto]);
  }

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={hoidanit}
        age={age}
        data={data}
        todoList={todoList}
      />

      <div className='todo-image'>
        <img src={reactLogo} alt="Logo" />
      </div>
    </div>
  )
}

export default App
