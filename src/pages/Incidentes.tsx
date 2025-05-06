
import React from 'react';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import TrafficMap from '../components/dashboard/TrafficMap';
import IncidentsList from '../components/dashboard/IncidentsList';

const Incidentes = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-sigeti-gray-dark">Incidentes Activos</h1>
            <p className="text-sigeti-gray-medium">Monitoreo de incidentes en tiempo real</p>
          </div>
          
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <div className="bg-white rounded-lg shadow-sm p-4 h-[600px]">
                <h2 className="text-lg font-semibold text-sigeti-gray-dark mb-4">Ubicación de Incidentes</h2>
                <div className="h-[calc(100%-2rem)]">
                  <TrafficMap />
                </div>
              </div>
            </div>
            
            <div className="col-span-4 h-[600px]">
              <IncidentsList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Incidentes;
