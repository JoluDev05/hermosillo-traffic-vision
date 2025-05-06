
import React from 'react';
import { Search, Bell } from 'lucide-react';

const DashboardHeader = () => {
  return (
    <header className="h-16 border-b border-gray-200 bg-white px-6 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-medium text-sigeti-gray-dark">Panel de Control</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar..."
            className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sigeti-blue focus:border-transparent"
          />
          <Search size={18} className="absolute left-2.5 top-2.5 text-sigeti-gray-medium" />
        </div>
        
        <div className="relative">
          <Bell size={20} className="text-sigeti-gray-medium hover:text-sigeti-gray-dark cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-sigeti-red text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </div>
        
        <div className="h-8 w-[1px] bg-gray-200"></div>
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-sigeti-blue flex items-center justify-center text-white">
            <span className="text-sm font-medium">OP</span>
          </div>
          <div>
            <p className="text-sm font-medium text-sigeti-gray-dark">Operador</p>
            <p className="text-xs text-sigeti-gray-medium">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
