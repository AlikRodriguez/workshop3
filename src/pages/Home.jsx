import "./styles.css";

import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";
import { useContext } from "react";
import { TodoContext } from "../App";

function Home({ addTodo, deleteTodo }) {
  const todos = useContext(TodoContext);
  const handleClick = () =>
    addTodo({
      text: `Todo #${todos.length}`,
      completed: false
    });
  return (
    <div className="home-root">
      {/* What props should be passed to the list? */}
      <TodoList />
      {/* this needs something 🤔 */}
      <AddTodo onClick={handleClick} />
    </div>
  );
}

export default Home;
