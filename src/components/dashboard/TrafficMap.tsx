import React from 'react';
import { MapPin, AlertTriangle, Construction, Calendar } from 'lucide-react';
import hermosilloMap from '@/assets/maps/hermosillo.png'; // Ajusta la ruta si no usas alias "@"

const TrafficMap = () => {
  return (
    <div className="h-full w-full bg-gray-100 rounded-lg relative overflow-hidden">
      {/* Imagen de fondo del mapa */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hermosilloMap})` }}
      ></div>

      {/* Capa de interacción */}
      <div className="absolute inset-0 bg-black/5"></div>

      {/* Puntos simulados de tráfico */}
      <div className="absolute left-[30%] top-[40%] map-heatmap-dot"></div>
      <div className="absolute left-[35%] top-[42%] map-heatmap-dot"></div>
      <div className="absolute left-[40%] top-[45%] map-heatmap-dot medium"></div>
      <div className="absolute left-[50%] top-[30%] map-heatmap-dot low"></div>
      <div className="absolute left-[60%] top-[55%] map-heatmap-dot medium"></div>
      <div className="absolute left-[70%] top-[60%] map-heatmap-dot low"></div>

      {/* Iconos de eventos simulados */}
      <div className="absolute left-[30%] top-[40%] transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-white p-1 rounded-full shadow-md">
          <AlertTriangle size={16} className="text-sigeti-red" />
        </div>
      </div>

      <div className="absolute left-[60%] top-[55%] transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-white p-1 rounded-full shadow-md">
          <Construction size={16} className="text-sigeti-orange" />
        </div>
      </div>

      <div className="absolute left-[50%] top-[30%] transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-white p-1 rounded-full shadow-md">
          <Calendar size={16} className="text-sigeti-orange" />
        </div>
      </div>

      {/* Controles del mapa */}
      <div className="absolute top-4 right-4 bg-white shadow-md rounded-lg p-1 flex flex-col space-y-1">
        <button className="w-8 h-8 flex items-center justify-center text-sigeti-gray-medium hover:text-sigeti-orange rounded">+</button>
        <div className="w-8 h-[1px] bg-gray-200"></div>
        <button className="w-8 h-8 flex items-center justify-center text-sigeti-gray-medium hover:text-sigeti-orange rounded">−</button>
      </div>

      {/* Leyenda */}
      <div className="absolute bottom-4 right-4 bg-white shadow-md rounded-lg p-3 text-xs">
        <h4 className="font-medium text-sigeti-gray-dark mb-2">Leyenda</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-sigeti-red"></div>
            <span>Tráfico alto</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-sigeti-orange"></div>
            <span>Tráfico medio</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-sigeti-green"></div>
            <span>Tráfico bajo</span>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <AlertTriangle size={12} className="text-sigeti-red" />
            <span>Incidente</span>
          </div>
          <div className="flex items-center space-x-2">
            <Construction size={12} className="text-sigeti-orange" />
            <span>Construcción</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar size={12} className="text-sigeti-orange" />
            <span>Evento</span>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="absolute top-4 left-4 bg-white shadow-md rounded-lg p-3">
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-xs bg-sigeti-orange text-white rounded-full">Todo</button>
          <button className="px-3 py-1 text-xs bg-white border border-gray-200 rounded-full text-sigeti-gray-medium hover:border-sigeti-orange hover:text-sigeti-orange">Incidentes</button>
          <button className="px-3 py-1 text-xs bg-white border border-gray-200 rounded-full text-sigeti-gray-medium hover:border-sigeti-orange hover:text-sigeti-orange">Construcción</button>
          <button className="px-3 py-1 text-xs bg-white border border-gray-200 rounded-full text-sigeti-gray-medium hover:border-sigeti-orange hover:text-sigeti-orange">Eventos</button>
        </div>
      </div>
    </div>
  );
};

export default TrafficMap;
