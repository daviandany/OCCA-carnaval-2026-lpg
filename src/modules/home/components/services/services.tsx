import React from "react";
import ServiceCard from "./ServiceCard";
import { SERVICES } from "./services.data";

const Services: React.FC = () => {
  return (
    <section
      id="espaco"
      className="relative py-24 px-6 bg-white overflow-hidden"
    >
      {/* Confetes decorativos */}
      <span className="absolute top-16 left-20 w-3 h-3 bg-black rotate-45" />
      <span className="absolute top-32 left-1/3 w-4 h-4 bg-occaYellow rotate-12" />
      <span className="absolute top-24 right-28 w-3 h-3 bg-occaRed rotate-45" />
      <span className="absolute top-40 right-20 w-2.5 h-2.5 bg-occaBlue rotate-12" />

      <span className="absolute top-1/2 left-12 w-3 h-3 bg-occaRed rotate-45" />
      <span className="absolute top-[55%] right-24 w-4 h-4 bg-black rotate-12" />

      <span className="absolute bottom-40 left-28 w-3 h-3 bg-occaBlue rotate-45" />
      <span className="absolute bottom-28 right-32 w-4 h-4 bg-occaYellow rotate-12" />

      <div className="relative z-10 container mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-gray-400 mb-4">
              Viva o Carnaval na OCCA
            </h2>

            <h3 className="font-serif text-5xl md:text-6xl leading-tight">
              Mais que um quarto, uma{" "}
              <span className="italic text-occaYellow bg-black px-2">
                Experiência Carnavalesca
              </span>
              .
            </h3>
          </div>

          <p className="text-gray-500 max-w-sm mb-4 leading-relaxed">
            Ao lado das ladeiras históricas de Olinda, a OCCA é o ponto de
            encontro entre descanso, cultura e criatividade. Durante o
            Carnaval, você vive o frevo, os blocos e a energia da cidade sem
            abrir mão de conforto, conexão e um ambiente criativo pulsante.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SERVICES.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
