import Button from "../../components/Button";
import "./todolayout.css";
import { useState } from "react";

function TodoLayout() {
  const [todos, setTodos] = useState([]);

  const addTodo = () => {};

  return (
    <div className="container">
      <div className="header">Todo</div>
      <div className="input-group">
        <input
          type="text"
          className="todoText"
          placeholder="What to do today?"
        ></input>
        <Button color="green">Add</Button>
      </div>
      <div className="task-group">
        {todos.map((todo) => {
          return (
            <div className="task-list">
              <div className="task">{todo}</div>
              <Button color="red">Delete</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodoLayout;
