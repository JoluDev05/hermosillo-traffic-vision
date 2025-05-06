
import React from 'react';
import { ArrowUp, ArrowDown, Car, Calendar, Construction, AlertTriangle } from 'lucide-react';

const StatsCard = ({ 
  title,
  value,
  change, 
  isIncrease,
  icon
}: { 
  title: string;
  value: string;
  change: string;
  isIncrease: boolean;
  icon: React.ReactNode;
}) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
      <div className="flex justify-between items-start mb-3">
        <p className="text-sm text-sigeti-gray-medium">{title}</p>
        <div className="p-2 rounded-lg bg-gray-50">
          {icon}
        </div>
      </div>
      <p className="text-2xl font-semibold text-sigeti-gray-dark">{value}</p>
      <div className="flex items-center mt-2">
        <div className={`flex items-center gap-1 text-xs ${isIncrease ? 'text-sigeti-red' : 'text-sigeti-green'}`}>
          {isIncrease ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
          <span>{change}</span>
        </div>
        <span className="text-xs text-sigeti-gray-light ml-1">vs ayer</span>
      </div>
    </div>
  );
};

const StatsPanel = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <StatsCard
        title="Incidentes Activos"
        value="8"
        change="14%"
        isIncrease={true}
        icon={<AlertTriangle className="text-sigeti-red" size={18} />}
      />
      <StatsCard
        title="Nivel de Tráfico"
        value="Alto"
        change="23%"
        isIncrease={true}
        icon={<Car className="text-sigeti-blue" size={18} />}
      />
      <StatsCard
        title="Eventos Programados"
        value="3"
        change="0%"
        isIncrease={false}
        icon={<Calendar className="text-sigeti-blue" size={18} />}
      />
      <StatsCard
        title="Obras en Curso"
        value="5"
        change="20%"
        isIncrease={false}
        icon={<Construction className="text-sigeti-orange" size={18} />}
      />
    </div>
  );
};

export default StatsPanel;
