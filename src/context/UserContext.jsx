import { findByLabelText } from "@testing-library/react";
import { setCookie } from "nookies";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service/api";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [state, setState] = useState([]);
  const navigate = useNavigate()
  


  async function signIn(email, senha) {
    try {
      const response = await api.post("/api/v2/trackit/auth/login", {
        email: email,
        password: senha,
      });
      if (response.status === 200) {
        setCookie(undefined, "userauth.token", response.data.token, {
          maxAge: 60 * 60 * 24,
          path: "/",
        });
        
        

        

        setCookie(undefined, "userauth.image", response.data.image, {
          maxAge: 60 * 60 * 24,
          path: "/",
        });
        return "ok";
      }

      
      return false;
    } catch (e) {
      console.log(e);
      navigate("/")
      alert("Conta inválida, por favor faça seu cadastro!")
      return false
      
    }
  }

  return (
    <UserContext.Provider value={{ signIn, state, setState }}>
      {children}
    </UserContext.Provider>
  );
}
