
import React from 'react';
import { Calendar, Construction, MapPin } from 'lucide-react';

// Datos simulados de eventos
const events = [
  {
    id: 1,
    type: 'event',
    title: 'Maratón Ciudad de Hermosillo',
    date: 'Hoy, 7:00 - 12:00',
    location: 'Centro de la Ciudad',
    status: 'ongoing'
  },
  {
    id: 2,
    type: 'construction',
    title: 'Repavimentación',
    date: 'En curso hasta 25 May',
    location: 'Blvd. Morelos entre Kino y Solidaridad',
    status: 'ongoing'
  },
  {
    id: 3,
    type: 'event',
    title: 'Desfile Cívico',
    date: 'Mañana, 9:00 - 11:00',
    location: 'Blvd. Luis Encinas',
    status: 'upcoming'
  },
  {
    id: 4,
    type: 'construction',
    title: 'Ampliación de vialidad',
    date: '20 May - 30 Jun',
    location: 'Periférico Norte',
    status: 'upcoming'
  }
];

const EventsTimeline = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm h-full overflow-hidden">
      <div className="p-4 border-b border-gray-100 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-sigeti-gray-dark">Eventos y Construcciones</h2>
        <button className="text-xs text-sigeti-blue hover:underline">Ver todos</button>
      </div>
      
      <div className="p-4 overflow-y-auto max-h-[calc(100%-60px)]">
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-100"></div>
          
          <div className="space-y-6">
            {events.map((event) => (
              <div key={event.id} className="flex gap-4 relative">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
                  event.type === 'event' 
                    ? 'bg-sigeti-blue/10 text-sigeti-blue' 
                    : 'bg-sigeti-orange/10 text-sigeti-orange'
                }`}>
                  {event.type === 'event' ? <Calendar size={18} /> : <Construction size={18} />}
                </div>
                
                <div className={`flex-1 p-3 rounded-lg border ${
                  event.status === 'ongoing' 
                    ? (event.type === 'event' ? 'border-sigeti-blue bg-sigeti-blue/5' : 'border-sigeti-orange bg-sigeti-orange/5')
                    : 'border-gray-100'
                }`}>
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-sigeti-gray-dark">{event.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      event.status === 'ongoing' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {event.status === 'ongoing' ? 'En curso' : 'Próximo'}
                    </span>
                  </div>
                  
                  <p className="text-xs text-sigeti-gray-medium mt-1">{event.date}</p>
                  
                  <div className="flex items-center mt-2 text-xs text-sigeti-gray-medium">
                    <MapPin size={12} className="mr-1" />
                    <span>{event.location}</span>
                  </div>
                  
                  <button className={`mt-2 text-xs ${
                    event.type === 'event' ? 'text-sigeti-blue' : 'text-sigeti-orange'
                  } hover:underline flex items-center`}>
                    Ver en mapa
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsTimeline;
