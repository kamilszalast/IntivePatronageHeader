import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      {/* <Layout> */}
      <Routes>
        <Route path="/" element={null}></Route>
        <Route path="/" element={null}></Route>
        <Route path="/" element={null}></Route>
      </Routes>
      {/* </Layout> */}
    </div>
  );
}

export default App;
