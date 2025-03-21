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
      <div className="container mx-auto px-8 py-4">
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
          <ul className="text-md hidden items-center gap-2 font-semibold md:flex">
            <li className="hover:border-base hover:shadow-base/70 cursor-pointer rounded-md border-2 border-transparent p-2 transition-colors duration-300 select-none hover:border-2 hover:shadow-lg">
              <Link href="/">Inicio</Link>
            </li>
            <li className="hover:border-base hover:shadow-base/70 cursor-pointer rounded-md border-2 border-transparent p-2 transition-colors duration-300 select-none hover:border-2 hover:shadow-lg">
              <Link href="/about">Sobre</Link>
            </li>
            <li className="hover:border-base hover:shadow-base/70 cursor-pointer rounded-md border-2 border-transparent p-2 transition-colors duration-300 select-none hover:border-2 hover:shadow-lg">
              <Link href="/comps">Competições</Link>
            </li>
            <li className="hover:border-base hover:shadow-base/70 cursor-pointer rounded-md border-2 border-transparent p-2 transition-colors duration-300 select-none hover:border-2 hover:shadow-lg">
              <Link href="/plans">Planos</Link>
            </li>
          </ul>
          <Link
            href="/login"
            className="border-base hover:bg-primary/80 shadow-base/70 hidden cursor-pointer items-center justify-center rounded-md border-2 px-6 py-2 font-semibold shadow-lg duration-200 hover:border-transparent hover:shadow-none md:flex"
          >
            Login
          </Link>
          <Menu
            className="block cursor-pointer md:hidden"
            onClick={() => SetIsMenuOpen(!isMenuOpen)}
          />
          <div
            className="bg-base transition-transofrm text-secondary absolute top-20 left-0 flex w-full transform flex-col items-center gap-6 text-lg font-semibold md:hidden"
            onClick={() => SetIsMenuOpen(!isMenuOpen)}
            style={{ display: isMenuOpen ? "flex" : "none" }}
          >
            <Link
              href="/"
              className="bg-base hover:bg-primary w-full p-4 text-center"
              onClick={() => SetIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/about"
              className="bg-base hover:bg-primary w-full p-4 text-center"
              onClick={() => SetIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="/comps"
              className="bg-base hover:bg-primary w-full p-4 text-center"
              onClick={() => SetIsMenuOpen(false)}
            >
              Competições
            </Link>
            <Link
              href="/plans"
              className="bg-base hover:bg-primary w-full p-4 text-center"
              onClick={() => SetIsMenuOpen(false)}
            >
              Planos
            </Link>
            <Link
              href="/login"
              className="bg-base hover:bg-primary w-full p-4 text-center"
              onClick={() => SetIsMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
