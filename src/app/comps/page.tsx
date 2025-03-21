// import { CompsCard } from "../_components/CompsCard";

export default function Comps() {
  return (
    <section>
      <div className="container mx-auto h-full w-fit px-8 py-16">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-secondary text-2xl font-bold md:text-4xl">
            Últimas
          </h1>
          <p className="text-center text-4xl font-bold md:text-6xl">
            Competições
          </p>
          <span className="text-secondary/30 mt-2 font-semibold">
            Última atualização em 21/03/2025.
          </span>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* <CompsCard /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
