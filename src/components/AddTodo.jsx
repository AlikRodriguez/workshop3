import "./styles.css";

function AddTodo({ onClick: handleClick }) {
  return (
    <div className="add-todo" onClick={handleClick}>
      &#43;
    </div>
  );
}

export default AddTodo;
