import React, { useContext, useState } from "react";
import logo from "../../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Inputstyled } from "./Cadastro.styles";
import axios from "axios";
import validator from "validator";
import { UserContext } from "../../context/UserContext";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [foto, setFoto] = useState("");
  const navigate = useNavigate();
  const context = useContext(UserContext);

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
    } else {
      return true;
    }
  };

  const handlePost = async () => {
    if (!checkForm()) return;
    context.cadastro(email, nome, foto, senha);
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
