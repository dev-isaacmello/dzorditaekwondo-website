"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import logoDzordi from "../../../public/LOGOTIPO.webp";
import Image from "next/image";

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
    <section>
      <div className="container mx-auto h-full w-fit px-8 py-16">
        {errorMessage && (
          <p className="fixed bottom-10 left-10 rounded-md border-2 border-gray-700 bg-red-500 p-6 text-center text-base font-bold">
            {errorMessage}
          </p>
        )}
        <div className="flex h-full flex-1 flex-col justify-center rounded-2xl border-2 border-gray-300 bg-white py-12 md:w-[calc(100vh/1)] w-[calc(100vh/2)] px-8 shadow-lg">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image
              alt="Your Company"
              src={logoDzordi}
              className="mx-auto h-18 w-auto"
            />
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
                className="bg-primary hover:bg-secondary block w-full cursor-pointer rounded-md px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 transition-colors duration-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
