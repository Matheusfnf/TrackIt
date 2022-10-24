import React, { useState } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { Inputstyled } from "./Cadastro.styles";
import axios from "axios";
import validator from "validator";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [foto, setFoto] = useState("");

 

  const checkForm = () => {
    if (nome.length < 3 || nome.length > 20) {
      alert("nome invalido");
      return false;
    }
    if (!validator.isEmail(email)) {
      alert("email invalido");
      return false;
    }
    if (senha.length < 3 || senha.length > 20) {
      alert("senha invalida");
      return false;
    }
    if (!validator.isURL(foto)) {
      alert("foto invalida");
      return false;
    }

    return true;
  };

  const handlePost = async () => {
    try {
      if (!checkForm()) return;
      const response = await axios.post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
        {
          email,
          name: nome,
          image: foto,
          password: senha,
        }
      );
      console.log(response);
    } catch (e) {
      console.log(e);
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
            id="email"
            name="email"
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
          <input
            type="text"
            id="username"
            name="username"
            placeholder="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            id="foto"
            name="foto"
            placeholder="foto"
            value={foto}
            onChange={(e) => setFoto(e.target.value)}
          />
          <Link to="/">
            <p> Já tem uma conta? Faça login!</p>
          </Link>
          <button type="submit">Cadastrar</button>
        </form>
      </Inputstyled>
    </>
  );
}
