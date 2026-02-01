import React, { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "./Icons";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  //Estado do menu hambúrguer
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center group">
          <img
            className="w-[11vw] md:w-[9vw] lg:w-[4vw] flex -mt-1 md:-mt-4 lg:-mt-2"
            src="https://i.imgur.com/ftkRKrK.png"
            alt="logo de occa"
          />
          <span className="text-xl font-bold tracking-tighter uppercase">
            OCCA
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          <a
            href="#quartos"
            className="text-sm font-medium uppercase tracking-widest hover:text-occaRed transition-colors"
          >
            Quartos
          </a>
          <a
            href="#espaco"
            className="text-sm font-medium uppercase tracking-widest hover:text-occaRed transition-colors"
          >
            A Experiência
          </a>
        </div>

        <button className="bg-black text-white hidden md:inline-block md:px-6 md:py-2 lg:px-6 lg:py-2 text-sm font-bold uppercase tracking-widest hover:bg-occaRed transition-all transform active:scale-95 shadow-[4px_4px_0px_0px_rgba(255,215,0,1)]">
          <a href="https://wa.me/5581991456002" target="_blank">
            Reservar Agora
          </a>
        </button>

        {/* Botão hamburguer */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? (
            <XIcon className="w-8 h-8" />
          ) : (
            <MenuIcon className="w-8 h-8" />
          )}
        </button>

        {/* Menu mobile - hamburguer */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-occaRed/80 shadow-lg md:hidden animate-fade-in">
            <a
              href="#quartos"
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-4 text-sm font-medium uppercase tracking-widest border-b hover:text-white"
            >
              Quartos
            </a>
            <a
              href="#espaco"
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-4 text-sm font-medium uppercase tracking-widest border-b hover:text-white"
            >
              A Experiência
            </a>

            <a
              href="https://wa.me/5581991456002"
              target="_blank"
              onClick={() => setIsMenuOpen(false)}
              className="block m-6 text-center bg-black text-white py-3 text-sm font-bold uppercase tracking-widest hover:bg-occaYellow hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(255,215,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              Reservar Agora
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
