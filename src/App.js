import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { OpenRoute, PrivateRoute } from "./utils/routes";
import { getTodos } from "./redux/api/todosAPI";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  // const { todos, getTodosLoading } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    getTodos(dispatch);
  }, [dispatch]);

  // if (getTodosLoading) return <h2>LOADING...</h2>;
  return (
    <>
      <Header />
      <Routes></Routes>
    </>
  );
}

export default App;
