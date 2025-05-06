
import React from 'react';
import { X } from 'lucide-react';

// Simulación de notificaciones
const notifications = [
  {
    id: 1,
    title: 'Alerta de tráfico',
    description: 'Congestión severa en Blvd. Kino por accidente múltiple',
    time: '2 min',
    priority: 'high',
  },
  {
    id: 2,
    title: 'Nuevo reporte ciudadano',
    description: 'Semáforo sin funcionar en Blvd. Morelos y Luis Encinas',
    time: '10 min',
    priority: 'medium',
  },
  {
    id: 3,
    title: 'Actualización de construcción',
    description: 'Obra en Periférico Norte avanzó al 50%',
    time: '25 min',
    priority: 'low',
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'border-l-4 border-sigeti-red';
    case 'medium':
      return 'border-l-4 border-sigeti-orange';
    case 'low':
      return 'border-l-4 border-sigeti-blue';
    default:
      return 'border-l-4 border-sigeti-gray-light';
  }
};

const NotificationPanel = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm h-full overflow-hidden">
      <div className="p-4 border-b border-gray-100 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-sigeti-gray-dark">Notificaciones Recientes</h2>
        <button className="text-xs text-sigeti-blue hover:underline">Marcar todas como leídas</button>
      </div>
      
      <div className="p-4 overflow-y-auto max-h-[calc(100%-60px)]">
        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-40 text-sigeti-gray-light">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <p className="text-sm">No hay notificaciones nuevas</p>
          </div>
        ) : (
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div key={notification.id} className={`p-3 rounded-lg bg-white ${getPriorityColor(notification.priority)} shadow-sm hover:shadow-md transition-shadow`}>
                <div className="flex justify-between">
                  <h3 className="font-medium text-sm text-sigeti-gray-dark">{notification.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-sigeti-gray-light">Hace {notification.time}</span>
                    <button className="text-sigeti-gray-light hover:text-sigeti-gray-medium">
                      <X size={14} />
                    </button>
                  </div>
                </div>
                <p className="mt-1 text-xs text-sigeti-gray-medium">{notification.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationPanel;
