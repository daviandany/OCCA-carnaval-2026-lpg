import { Service } from "./services.types";
import React from "react";

interface ServiceCardProps extends Service {}

const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  description,
  image,
}) => (
  <div className="group cursor-pointer">
    <div className="relative overflow-hidden mb-6 aspect-[4/5] bg-concrete rounded-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
      />

      {/* Número com vibe de bloco */}
      <span className="absolute top-6 left-6 flex items-center justify-center w-10 h-10 bg-occaYellow text-black font-extrabold text-sm rotate-[-6deg] shadow-md">
        {number}
      </span>

      {/* Overlay carnavalesco no hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-occaPink/40 via-transparent to-occaBlue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>

    <h3 className="font-serif text-3xl mb-2 group-hover:text-occaPink transition-colors">
      {title}
    </h3>

    <p className="text-gray-600 leading-relaxed">
      {description}
    </p>

    <div className="mt-4 flex items-center gap-2 font-bold uppercase tracking-widest text-xs text-occaBlue group-hover:gap-4 transition-all">
      Bora conhecer <span className="text-occaRed">🎭 →</span>
    </div>
  </div>
);

export default ServiceCard;
