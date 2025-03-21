export default function About() {
  return (
    <section>
      <div className="container mx-auto h-full w-fit px-8 py-16">
        <div className="flex flex-col items-center gap-1">
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-secondary text-2xl font-bold md:text-4xl">
              Sobre Nós
            </h1>
            <p className="text-center text-4xl font-bold md:text-6xl">
              Escola de Taekwondo Dzordi
            </p>
            <span className="text-secondary/40 font-semibold">
              Fundada em 10 de Outubro de 2022
            </span>
          </div>

          <div className="center mt-10 grid grid-cols-1 gap-4 space-y-8 md:grid-cols-2">
            <div className="from-base flex flex-col gap-6 rounded-md bg-gradient-to-br to-white p-8 md:w-[600px]">
              <h2 className="text-2xl md:text-4xl font-bold">Sobre os Treinos</h2>
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
            <div className="from-base flex flex-col flex-wrap gap-6 rounded-md bg-gradient-to-br to-white p-8 md:w-[600px]">
              <h2 className="text-start text-2xl md:text-4xl font-bold md:text-end">
                Nossa Visão
              </h2>
              <p className="text-start md:text-end">
                Ser um exemplo de excelência no ensino do Taekwondo, formando
                alunos não apenas como atletas, mas como indivíduos íntegros,
                disciplinados e preparados para enfrentar desafios dentro e fora
                dos tatames.
              </p>
            </div>
            <div className="from-base flex flex-col gap-6 rounded-md bg-gradient-to-br to-white p-8 md:w-[600px]">
              <h2 className="text-2xl md:text-4xl font-bold">Nossa Missão</h2>
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
