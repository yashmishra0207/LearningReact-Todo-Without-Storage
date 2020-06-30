import React from "react";
import '../App.css';

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(({ id, content }) => {
      return (
        <div onClick={() => deleteTodo(id)} className="collection-item fade" key={id}>
          <span>{content}</span>
        </div>
      );
    }
    )
  ) : (
    <h3 className="center green-text fade">Yay! You did what you dreamt...</h3>
  );

  return <div className="todos collection">{todoList}</div>;
};
export default Todos;
