import React, { useEffect, useState, createContext } from "react";

import api from "../services/api";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorage() {
      const userToken = localStorage.getItem("@eventify");
      if (userToken) {
        try {
          api.defaults.headers["Authorization"] = `Bearer ${userToken}`;
          const response = await api.get("/user");
          setUser(response.data);
        } catch (error) {
          console.log("Erro ao buscar usuário", error);
        }
      }
    }
    loadStorage();
  }, []);

  async function signUp(userForm) {
    try {
      const response = await api.post("/users", userForm);
      console.log(response.data);
    } catch (error) {
      console.log("Erro ao cadastrar", error);
    }
  }

  async function signIn(email, password) {
    try {
      const response = await api.post("/login", { email, password });
      const { id, username, token } = response.data;
      setUser({ id, username, email });
      localStorage.setItem("@eventify", token);
      api.defaults.headers["Authorization"] = `Bearer ${token}`;
      return true;
    } catch (error) {
      console.log("Erro ao logar", error);
      return false;
    }
  }

  function signOut() {
    localStorage.removeItem("@eventify");
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ user, signUp, signIn, signOut, loading, loadingAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
}
