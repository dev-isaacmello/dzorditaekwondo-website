"use client";

import Link from "next/link";
import { Menu } from "@deemlol/next-icons";
import { useState } from "react";
import Image from "next/image";
import LogoDzordi from "../../../public/LOGOTIPO.webp";

export function Header() {
  const [isMenuOpen, SetIsMenuOpen] = useState(false);

  return (
    <header className="bg-bg-primary text-text1">
      <div className="container mx-auto px-8 py-6">
        <nav className="flex h-full items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={LogoDzordi}
              alt="LogoMarca"
              priority
              quality={100}
              width={50}
              height={50}
            />
            <h3 className="font-bold">
              ETKD<span className="text-primary">DZORDI</span>
            </h3>
          </div>
          <ul className="text-md hidden items-center gap-4 font-semibold md:flex">
            <li className="hover:text-primary transition-colors duration-300">
              <Link href="/">Inicio</Link>
            </li>
            <li className="hover:text-primary transition-colors duration-300">
              <Link href="/about">Sobre</Link>
            </li>
            <li className="hover:text-primary transition-colors duration-300">
              <Link href="/comps">Competições</Link>
            </li>
            <li className="hover:text-primary transition-colors duration-300">
              <Link href="/plans">Planos</Link>
            </li>
          </ul>
          <Link
            href="/login"
            className="bg-primary hover:bg-primary/80 hidden cursor-pointer items-center justify-center duration-200 rounded-md px-6 py-2 font-semibold md:flex"
          >
            Login
          </Link>
          <Menu
            className="block cursor-pointer md:hidden"
            onClick={() => SetIsMenuOpen(!isMenuOpen)}
          />
          <div
            className={`bg-base transition-transofrm text-secondary absolute top-18 left-0 flex w-full transform flex-col items-center gap-6 text-lg font-semibold md:hidden ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
            style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
          >
            <Link
              href="/"
              className="bg-base hover:bg-primary w-full p-4 text-center"
            >
              Inicio
            </Link>
            <Link
              href="/about"
              className="bg-base hover:bg-primary w-full p-4 text-center"
            >
              Sobre
            </Link>
            <Link
              href="/comps"
              className="bg-base hover:bg-primary w-full p-4 text-center"
            >
              Competições
            </Link>
            <Link
              href="/plans"
              className="bg-base hover:bg-primary w-full p-4 text-center"
            >
              Planos
            </Link>
            <Link
              href="/login"
              className="bg-base hover:bg-primary w-full p-4 text-center"
            >
              Login
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
