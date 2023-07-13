import React, { useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function PageSignUp() {
  const pessoaFisica = "pessoa_fisica";
  const pessoaJuridica = "pessoa_juridica";

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    username: "",
    telefone: "",
    cpf: "",
    cnpj: "",
  });
  const [typePerson, setTypePerson] = useState(pessoaFisica);
  const [checked, setChecked] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const inputRef = useRef(null);

  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleTelefoneChange = (e) => {
    const input = e.target.value;
    const numberFormat = input
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    setFormValues({ ...formValues, telefone: numberFormat });
  };

  const handleCpfChange = (e) => {
    const input = e.target.value;
    const numberFormat = input
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    setFormValues({ ...formValues, cpf: numberFormat, cnpj: "" });
  };

  const handleCnpjChange = (e) => {
    const input = e.target.value;
    const numberFormat = input
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    setFormValues({ ...formValues, cnpj: numberFormat, cpf: "" });
  };
  async function handleRegister() {
    const { email, password, username, telefone, cpf, cnpj } = formValues;

    if (email === "" || password === "" || username === "" || telefone === "") {
      alert("Preencha todos os campos!");
      return;
    }
    const userForm = {
      username,
      email,
      password,
      phone: telefone,
      cpf,
      cnpj,
      typePerson,
    };
    signUp(userForm);
    navigate("/signin");
    setFormValues({
      email: "",
      password: "",
      username: "",
      telefone: "",
      cpf: "",
      cnpj: "",
    });
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
      <section class="bg-gray-50 py-10">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <a
            href="/"
            class="flex items-center mb-6 text-4xl font-semibold italic"
          >
            Eventify
          </a>
          <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-center">
                Crie sua conta e comece a organizar seus eventos agora mesmo!
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={handleRegister}>
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
                    value={formValues.email}
                    onChange={handleChange}
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
                      value={formValues.password}
                      onChange={handleChange}
                      ref={inputRef}
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisible}
                      className="absolute right-2 top-2"
                    >
                      {passwordVisible ? (
                        <EyeIcon className="h-5 w-5 text-gray-400" />
                      ) : (
                        <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <label for="username" class="block mb-2 text-sm font-medium">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Nome de usuário"
                    class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5"
                    required
                    value={formValues.username}
                    onChange={handleChange}
                    maxLength={20}
                  />
                </div>
                <div>
                  <label for="telefone" class="block mb-2 text-sm font-medium">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    id="telefone"
                    placeholder="Telefone"
                    class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5"
                    required
                    value={formValues.telefone}
                    onChange={handleTelefoneChange}
                    maxLength={11}
                  />
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
                        checked={checked}
                        onClick={() => {
                          setTypePerson(pessoaFisica);
                          setChecked(true);
                        }}
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="remember" class="text-gray-500">
                        Pessoa Física
                      </label>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3"
                        required=""
                        checked={!checked}
                        onClick={() => {
                          setTypePerson(pessoaJuridica);
                          setChecked(false);
                        }}
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="remember" class="text-gray-500">
                        Pessoa Jurídica
                      </label>
                    </div>
                  </div>
                </div>
                {typePerson === pessoaFisica ? (
                  <div>
                    <label for="cpf" class="block mb-2 text-sm font-medium">
                      CPF
                    </label>
                    <input
                      type="text"
                      name="cpf"
                      id="cpf"
                      placeholder="CPF"
                      class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5"
                      required
                      value={formValues.cpf}
                      onChange={handleCpfChange}
                      maxLength={14}
                      minLength={11}
                    />
                  </div>
                ) : (
                  <div>
                    <label for="cnpj" class="block mb-2 text-sm font-medium">
                      CNPJ
                    </label>
                    <input
                      type="text"
                      name="cnpj"
                      id="cnpj"
                      placeholder="CNPJ"
                      class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5"
                      required
                      value={formValues.cnpj}
                      onChange={handleCnpjChange}
                      maxLength={18}
                      minLength={14}
                    />
                  </div>
                )}
                <button
                  type="submit"
                  class="w-full text-white bg-purple-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Criar conta
                </button>
                <p class="text-sm text-gray-500">
                  Já tem uma conta?{" "}
                  <a
                    href="/signin"
                    class="font-medium hover:underline text-black"
                  >
                    Entrar
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
