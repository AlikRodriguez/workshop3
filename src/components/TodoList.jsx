import { useContext } from "react";
import { TodoContext } from "../App";
import Todo from "./Todo";

function TodoList() {
  const { todos, deleteTodo } = useContext(TodoContext);
  const handleDelete = (index) => () => deleteTodo(index);

  return (
    <ul className="todo-list">
      {todos.map(({ text, completed }, i) => (
        <li className="todo-list-item" key={`todo-item-${i}`}>
          {/* Just one prop?? 🤔🤔 */}
          {/* maybe it needs some text and completed status */}
          <Todo text={text} completed={completed} onDelete={handleDelete(i)} />
        </li>
      ))}
      {todos.length === 0 && (
        <span role="img" aria-label="No items">
          No items 📭
        </span>
      )}
    </ul>
  );
}

export default TodoList;
