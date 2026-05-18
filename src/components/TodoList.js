import React from "react";

function TodoList({ todos, handleComplete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <button onClick={() => handleComplete(todo.id)}>a
            Complete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;