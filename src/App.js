import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "./redux/api/todosAPI";

function App() {
  const { todos, getTodosLoading } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    getTodos(dispatch);
  }, []);

  if (getTodosLoading) return <h2>LOADING...</h2>;
  return (
    <div className="App">
      {todos.map((todo) => (
        <h2 key={todo.title}>{todo.title}</h2>
      ))}
    </div>
  );
}

export default App;
