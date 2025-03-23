"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import TransitionsModal from "../_components/Modal/Modal";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const showError = (message: string) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage("");
    }, 2000);
  };

  const users = [
    { username: "aluno", password: "dzordi" },
    { username: "admin", password: "admin" },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const validUser = users.find(
      (user) => user.username === username && user.password === password,
    );

    if (validUser) {
      router.push("/dashboard");
    } else {
      showError("Usuário ou senha inválidos");
    }
  };

  return (
    <section className="">
      <div className="container mx-auto h-full w-fit px-8 py-16">
        {errorMessage && (
          <p className="fixed bottom-10 left-10 rounded-md bg-red-500 p-6 text-center text-base font-bold shadow-lg shadow-black/40">
            {errorMessage}
          </p>
        )}
        <div className="flex h-full w-[calc(100vh/2)] flex-1 flex-col justify-center rounded-2xl border-2 border-gray-300 bg-white px-8 py-12 shadow-2xl md:w-[calc(100vh/2)]">
          <h2 className="mt-4 text-center text-2xl font-bold text-gray-900">
            Login
          </h2>
          <span className="text-center text-sm text-gray-400">
            Insira suas credencias de Aluno ou Administrador
          </span>

          <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              action="#"
              method="POST"
              className="space-y-6"
              onSubmit={handleLogin}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Usuário
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Senha
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="bg-primary hover:bg-secondary block h-12 w-full cursor-pointer rounded-md px-3 py-1.5 text-2xl text-base font-bold transition-colors duration-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                Entrar
              </button>
              <TransitionsModal />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
