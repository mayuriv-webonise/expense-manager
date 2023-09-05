import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/Header";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Dashboard></Dashboard>
    </React.Fragment>
  );
}

export default App;
