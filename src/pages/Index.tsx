
import React from 'react';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import TrafficMap from '../components/dashboard/TrafficMap';
import IncidentsList from '../components/dashboard/IncidentsList';
import StatsPanel from '../components/dashboard/StatsPanel';
import TrafficTrendChart from '../components/dashboard/TrafficTrendChart';
import EventsTimeline from '../components/dashboard/EventsTimeline';
import NotificationPanel from '../components/dashboard/NotificationPanel';

const Index = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <StatsPanel />
          </div>
          
          <div className="grid grid-cols-12 gap-6 mb-6">
            <div className="col-span-8">
              <div className="bg-white rounded-lg shadow-sm p-4 h-[500px]">
                <h2 className="text-lg font-semibold text-sigeti-gray-dark mb-4">Vista de Tráfico en Tiempo Real</h2>
                <div className="h-[calc(100%-2rem)]">
                  <TrafficMap />
                </div>
              </div>
            </div>
            
            <div className="col-span-4 h-[500px]">
              <IncidentsList />
            </div>
          </div>
          
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-6">
              <TrafficTrendChart />
            </div>
            
            <div className="col-span-3">
              <EventsTimeline />
            </div>
            
            <div className="col-span-3">
              <NotificationPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
