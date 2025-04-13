import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/login";
import Register from "./components/Auth/register";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Register} />
        <Route path="/login" Component={Login} />
        <Route path="/Dashboard" Component={Dashboard} />
        <Route path="/Home" Component={HomePage} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
