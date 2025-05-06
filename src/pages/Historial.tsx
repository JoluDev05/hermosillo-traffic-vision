
import React from 'react';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import { Calendar as CalendarIcon, Search, Filter } from 'lucide-react';

const Historial = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-sigeti-gray-dark">Historial</h1>
            <p className="text-sigeti-gray-medium">Registros históricos de incidentes y eventos</p>
          </div>
          
          <div className="mb-6 bg-white rounded-lg shadow-sm p-4">
            <h2 className="text-lg font-semibold text-sigeti-gray-dark mb-4">Filtros de Búsqueda</h2>
            
            <div className="grid grid-cols-4 gap-4">
              <div>
                <label className="block text-sigeti-gray-medium text-sm mb-1">Fecha Inicio</label>
                <div className="relative">
                  <input 
                    type="date" 
                    className="w-full border rounded-md px-3 py-2 text-sm pr-8"
                    defaultValue="2025-05-01"
                  />
                  <CalendarIcon size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-sigeti-gray-medium" />
                </div>
              </div>
              
              <div>
                <label className="block text-sigeti-gray-medium text-sm mb-1">Fecha Fin</label>
                <div className="relative">
                  <input 
                    type="date" 
                    className="w-full border rounded-md px-3 py-2 text-sm pr-8"
                    defaultValue="2025-05-06"
                  />
                  <CalendarIcon size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-sigeti-gray-medium" />
                </div>
              </div>
              
              <div>
                <label className="block text-sigeti-gray-medium text-sm mb-1">Tipo de Incidente</label>
                <select className="w-full border rounded-md px-3 py-2 text-sm appearance-none">
                  <option>Todos</option>
                  <option>Accidente</option>
                  <option>Congestión</option>
                  <option>Obra</option>
                  <option>Evento</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sigeti-gray-medium text-sm mb-1">Zona</label>
                <select className="w-full border rounded-md px-3 py-2 text-sm appearance-none">
                  <option>Todas</option>
                  <option>Centro</option>
                  <option>Norte</option>
                  <option>Sur</option>
                  <option>Este</option>
                  <option>Oeste</option>
                </select>
              </div>
            </div>
            
            <div className="flex justify-end mt-4">
              <button className="flex items-center space-x-2 bg-sigeti-orange text-white px-4 py-2 rounded-md text-sm">
                <Search size={16} />
                <span>Buscar</span>
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-sigeti-gray-dark">Resultados</h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-sigeti-gray-medium">Ordenar por:</span>
                <select className="border rounded-md px-2 py-1 text-sm">
                  <option>Más recientes</option>
                  <option>Más antiguos</option>
                  <option>Por gravedad</option>
                </select>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-4 py-2 border-b text-sm font-medium text-sigeti-gray-medium">ID</th>
                    <th className="px-4 py-2 border-b text-sm font-medium text-sigeti-gray-medium">Fecha</th>
                    <th className="px-4 py-2 border-b text-sm font-medium text-sigeti-gray-medium">Hora</th>
                    <th className="px-4 py-2 border-b text-sm font-medium text-sigeti-gray-medium">Tipo</th>
                    <th className="px-4 py-2 border-b text-sm font-medium text-sigeti-gray-medium">Ubicación</th>
                    <th className="px-4 py-2 border-b text-sm font-medium text-sigeti-gray-medium">Duración</th>
                    <th className="px-4 py-2 border-b text-sm font-medium text-sigeti-gray-medium">Estado</th>
                    <th className="px-4 py-2 border-b text-sm font-medium text-sigeti-gray-medium">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(8)].map((_, index) => (
                    <tr key={index} className="hover:bg-gray-50 border-b">
                      <td className="px-4 py-3 text-sm">#INC-{2025050 + index}</td>
                      <td className="px-4 py-3 text-sm">05/05/2025</td>
                      <td className="px-4 py-3 text-sm">{`${8 + index}:${30 + index}`}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`inline-block rounded-full px-2 py-0.5 text-xs ${
                          index % 3 === 0 ? 'bg-red-100 text-red-800' : 
                          index % 3 === 1 ? 'bg-orange-100 text-orange-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {index % 3 === 0 ? 'Accidente' : index % 3 === 1 ? 'Congestión' : 'Evento'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">Blvd. Luis Encinas</td>
                      <td className="px-4 py-3 text-sm">{index * 10 + 15} min</td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`inline-block rounded-full px-2 py-0.5 text-xs ${
                          index % 2 === 0 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {index % 2 === 0 ? 'Resuelto' : 'Archivado'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <button className="text-sigeti-orange hover:text-sigeti-gray-dark">Ver detalles</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <div className="text-sm text-sigeti-gray-medium">
                Mostrando 1-8 de 24 registros
              </div>
              <div className="flex items-center space-x-2">
                <button className="border rounded px-3 py-1 text-sm text-sigeti-gray-medium">Anterior</button>
                <button className="border rounded px-3 py-1 text-sm bg-sigeti-orange text-white">1</button>
                <button className="border rounded px-3 py-1 text-sm text-sigeti-gray-medium">2</button>
                <button className="border rounded px-3 py-1 text-sm text-sigeti-gray-medium">3</button>
                <button className="border rounded px-3 py-1 text-sm text-sigeti-gray-medium">Siguiente</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historial;
