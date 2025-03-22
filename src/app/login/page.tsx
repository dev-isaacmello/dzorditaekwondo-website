'use client'

import { useRouter } from "next/navigation"; 
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  // Estado para armazenar usuário, senha e erro
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const users = [
    { username: "aluno", password: "dzordi" },
    { username: "admin", password: "admin" },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); 


    const validUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (validUser) {
      router.push("/dashboard"); 
    } else {
      setError("Usuário ou senha inválidos"); 
    }
  };

  return (
    <section>
      <div className="container mx-auto h-full w-fit px-8 py-16">
        <div className="flex flex-col items-center gap-1">
          <h4 className="text-center text-4xl font-bold md:text-6xl">Login</h4>
          <p className="text-secondary/40 text-lg font-bold md:text-2xl">
            Autentifique seu Acesso para continuar
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center gap-1">
          <form
            onSubmit={handleLogin} // Adiciona a lógica de login
            className="from-base hover:from-bg-secondary flex h-100 w-[calc(100vh/2)] flex-col items-center gap-2 rounded-lg border-2 border-gray-200 bg-gradient-to-bl to-white p-8 duration-400 transition-colors select-none hover:to-black hover:text-base"
          >
            {error && <p className="text-red-500 font-bold">{error}</p>}

            <label htmlFor="username" className="text-text1 text-2xl font-bold">
              Seu usuário
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-base text-text2 w-full rounded-md border-2 border-gray-200 p-2"
            />

            <label htmlFor="password" className="text-text1 text-2xl font-bold">
              Sua senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-base text-text2 w-full rounded-md border-2 border-gray-200 p-2"
            />

            <button
              type="submit"
              className="border-base mt-auto cursor-pointer rounded-md border-2 px-10 py-2 text-base"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
