import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-base text-secondary">
      <div className="container mx-auto h-screen">
        <div className="flex h-full flex-col items-center justify-center gap-6">
          <h1 className="text-4xl font-bold md:text-6xl">
            Página em Construção, Aguarde...
          </h1>
          <span className="text-2xl font-bold md:text-4xl">Erro 404</span>
          <Link
            href="/"
            className="bg-primary text-text1 hover:bg-primary/80 rounded-md px-6 py-2 font-semibold"
          >
            Voltar para o Inicio
          </Link>
        </div>
      </div>
    </section>
  );
}
