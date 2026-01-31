
import React from 'react';

const CarnivalBanner: React.FC = () => {
  return (
    <div className="w-full bg-occaYellow border-y-4 border-black relative overflow-hidden">
      <div className="container mx-auto px-6 py-12 md:py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-4xl md:text-6xl text-black uppercase leading-none mb-2 font-black tracking-tighter">
              <span className="text-occaRed">OCCA</span>rnaval dos Criativos
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 mt-4">
              <span className="bg-black text-occaYellow px-4 py-1 font-bold text-lg uppercase tracking-widest ">
                De 13 a 19 de Fevereiro
              </span>
              <p className="text-xl md:text-2xl font-bold uppercase tracking-tight text-black flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                No coração de Olinda
              </p>
            </div>
          </div>
          
          <button className="bg-black text-white hover:bg-occaRed transition-colors px-8 py-5 text-xl font-bold uppercase tracking-[0.2em] shadow-[8px_8px_0px_0px_rgba(255,69,0,1)]">
            <a href="https://wa.me/5581991456002" target="_blank">Ingressos Aqui</a>
          </button>
        </div>
      </div>
      
      {/* Decorative Texture/Elements inspired by Carnival Posters */}
      <div className="absolute top-0 right-0 w-32 h-full opacity-10 bg-[radial-gradient(circle,_black_1px,_transparent_1px)] bg-[size:10px_10px]" />
      <div className="absolute top-0 left-0 w-32 h-full opacity-10 bg-[radial-gradient(circle,_black_1px,_transparent_1px)] bg-[size:10px_10px]" />
    </div>
  );
};

export default CarnivalBanner;
