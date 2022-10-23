import { setCookie } from "nookies";
import React, { createContext } from "react";
import api from "../service/api";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  async function signIn(email, senha) {
    try {
      const response = await api.post("/api/v2/trackit/auth/login", {
        email: email,
        password: senha,
      });
      console.log(response);
      if (response.status === 200) {
        setCookie(undefined, "userauth.token", response.data.token, {
          maxAge: 60 * 60 * 24,
          path: "/",
        });
        return true;
      }

      alert("Erro!");
      return false;
    } catch (e) {
      console.log(e);
      alert("Erro!");

      return false;
    }
  }
  return (
    <UserContext.Provider value={{ signIn }}>{children}</UserContext.Provider>
  );
}
