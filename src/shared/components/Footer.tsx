import React from 'react';
import { DomeLogo } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-concrete border-t-4 border-occaYellow pt-20 pb-10 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <DomeLogo className="w-10 h-10 text-occaPink rotate-[-6deg]" />
              <span className="text-2xl font-bold tracking-tighter uppercase text-black">
                OCCA
              </span>
            </div>

            <p className="text-gray-600 max-w-sm text-lg leading-relaxed mb-8">
              Um ponto de encontro criativo no coração de Olinda.  
              Cultura, tecnologia, café passado na hora e muita história
              compartilhada entre uma ladeira e outra.
            </p>

            <div className="flex gap-4">
              {['Instagram', 'LinkedIn', 'YouTube'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-white border-2 border-occaBlue text-occaBlue hover:bg-occaBlue hover:text-white transition-all text-xs font-bold uppercase rotate-[-4deg] hover:rotate-0"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-occaPink">
              Onde fica a folia
            </h4>
            <p className="text-gray-600 leading-loose">
              Rua Manoel Borba, 285<br />
              Carmo, Sítio Histórico<br />
              Olinda - PE<br />
              Bem no meio do Carnaval de Olinda!
            </p>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-occaBlue">
              Atalhos rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-occaPink transition-colors">
                  Manifesto
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-occaYellow transition-colors">
                  Transparência
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-occaRed transition-colors">
                  Projetos Sociais
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-occaBlue transition-colors">
                  Carreiras
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-300 gap-6">
          <p className="text-xs text-gray-400 font-medium">
            © {new Date().getFullYear()} OCCA — feita em Olinda, com frevo no pé 
          </p>

          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <a href="#" className="hover:text-occaPink transition-colors">
              Privacidade
            </a>
            <a href="#" className="hover:text-occaBlue transition-colors">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
