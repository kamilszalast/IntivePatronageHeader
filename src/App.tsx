import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import LoginSite from "./pages/LoginSite/LoginSite";

function App() {
  return (
    <div>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={MainPage()}></Route>
            <Route path="/login" element={LoginSite()}></Route>
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
