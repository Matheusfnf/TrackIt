import React from "react";
import Login from "./components/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./components/Cadastro/Cadastro";
import NavBar from "./components/NavBar/Navbar";
import Habitos from "./components/Habitos/Habitos";
import { UserProvider } from "./context/UserContext";
import Hoje from "./components/Hoje/Hoje";
import Historico from "./components/Historico/Historico";
import "react-circular-progressbar/dist/styles.css";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/habitos" element={<Habitos />} />
            <Route path="/hoje" element={<Hoje />} />
            <Route path="/historico" element={<Historico />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
