import React, { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function PageSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const inputRef = useRef(null);

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  localStorage.setItem("redirect_to", location.pathname);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (email && password) {
        const response = await signIn(email, password);
        if (!response) {
          return alert("Erro ao fazer login");
        }
        const redictTo = localStorage.getItem("redirect_to");
        if (redictTo === "/signin") {
          navigate("/");
        } else {
          navigate(redictTo);
        }
      } else {
        alert("Preencha todos os campos");
      }
    } catch (error) {
      console.log(error);
      alert("Erro ao fazer login");
    }
  }

  const togglePasswordVisible = () => {
    if (inputRef.current.type === "password") {
      setPasswordVisible(true);
      inputRef.current.type = "text";
    } else {
      setPasswordVisible(false);
      inputRef.current.type = "password";
    }
  };

  return (
    <div>
      <section class="bg-gray-50">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="/"
            class="flex items-center mb-6 text-4xl italic font-semibold"
          >
            Eventify
          </a>
          <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-center">
                Faça login em sua conta e aproveite o Eventify!
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5"
                    placeholder="Endereço de e-mail"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label for="password" class="block mb-2 text-sm font-medium">
                    Password
                  </label>
                  <div
                    className="
                      relative
                      flex
                      items-center
                      justify-center
                      w-full
                      text-gray-400
                      focus-within:text-black
                    "
                  >
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Senha"
                      class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      ref={inputRef}
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisible}
                      class="absolute right-0 top-0 mt-2 mr-4"
                    >
                      {passwordVisible ? (
                        <EyeIcon className="h-6 w-6 text-black" />
                      ) : (
                        <EyeSlashIcon className="h-6 w-6 text-black" />
                      )}
                    </button>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3"
                        required=""
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="remember" class="text-gray-500">
                        Lembrar-me
                      </label>
                    </div>
                  </div>
                  <a href="#" class="text-sm font-medium hover:underline">
                    Esqueceu sua senha?
                  </a>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-purple-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Entrar
                </button>
                <p class="text-sm text-gray-500">
                  Não tem uma conta ainda?{" "}
                  <a
                    href="/signup"
                    class="font-medium hover:underline text-black"
                  >
                    Cadastre-se
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
