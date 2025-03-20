export default function About() {
  return (
    <section>
      <div className="container mx-auto h-full w-fit px-8 py-16">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-secondary text-4xl font-bold md:text-6xl">
            Sobre Nós
          </h1>
          <p className="text-center text-lg font-bold">
            Escola de Taekwondo Dzordi{" "}
            <span className="text-primary font-semibold">
              Fundada em 10 de Outubro de 2022
            </span>
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 space-y-8 md:grid-cols-2">
            <div className="flex w-[600px] flex-col gap-6">
              <h2 className="text-4xl font-bold">Sobre os Treinos</h2>
              <p>
                Treino Misto para Crianças e Adultos Homens e Mulheres: Focado
                em alto rendimento técnico e competitivo. <br />
                Buscamos melhorar seu nível físico, mental e técnico. <br />
                Treino de Reforço e Alto Rendimento: Exclusivo para atletas que
                buscam alta performance técnica, competitiva e física. Realizado
                periodicamente. <br />
                Treinos Didáticos Alternados: Poomsae, Luta Olímpica, Luta
                Marcial, Defesa Pessoal, Técnicas de sua Graduação, Treinos
                Físicos, entre outros.
              </p>
            </div>
            <div className="flex w-[600px] flex-col gap-6">
              <h2 className="text-end text-4xl font-bold">Nossa Visão</h2>
              <p className="text-end">
                Ser um exemplo de excelência no ensino do Taekwondo, formando
                alunos não apenas como atletas, mas como indivíduos íntegros,
                disciplinados e preparados para enfrentar desafios dentro e fora
                dos tatames.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold">Nossa Missão</h2>
              <p>
                Transmitir os princípios e valores do Taekwondo, promovendo o
                desenvolvimento físico, mental e emocional dos nossos alunos.
                Nosso objetivo é ajudar cada aluno a alcançar seu máximo
                potencial, cultivando a confiança, o respeito, a perseverança e
                a autossuperação, tanto na prática esportiva quanto na vida
                pessoal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
