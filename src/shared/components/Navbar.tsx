
import React, { useState, useEffect } from 'react';
import { DomeLogo, MenuIcon } from './Icons';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <DomeLogo className="w-8 h-8 text-black group-hover:text-occaRed transition-colors" />
          <span className="text-xl font-bold tracking-tighter uppercase">OCCA</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          <a href="#quartos" className="text-sm font-medium uppercase tracking-widest hover:text-occaRed transition-colors">Quartos</a>
          <a href="#espaco" className="text-sm font-medium uppercase tracking-widest hover:text-occaRed transition-colors">A Experiência</a>
        </div>

        <button className="bg-black text-white px-6 py-2 text-sm font-bold uppercase tracking-widest hover:bg-occaRed transition-all transform active:scale-95 shadow-[4px_4px_0px_0px_rgba(255,215,0,1)]">
        <a href="https://wa.me/5581991456002" target="_blank">Reservar Agora</a>  
        </button>

        <button className="md:hidden">
          <MenuIcon className="w-8 h-8" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
