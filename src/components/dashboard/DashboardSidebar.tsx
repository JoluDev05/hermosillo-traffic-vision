
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChartBar, ChartLine, Calendar, Construction, Car, MapPin, Settings, AlertTriangle, LayoutDashboard } from "lucide-react";

const DashboardSidebar = () => {
  const navItems = [
    { title: 'Panel Principal', icon: <LayoutDashboard size={20} />, path: '/' },
    { title: 'Incidentes Activos', icon: <AlertTriangle size={20} />, path: '/incidentes' },
    { title: 'Historial', icon: <ChartLine size={20} />, path: '/historial' },
    { title: 'Eventos Programados', icon: <Calendar size={20} />, path: '/eventos' },
    { title: 'Construcciones', icon: <Construction size={20} />, path: '/construcciones' },
    { title: 'Análisis IA', icon: <ChartBar size={20} />, path: '/analisis' },
    { title: 'Configuración', icon: <Settings size={20} />, path: '/configuracion' },
  ];
  
  return (
    <aside className="min-h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <Car className="text-sigeti-blue" size={24} />
          <h1 className="text-xl font-bold text-sigeti-gray-dark">SiGeTi</h1>
        </div>
        <p className="text-xs text-sigeti-gray-medium mt-1">Sistema de Gestión de Tráfico Inteligente</p>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.title}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-sigeti-blue text-white'
                      : 'text-sigeti-gray-medium hover:bg-gray-100'
                  }`
                }
              >
                {item.icon}
                <span>{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-sigeti-blue flex items-center justify-center text-white">
            <span className="text-sm font-medium">HM</span>
          </div>
          <div>
            <p className="text-sm font-medium text-sigeti-gray-dark">Hermosillo</p>
            <p className="text-xs text-sigeti-gray-medium">Gobierno Municipal</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
