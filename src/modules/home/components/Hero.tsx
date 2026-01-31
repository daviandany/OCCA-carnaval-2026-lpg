import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-12 px-6 overflow-hidden bg-[url('https://i.imgur.com/mbnS2XH.png')] bg-cover bg-center lg:bg-[url('https://i.imgur.com/U22omJQ.png')]">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://i.imgur.com/FggCRlC.png"
          className="absolute top-[6%] left-10 w-[20vw] md:w-[25vw] lg:w-44 rounded-xl rotate-[-6deg]"
          alt="Máscara de carnaval - amarela"
        />

        <img
          src="https://i.imgur.com/WksF92s.png"
          className="absolute bottom-1 right-16 w-[16vw] md:w-40 lg:w-52 rounded-xl rotate-3"
          alt="Máscara de carnaval - rosa"
        />

        <img
          src="https://i.imgur.com/RPPq6LE.png"
          className="absolute top-[8%] right-10 w-[12vw] md:w-[18vw] lg:w-44 rounded-xl rotate-[8deg]"
          alt="Máscara de carnaval - roxa"
        />

        <img
          src="https://i.imgur.com/7bCK482.png"
          className="absolute bottom-3 left-10 w-[18vw] md:w-40 lg:w-48 rounded-x1 rotate-[-4deg]"
          alt="Máscara de carnaval - preta"
        />
      </div>

      {/* Structural Background Element */}
      <div className="container mx-auto text-center z-5">
        <div className="flex justify-center">
          <span className="inline-block px-3 py-1 bg-occaYellow text-[10px] font-bold uppercase tracking-[0.3em] text-black">
            Carnaval 2026 • Hospedagem Exclusiva
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-8xl leading-tight mb-8 max-w-5xl mx-auto">
          Viva o Carnaval no <span className="text-occaRed">Epicentro</span> da
          Cultura.
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Hospede-se em OCCA: um casarão histórico transformado em hub de
          inovação, localizado a poucos passos dos principais focos de folia de
          Olinda.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#quartos"
            className="bg-black text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-gray-800 transition-all text-center"
          >
            Ver Quartos Disponíveis
          </a>
          <a
            href="#espaco"
            className="border-2 border-black text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all text-center"
          >
            A Experiência OCCA
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
