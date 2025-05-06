
import React from 'react';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import TrafficMap from '../components/dashboard/TrafficMap';
import { Calendar, MapPin, Clock, AlertTriangle } from 'lucide-react';

const EventCard = ({ title, date, time, location, impact, type }: { 
  title: string;
  date: string;
  time: string;
  location: string;
  impact: "alto" | "medio" | "bajo";
  type: string;
}) => {
  const impactColor = {
    alto: "bg-red-100 text-red-800",
    medio: "bg-orange-100 text-orange-800",
    bajo: "bg-green-100 text-green-800"
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-sigeti-orange">
      <div className="flex justify-between">
        <h3 className="font-medium text-sigeti-gray-dark">{title}</h3>
        <span className={`text-xs px-2 py-0.5 rounded-full ${impactColor[impact]}`}>
          Impacto {impact}
        </span>
      </div>
      
      <div className="mt-3 space-y-2">
        <div className="flex items-center text-sm text-sigeti-gray-medium">
          <Calendar size={14} className="mr-2" />
          <span>{date} • {time}</span>
        </div>
        <div className="flex items-center text-sm text-sigeti-gray-medium">
          <MapPin size={14} className="mr-2" />
          <span>{location}</span>
        </div>
        <div className="flex items-center text-sm text-sigeti-gray-medium">
          <AlertTriangle size={14} className="mr-2" />
          <span>{type}</span>
        </div>
      </div>
      
      <div className="mt-4 flex justify-between">
        <button className="text-sigeti-orange text-sm hover:underline">Ver detalles</button>
        <button className="text-sigeti-orange text-sm hover:underline">Ver en mapa</button>
      </div>
    </div>
  );
};

const Eventos = () => {
  const events = [
    {
      id: 1,
      title: "Maratón de Hermosillo 2025",
      date: "15 May 2025",
      time: "06:00 - 12:00",
      location: "Blvd. Kino y calles del centro",
      impact: "alto" as const,
      type: "Evento deportivo"
    },
    {
      id: 2,
      title: "Festival Cultural Primavera",
      date: "17 May 2025",
      time: "18:00 - 23:00",
      location: "Plaza Zaragoza",
      impact: "medio" as const,
      type: "Evento cultural"
    },
    {
      id: 3,
      title: "Desfile día de la bandera",
      date: "24 May 2025",
      time: "09:00 - 12:00",
      location: "Blvd. Luis Encinas",
      impact: "medio" as const,
      type: "Desfile cívico"
    },
    {
      id: 4,
      title: "Concierto en el Parque",
      date: "31 May 2025",
      time: "19:00 - 23:00",
      location: "Parque La Ruina",
      impact: "bajo" as const,
      type: "Evento musical"
    },
  ];
  
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-sigeti-gray-dark">Eventos Programados</h1>
            <p className="text-sigeti-gray-medium">Planificación y monitoreo de impacto vial de eventos</p>
          </div>
          
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <div className="bg-white rounded-lg shadow-sm p-4 h-[500px]">
                <h2 className="text-lg font-semibold text-sigeti-gray-dark mb-4">Mapa de Eventos</h2>
                <div className="h-[calc(100%-2rem)]">
                  <TrafficMap />
                </div>
              </div>
            </div>
            
            <div className="col-span-4">
              <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-sigeti-gray-dark">Eventos Próximos</h2>
                  <button className="bg-sigeti-orange text-white rounded-full p-1">
                    <Calendar size={16} />
                  </button>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <button className="flex items-center justify-between p-2 rounded hover:bg-gray-50 text-left w-full">
                    <div>
                      <p className="font-medium text-sigeti-gray-dark">Maratón de Hermosillo</p>
                      <p className="text-xs text-sigeti-gray-medium">15 Mayo • 06:00</p>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-800">Alto</span>
                  </button>
                  
                  <button className="flex items-center justify-between p-2 rounded hover:bg-gray-50 text-left w-full">
                    <div>
                      <p className="font-medium text-sigeti-gray-dark">Festival Cultural</p>
                      <p className="text-xs text-sigeti-gray-medium">17 Mayo • 18:00</p>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-orange-100 text-orange-800">Medio</span>
                  </button>
                  
                  <button className="flex items-center justify-between p-2 rounded hover:bg-gray-50 text-left w-full">
                    <div>
                      <p className="font-medium text-sigeti-gray-dark">Desfile cívico</p>
                      <p className="text-xs text-sigeti-gray-medium">24 Mayo • 09:00</p>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-orange-100 text-orange-800">Medio</span>
                  </button>
                </div>
                
                <div className="mt-4 pt-3 border-t border-gray-100 flex justify-center">
                  <button className="text-sigeti-orange text-sm hover:underline">Ver todos los eventos</button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-sigeti-gray-dark">Acciones Rápidas</h2>
                </div>
                
                <div className="space-y-2">
                  <button className="w-full bg-sigeti-orange text-white rounded-lg p-3 text-sm font-medium flex items-center justify-center">
                    <Calendar size={16} className="mr-2" />
                    Programar Nuevo Evento
                  </button>
                  <button className="w-full border border-sigeti-orange text-sigeti-orange rounded-lg p-3 text-sm font-medium flex items-center justify-center">
                    <Clock size={16} className="mr-2" />
                    Ver Calendario Anual
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-sigeti-gray-dark mb-4">Detalle de Eventos</h2>
            <div className="grid grid-cols-2 gap-4">
              {events.map(event => (
                <EventCard 
                  key={event.id}
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  impact={event.impact}
                  type={event.type}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventos;
