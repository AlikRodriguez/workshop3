import "./styles.css";

import { useState } from "react";

function Todo({ text, completed, onDelete: handleDelete }) {
  const [checked, setChecked] = useState(completed);

  const handleChange = () => setChecked(!checked);

  return (
    <div className="todo-root">
      <label className="todo-container">
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <span className="todo-text">{text}</span>
        <span className="todo-checkmark" />
      </label>
      <span className="todo-delete" title="Delete" onClick={handleDelete}>
        &times;
      </span>
    </div>
  );
}

export default Todo;
