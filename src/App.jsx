import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import './components/todo/todo.css';
import reactLogo from './assets/react.svg'
const App = () => {
  const myName = "React";
  const myAge = 20;
  const data = {
    address: "HCM",
    country: "Vietnam"
  }
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew />
        <TodoData
          name={myName}
          age={myAge}
          data={data}
        />
        <div className="todo-image">
          <img className='logo' src={reactLogo} />
        </div>
      </div>
    </>
  )
}

export default App