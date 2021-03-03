import "./styles.css";

import React, { useState } from "react";

import Home from "./pages/Home";

import todosInit from "./assets/todos";
const TodoContext = React.createContext();

function App() {
  const [todos, setTodos] = useState(todosInit);
  const addTodo = (todo) => setTodos((prevTodos) => [...prevTodos, todo]);
  const deleteTodo = (index) =>
    setTodos((prevTodos) => prevTodos.filter((todo, i) => i !== index));
  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      <div className="App">
        <h1>To-do list</h1>

        {/* Seems that Home is missing some props 😬 */}
        <Home deleteTodo={deleteTodo} addTodo={addTodo} />
      </div>
    </TodoContext.Provider>
  );
}

export { TodoContext, App };
