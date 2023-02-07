import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "./redux/api/todosAPI";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./utils/constants";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import LoginForm from "./components/UserForms/LoginForm/LoginForm";
import RegistrationForm from "./components/UserForms/RegistrationForm/RegistrationForm";
import { getAuth } from "./redux/api/authAPI";

function App() {
  const { auth, getAuthLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    if (userEmail) {
      getAuth(dispatch, userEmail);
    }
  }, [dispatch]);

  if (getAuthLoading) return <h2>LOADING...</h2>;
  return (
    <>
      <Header />
      <Routes>
        <Route exact path={ROUTES.home} element={<HomePage />} />
        <Route exact path={ROUTES.login} element={<LoginForm />} />
        <Route exact path={ROUTES.register} element={<RegistrationForm />} />
      </Routes>
    </>
  );
}
export default App;
