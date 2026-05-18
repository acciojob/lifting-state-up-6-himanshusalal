import React from "react";

function TodoList({ todos, handleComplete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}

          {!todo.completed ? (
            <button onClick={() => handleComplete(todo.id)}>
              complete
            </button>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;