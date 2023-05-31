import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./Components/TodoList/TodoList";
import AddTodo from "./Components/AddTodo/AddTodo";


function App() {

  return (
    <div className="App">
      <h1>My TodoList</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
