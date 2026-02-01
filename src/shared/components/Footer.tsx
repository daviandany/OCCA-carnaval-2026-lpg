import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-occaYellow border-t-4 border-black overflow-hidden">

      {/* Textura lateral igual ao banner */}
      <div className="absolute top-0 left-0 w-24 h-full opacity-10 bg-[radial-gradient(circle,_black_1px,_transparent_1px)] bg-[size:10px_10px]" />
      <div className="absolute top-0 right-0 w-24 h-full opacity-10 bg-[radial-gradient(circle,_black_1px,_transparent_1px)] bg-[size:10px_10px]" />
{/* Confetes espalhados */}
{/* Topo */}
<span className="absolute top-12 left-24 w-3 h-3 bg-black rotate-45" />
<span className="absolute top-20 left-1/3 w-2.5 h-2.5 bg-occaRed rotate-12" />
<span className="absolute top-16 right-32 w-4 h-4 bg-occaBlue rotate-45" />
<span className="absolute top-28 right-20 w-3 h-3 bg-black rotate-12" />

{/* Meio */}
<span className="absolute top-1/2 left-16 w-3 h-3 bg-occaRed rotate-45" />
<span className="absolute top-1/2 right-24 w-3 h-3 bg-occaBlue rotate-45" />
<span className="absolute top-[60%] right-1/3 w-2.5 h-2.5 bg-occaRed rotate-12" />

{/* Base */}
<span className="absolute bottom-40 left-32 w-3 h-3 bg-black rotate-45" />
<span className="absolute bottom-28 left-1/4 w-4 h-4 bg-occaBlue rotate-12" />
<span className="absolute bottom-32 right-40 w-3 h-3 bg-occaRed rotate-45" />
<span className="absolute bottom-20 right-24 w-2.5 h-2.5 bg-black rotate-12" />


      <div className="relative z-10 container mx-auto px-6 py-24">

        {/* Conteúdo */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 mb-20">

          {/* Texto principal */}
          <div className="md:col-span-3">
            <h3 className="font-serif text-4xl md:text-5xl font-black uppercase tracking-tight text-black mb-6">
              OCCA é base, refúgio <br />
              <span className="text-occaRed">e ponto de encontro</span>
            </h3>

            <p className="text-xl leading-loose text-black max-w-2xl">
              No meio do sobe e desce das ladeiras de Olinda, a OCCA vira
              casa pra quem vive o Carnaval intensamente. Um casarão
              histórico onde frevo, criatividade e descanso coexistem —
              tudo a poucos passos da folia.
            </p>
          </div>

          {/* Localização */}
          <div>
            <h4 className="bg-black text-occaYellow inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6">
              Onde fica a folia
            </h4>
            <p className="text-lg leading-relaxed text-black font-medium">
              Rua Manoel Borba, 285<br />
              Carmo — Sítio Histórico<br />
              Olinda / PE<br />
              Epicentro do Carnaval
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="bg-black text-occaYellow inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6">
              Explorar
            </h4>
            <ul className="space-y-4 text-lg font-bold uppercase tracking-tight text-black">
              <li>
                <a href="#quartos" className="hover:text-occaRed transition-colors">
                  Quartos
                </a>
              </li>
              <li>
                <a href="#espaco" className="hover:text-occaRed transition-colors">
                  Experiência OCCA
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha final */}
        <div className="border-t-4 border-black pt-8 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-black">
            © {new Date().getFullYear()} OCCA — feita em Olinda, com frevo no pé
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
