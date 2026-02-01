import { Service } from "./services.types";
import React from "react";

interface ServiceCardProps extends Service {}

const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  description,
  image,
}) => (
  <div className="group cursor-pointer relative">
    {/* Confetes do card */}
    <span className="absolute -top-3 -left-3 w-3 h-3 bg-occaYellow rotate-45 opacity-80" />
    <span className="absolute top-6 -right-2 w-2.5 h-2.5 bg-occaRed rotate-12 opacity-80" />
    <span className="absolute bottom-20 -left-2 w-2 h-2 bg-occaBlue rotate-45 opacity-80" />

    <div className="relative overflow-hidden mb-6 aspect-[4/5] bg-concrete rounded-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
      />

      {/* Overlay carnavalesco */}
      <div className="absolute inset-0 bg-gradient-to-t from-occaPink/40 via-transparent to-occaBlue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Número estilo bloco */}
      <span className="absolute top-6 left-6 flex items-center justify-center w-11 h-11 bg-black text-occaYellow font-extrabold text-sm rotate-[-6deg] shadow-[4px_4px_0px_0px_rgba(244,196,48,1)]">
        {number}
      </span>

      {/* Serpentina sutil */}
      <div className="absolute -bottom-10 -right-10 w-28 h-28 border-2 border-dashed border-occaBlue rounded-full rotate-12 opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
    </div>

    <h3 className="font-serif text-3xl mb-2 group-hover:text-occaPink transition-colors">
      {title}
    </h3>

    <p className="text-gray-600 leading-relaxed">
      {description}
    </p>

    {/* CTA */}
    <a
      href="https://wa.me/5581991456002"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-block font-bold uppercase tracking-widest text-xs text-occaBlue group-hover:text-occaRed transition-colors"
    >
      Reservar pelo WhatsApp →
    </a>
  </div>
);

export default ServiceCard;
