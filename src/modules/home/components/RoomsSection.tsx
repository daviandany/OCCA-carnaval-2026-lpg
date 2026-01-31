
import React from 'react';

interface RoomProps {
  id: string;
  name: string;
  type: string;
  description: string;
  capacity: string;
  image: string;
  price?: string;
}

const RoomCard: React.FC<RoomProps> = ({ name, type, description, capacity, image }) => (
  <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
    <div className="relative aspect-[16/10] overflow-hidden">
      <img 
                src={image}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                style={{ boxShadow: '0 10px 15px -3px rgba(236, 72, 153, 0.4), 0 4px 6px -2px rgba(236, 72, 153, 0.2)' }}
              />      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-black">
        {type}
      </div>
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
        Reservar via WhatsApp
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </button>
    </div>
  </div>
);

const RoomsSection: React.FC = () => {
  const rooms: RoomProps[] = [
 
    {
      id: '2',
      name: 'Quarto Beliches',
      type: '2 quartos',
      capacity: 'Até 12 Pessoas',
      description: 'Espaço amplo e arejado, ideal para grupos de amigos. Pé direito alto e janelas coloniais originais preservadas.',
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1590115716579221140/original/e8c39859-c037-4a6c-bd1c-ff70916a2bba.png?im_w=720',
    },
    
    {
      id: '4',
      name: 'Quarto Casais',
      type: '2 quartos',
      capacity: '4 pessoas ou 2 casais',
      description: 'Quarto elegante com arte local em destaque. Perfeito para casais que apreciam a cultura pernambucana em cada detalhe da decoração.',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800',
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

        <div className="mt-20 px-6 py-8 md:p-12 bg-black text-white flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 rounded-2xl">
          <div className="flex-1">
            <h4 className="font-serif text-2xl md:text-3xl mb-3 md:mb-4">Por que ficar na OCCA?</h4>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Imagine acordar no epicentro do Carnaval de Olinda, mas cercado por uma atmosfera de tecnologia. Nossas suítes ficam dentro de um Hub de Inovação. Você não apenas se hospeda; você respira a criatividade do espaço, com o conforto de uma cama impecável a passos dos blocos.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:gap-8 text-center flex-1 md:flex-none">
            <div>
              <div className="text-occaYellow font-serif text-3xl md:text-4xl mb-1 md:mb-2">10/10</div>
              <div className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold">Localização</div>
            </div>
            <div>
              <div className="text-occaYellow font-serif text-3xl md:text-4xl mb-1 md:mb-2">Wi-Fi</div>
              <div className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold">Fibra Óptica</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
