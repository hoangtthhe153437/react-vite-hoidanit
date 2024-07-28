import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
import Header from './components/layout/header'
import Footer from './components/layout/footer'

const App = () => {

  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning React" },
    // { id: 2, name: "Watching Youtube" }
  ]);

  const addNewTodo = (name) => {
    const newToto = {
      id: randomIntFromInterval(1, 1000000),
      name
    }

    setTodoList([...todoList, newToto]);
  }

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  }

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew
          addNewTodo={addNewTodo}
        />

        {todoList.length > 0 ?
          <TodoData
            todoList={todoList}
            removeTodo={removeTodo}
          /> :
          <div className='todo-image'>
            <img src={reactLogo} alt="Logo" />
          </div>}
      </div>
      <Footer />
    </>
  )
}

export default App
