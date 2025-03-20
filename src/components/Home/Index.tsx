import Image from "next/image";
import LogoDzordi from "../../../public/LOGOTIPO.webp";

export default function Home() {
  return (
    <section className="bg-base text-text2">
      <div className="container mx-auto h-full w-fit py-20">
        <div className="flex justify-between">
          <div className="flex flex-1/2 items-center">
            <h1>
              Bem vindo a Escola de <br />
              Taekwondo Dzordi
            </h1>
          </div>
          <div className="flex flex-1/2">
            <Image
              src={LogoDzordi}
              alt="Logomarca"
              width={500}
              height={500}
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
