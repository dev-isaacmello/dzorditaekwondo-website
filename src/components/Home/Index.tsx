import Image from "next/image";
import LogoDzordi from "../../../public/LOGOTIPO.webp";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <section className="bg-base text-text2 overflow-hidden">
      <div className="container mx-auto h-full w-fit py-20">
        <div className="grid grid-cols-1 px-8 md:grid-cols-2">
          <div className="flex flex-col items-center md:items-end justify-center gap-2 text-center md:text-end">
            <h1 className="text-6xl font-bold">
              <span className="text-primary">Bem Vindo</span> a Escola de <br />
              Taekwondo <span className="text-primary">DZORDI</span>
            </h1>
            <p className="text-2xl">
              Taekwondo Marcial, Olímpico e Alto Rendimento
            </p>
            <div>
              <button>
                <a
                  href="#"
                  className="text-text1 mt-8 flex items-center gap-4 rounded-lg bg-secondary hover:bg-primary duration-200 px-10 py-4 shadow-2xl shadow-secondary hover:shadow-none"
                >
                  <WhatsappLogo size={24} className="text-base" />
                  <span className="font-bold">Entrar em Contato</span>
                </a>
              </button>
            </div>
          </div>
          <div className="flex justify-end">
            <Image
              src={LogoDzordi}
              alt="Logomarca"
              width={500}
              height={500}
              quality={100}
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
