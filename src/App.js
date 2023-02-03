import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "./redux/api/todosAPI";
import UserForms from "./components/UserForms/UserForms";

function App() {
  const { todos, getTodosLoading } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    getTodos(dispatch);
  }, [dispatch]);

  if (getTodosLoading) return <h2>LOADING...</h2>;
  return (
    <div className="App">
      <UserForms />
      {todos.map((todo) => (
        <h2 key={todo.title}>{todo.title}</h2>
      ))}
    </div>
  );
}

export default App;
