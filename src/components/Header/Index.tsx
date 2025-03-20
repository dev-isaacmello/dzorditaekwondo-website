import Link from "next/link";

export function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between">
        <h1>NextJs</h1>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contatos">Contatos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
