import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Beliche1 from '../../../assets/img/Beliche1.jpeg';
import Beliche2 from "../../../assets/img/Beliche2.jpeg";
import Casal1 from '../../../assets/img/Casal1.jpeg';
import Casal2 from '../../../assets/img/Casal2.jpeg';

interface RoomProps {
  id: string;
  name: string;
  type: string;
  description: string;
  capacity: string;
  images: string[];
  price?: string;
}

const RoomCard: React.FC<RoomProps> = ({ name, type, description, capacity, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col"
      style={{
        boxShadow: 'var(--box-shadow)',
        '--box-shadow': '0 10px 15px -3px rgba(147, 86, 86, 0.1)'
      } as React.CSSProperties & { '--box-shadow': string }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.setProperty('--box-shadow', 
          '0 0 30px 0px rgba(255, 165, 0, 0.8), 0 0 40px 0px rgba(255, 140, 0, 0.7), 0 0 35px 0px rgba(255, 195, 0, 0.7), 0 0 45px 0px rgba(205, 92, 0, 0.6), 0 0 50px 0px rgba(184, 115, 51, 0.5)'
        );
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.setProperty('--box-shadow', 
          '0 10px 15px -3px rgba(208, 190, 34, 0.1)'
        );
      }}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={images[currentImageIndex]}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          style={{ boxShadow: '0 0 30px 0px rgba(255, 165, 0, 0.7), 0 0 35px 0px rgba(255, 140, 0, 0.6), 0 0 40px 0px rgba(255, 195, 0, 0.6), 0 0 45px 0px rgba(205, 92, 0, 0.5), 0 0 50px 0px rgba(184, 115, 51, 0.4)' }}
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-black">
          {type}
        </div>
        <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/80 transition-colors">
          <ChevronLeft size={20} />
        </button>
        <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/80 transition-colors">
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-serif text-3xl mb-1">{name}</h3>
              <p className="text-occaRed text-xs font-bold uppercase tracking-widest">{capacity}</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {['Wi-Fi 500mb', 'Salão central de convivência', 'Cozinha compartilhada', 'quintal amplo pra descansos ou encontros'].map(tag => (
              <span key={tag} className="text-[9px] uppercase tracking-tighter bg-concrete px-2 py-1 text-gray-500 font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <button className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-green-600 transition-colors flex items-center justify-center gap-3">
          <a href="httpsa://wa.me/5581991456002" alt="Reservar via WhatsApp" target="_blank"> Reservar via WhatsApp </a>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </button>
      </div>
    </div>
  );
};

const RoomsSection: React.FC = () => {
  const rooms: RoomProps[] = [
    {
      id: '2',
      name: 'Quarto Beliches',
      type: '2 quartos',
      capacity: 'Até 12 Pessoas',
      description: 'Camas de design industrial em ambiente com pé-direito alto e ampla janela colonial. Espaço arejado com excelente ventilação natural, preservando a essência do casario histórico.',
      images: [Beliche1, Beliche2],
    },
    {
      id: '4',
      name: 'Quarto Casais',
      type: '2 quartos',
      capacity: '4 pessoas ou 2 casais',
      description: 'Arte, madeira e alma pernambucana. Um refúgio versátil onde a cultura local preenche cada detalhe. Espaço amplo e arejado, ideal tanto para a privacidade de um casal quanto para a convivência de amigos.',
      images: [Casal1, Casal2],
    }
  ];


  return (


    <section id="quartos" className="py-24 px-6 bg-concrete">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-gray-400 mb-4 text-center md:text-left">Acomodações Exclusivas</h2>
          <h3 className="font-serif text-5xl md:text-6xl leading-tight text-center md:text-left">Durma no <span className="italic">sossego</span>, acorde na <span className="text-occaRed italic">folia</span>.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {rooms.map(room => <RoomCard key={room.id} {...room} />)}
        </div>

        <div className="mt-20 px-6 py-8 md:p-12 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 rounded-2xl shadow-xl relative overflow-hidden border-l-4 border-occaRed">

          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300 rounded-full blur-3xl opacity-25 -z-0"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-300 rounded-full blur-3xl opacity-25 -z-0"></div>
          
          
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-occaRed via-yellow-400 to-purple-500 opacity-40"></div>
          
          <div className="flex-1 relative z-10">
            <h4 className="font-serif text-2xl md:text-3xl mb-3 md:mb-4 text-gray-900 font-bold">Por que ficar na OCCA?</h4>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
              Imagine acordar no epicentro do Carnaval de Olinda, mas cercado por uma atmosfera de tecnologia. Nossas suítes ficam dentro de um Hub de Inovação. Você não apenas se hospeda; você respira a criatividade do espaço, com o conforto de uma cama impecável a passos dos blocos.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:gap-8 text-center flex-1 md:flex-none bg-white p-6 md:p-8 rounded-xl relative z-10 border-2 border-gray-200 shadow-md">
            <div>
              <div className="text-occaRed font-serif text-3xl md:text-4xl mb-1 md:mb-2 font-black">10/10</div>
              <div className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold text-gray-600">Localização</div>
            </div>
            <div>
              <div className="text-purple-600 font-serif text-3xl md:text-4xl mb-1 md:mb-2 font-black">Wi-Fi</div>
              <div className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold text-gray-600">Fibra Óptica</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
