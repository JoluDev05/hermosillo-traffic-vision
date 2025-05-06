
import React from 'react';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import TrafficMap from '../components/dashboard/TrafficMap';
import { Calendar, Clock, Construction, MapPin } from 'lucide-react';

const Construcciones = () => {
  const constructionProjects = [
    {
      id: 1,
      name: "Repavimentación Blvd. Morelos",
      status: "En progreso",
      completion: 65,
      startDate: "15 Abr 2025",
      endDate: "30 May 2025",
      location: "Blvd. Morelos entre Reforma y Navarrete",
      impact: "alto"
    },
    {
      id: 2,
      name: "Remodelación Parque Madero",
      status: "En progreso",
      completion: 40,
      startDate: "01 Mar 2025",
      endDate: "15 Jun 2025",
      location: "Parque Madero, Centro",
      impact: "bajo"
    },
    {
      id: 3,
      name: "Ampliación Blvd. Progreso",
      status: "Próximo a iniciar",
      completion: 0,
      startDate: "01 Jun 2025",
      endDate: "30 Sep 2025",
      location: "Blvd. Progreso, tramo Norte",
      impact: "medio"
    },
    {
      id: 4,
      name: "Sustitución tubería agua potable",
      status: "En progreso",
      completion: 85,
      startDate: "10 Feb 2025",
      endDate: "15 May 2025",
      location: "Col. Villa de Seris",
      impact: "medio"
    }
  ];
  
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-sigeti-gray-dark">Obras y Construcciones</h1>
            <p className="text-sigeti-gray-medium">Monitoreo de obras públicas y su impacto vial</p>
          </div>
          
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <div className="bg-white rounded-lg shadow-sm p-4 h-[500px]">
                <h2 className="text-lg font-semibold text-sigeti-gray-dark mb-4">Ubicación de Obras</h2>
                <div className="h-[calc(100%-2rem)]">
                  <TrafficMap />
                </div>
              </div>
            </div>
            
            <div className="col-span-4">
              <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-sigeti-gray-dark">Resumen de Obras</h2>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <p className="text-sigeti-gray-medium text-xs">Total Obras</p>
                    <p className="text-xl font-bold text-sigeti-gray-dark">7</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <p className="text-sigeti-gray-medium text-xs">En Progreso</p>
                    <p className="text-xl font-bold text-sigeti-orange">4</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <p className="text-sigeti-gray-medium text-xs">Alto Impacto</p>
                    <p className="text-xl font-bold text-sigeti-red">1</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <p className="text-sigeti-gray-medium text-xs">Programadas</p>
                    <p className="text-xl font-bold text-sigeti-gray-dark">3</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-sigeti-gray-dark">Acciones</h2>
                </div>
                
                <div className="space-y-2">
                  <button className="w-full bg-sigeti-orange text-white rounded-lg p-3 text-sm font-medium flex items-center justify-center">
                    <Construction size={16} className="mr-2" />
                    Registrar Nueva Obra
                  </button>
                  <button className="w-full border border-sigeti-orange text-sigeti-orange rounded-lg p-3 text-sm font-medium flex items-center justify-center">
                    <Calendar size={16} className="mr-2" />
                    Generar Reporte
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-sigeti-gray-dark mb-4">Obras Activas</h2>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-4 py-3 border-b text-sm font-medium text-sigeti-gray-medium">Obra</th>
                    <th className="px-4 py-3 border-b text-sm font-medium text-sigeti-gray-medium">Estatus</th>
                    <th className="px-4 py-3 border-b text-sm font-medium text-sigeti-gray-medium">Avance</th>
                    <th className="px-4 py-3 border-b text-sm font-medium text-sigeti-gray-medium">Fechas</th>
                    <th className="px-4 py-3 border-b text-sm font-medium text-sigeti-gray-medium">Ubicación</th>
                    <th className="px-4 py-3 border-b text-sm font-medium text-sigeti-gray-medium">Impacto</th>
                    <th className="px-4 py-3 border-b text-sm font-medium text-sigeti-gray-medium">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {constructionProjects.map((project) => (
                    <tr key={project.id} className="hover:bg-gray-50 border-b">
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <Construction size={16} className="text-sigeti-orange mr-2" />
                          <span className="text-sm font-medium text-sigeti-gray-dark">{project.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-block rounded-full px-2 py-0.5 text-xs ${
                          project.status === "En progreso" ? 'bg-green-100 text-green-800' : 
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {project.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-sigeti-orange rounded-full h-2" 
                            style={{ width: `${project.completion}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-sigeti-gray-medium mt-1">{project.completion}% completado</div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="text-sm">
                          <div className="flex items-center text-sigeti-gray-medium">
                            <Clock size={12} className="mr-1" />
                            <span>Inicio: {project.startDate}</span>
                          </div>
                          <div className="flex items-center text-sigeti-gray-medium">
                            <Clock size={12} className="mr-1" />
                            <span>Fin: {project.endDate}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm text-sigeti-gray-medium">
                          <MapPin size={12} className="mr-1 flex-shrink-0" />
                          <span className="truncate max-w-[150px]">{project.location}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-block rounded-full px-2 py-0.5 text-xs ${
                          project.impact === "alto" ? 'bg-red-100 text-red-800' : 
                          project.impact === "medio" ? 'bg-orange-100 text-orange-800' : 
                          'bg-green-100 text-green-800'
                        }`}>
                          Impacto {project.impact}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center space-x-2">
                          <button className="text-sigeti-orange hover:text-sigeti-orange-dark text-sm">Ver</button>
                          <button className="text-sigeti-orange hover:text-sigeti-orange-dark text-sm">Editar</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Construcciones;
