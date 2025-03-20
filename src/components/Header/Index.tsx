import Link from "next/link";

export function Header() {
  return (
    <header className="bg-bg-secondary text-text1 px-8 py-4">
      <div className="container mx-auto flex justify-between">
        <h3 className="font-bold">
          ETKD<span className="text-primary">DZORDI</span>
        </h3>
        <nav className="flex items-center">
          <ul className="flex gap-8 font-bold">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">Sobre</Link>
            </li>
            <li>
              <Link href="/comps">Competições</Link>
            </li>
            <li>
              <Link href="/study">Estude Aqui</Link>
            </li>
          </ul>
        </nav>
        <Link href="/login" className="font-bold">
          Login
        </Link>
      </div>
    </header>
  );
}
