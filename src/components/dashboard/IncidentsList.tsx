
import React from 'react';
import { AlertTriangle, MapPin } from 'lucide-react';

// Datos simulados de incidentes
const incidents = [
  {
    id: 1,
    type: 'Accidente',
    location: 'Blvd. Morelos y Blvd. Kino',
    time: '18 min',
    severity: 'high',
    status: 'active'
  },
  {
    id: 2,
    type: 'Bloqueo',
    location: 'Blvd. Solidaridad y Blvd. Progreso',
    time: '32 min',
    severity: 'medium',
    status: 'active'
  },
  {
    id: 3,
    type: 'Semáforo apagado',
    location: 'Calle Reforma y Av. De Anza',
    time: '45 min',
    severity: 'medium',
    status: 'pending'
  },
  {
    id: 4,
    type: 'Inundación',
    location: 'Blvd. Luis Encinas',
    time: '1h 12m',
    severity: 'high',
    status: 'active'
  },
  {
    id: 5,
    type: 'Reporte ciudadano',
    location: 'Periférico Norte',
    time: '1h 30m',
    severity: 'low',
    status: 'reviewing'
  }
];

const getSeverityClasses = (severity: string) => {
  switch(severity) {
    case 'high':
      return 'bg-sigeti-red text-white';
    case 'medium':
      return 'bg-sigeti-orange text-white';
    case 'low':
      return 'bg-sigeti-green text-white';
    default:
      return 'bg-sigeti-blue text-white';
  }
};

const getStatusClasses = (status: string) => {
  switch(status) {
    case 'active':
      return 'bg-red-100 text-sigeti-red';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'reviewing':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const IncidentsList = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full">
      <div className="p-4 border-b border-gray-100 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-sigeti-gray-dark flex items-center gap-2">
          <AlertTriangle size={18} className="text-sigeti-red" />
          Incidentes Activos
        </h2>
        <span className="bg-sigeti-red/10 text-sigeti-red text-sm py-0.5 px-2 rounded-full">
          {incidents.length} activos
        </span>
      </div>
      
      <div className="p-4 max-h-[calc(100%-60px)] overflow-y-auto">
        <div className="space-y-3">
          {incidents.map((incident) => (
            <div key={incident.id} className="border border-gray-100 rounded-lg p-3 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getSeverityClasses(incident.severity)}`}>
                  {incident.type}
                </span>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getStatusClasses(incident.status)}`}>
                  {incident.status === 'active' ? 'Activo' : incident.status === 'pending' ? 'Pendiente' : 'En revisión'}
                </span>
              </div>
              
              <div className="flex items-center text-sm text-sigeti-gray-medium mb-1">
                <MapPin size={14} className="mr-1 flex-shrink-0" />
                <span className="truncate">{incident.location}</span>
              </div>
              
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-sigeti-gray-light">Hace {incident.time}</span>
                <button className="text-xs text-sigeti-blue hover:underline">Ver detalles</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IncidentsList;
