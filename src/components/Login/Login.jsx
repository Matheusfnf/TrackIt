import React, { useContext, useState } from "react";
import { Inputstyled } from "./Login.styles";
import logo from "../../images/logo.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import validator from "validator";
import axios from "axios";
import { UserContext } from "../../context/UserContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const context = useContext(UserContext);
  const navigate = useNavigate();
  const checkForm = () => {
    if (!validator.isEmail(email)) {
      alert("email invalido");
      return false;
    }
    if (senha.length < 3 || senha.length > 20) {
      alert("senha invalida");
      return false;
    }

    return true;
  };

  const handlePost = async () => {
    try {
      if (!checkForm()) return;
      const rsp = context.signIn(email, senha);
      console.log(rsp)
      if (rsp) navigate("/habitos");
    } catch (e) {
      console.log(e);
      alert("oi")
    }
  };

  return (
    <>
      <Inputstyled>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlePost();
          }}
        >
          <img src={logo} />
          <input
            type="email"
            id="username"
            name="username"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button type="submit"> Enviar </button>
          <Link to="/cadastro">
            <p> Não tem uma conta? Cadastre-se</p>
          </Link>
        </form>
      </Inputstyled>
    </>
  );
}
