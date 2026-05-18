import React from "react";

function TodoList({ todos, handleComplete }) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>
            {todo.text} -{" "}
            {todo.completed ? "Completed" : "Pending"}
          </p>

          {!todo.completed && (
            <button
              onClick={() => handleComplete(todo.id)}
            >
              Complete
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;