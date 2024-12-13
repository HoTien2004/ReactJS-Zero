import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import './components/todo/todo.css';
import reactLogo from './assets/react.svg'
import { useState } from 'react';
const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Watching Youtube" }
  ])

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(10, 30),
      name
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos)
  }

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew
          addNewTodo={addNewTodo}
        />
        {todos.length > 0 ?
          <TodoData
            todos={todos}
            deleteTodo={deleteTodo}
          />
          :
          <div className="todo-image">
            <img className='logo' src={reactLogo} />
          </div>
        }
      </div>
    </>
  )
}

export default App