
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Datos simulados para el gráfico
const data = [
  { hour: '6:00', level: 30 },
  { hour: '7:00', level: 65 },
  { hour: '8:00', level: 90 },
  { hour: '9:00', level: 75 },
  { hour: '10:00', level: 60 },
  { hour: '11:00', level: 55 },
  { hour: '12:00', level: 70 },
  { hour: '13:00', level: 80 },
  { hour: '14:00', level: 65 },
  { hour: '15:00', level: 60 },
  { hour: '16:00', level: 70 },
  { hour: '17:00', level: 85 },
  { hour: '18:00', level: 95 },
  { hour: '19:00', level: 70 },
  { hour: '20:00', level: 50 },
  { hour: '21:00', level: 35 },
  { hour: '22:00', level: 20 },
];

// Componente personalizado para el tooltip
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const level = payload[0].value;
    let status = 'Bajo';
    let color = '#10B981';
    
    if (level > 75) {
      status = 'Alto';
      color = '#ea384c';
    } else if (level > 40) {
      status = 'Medio';
      color = '#F97316';
    }
    
    return (
      <div className="bg-white p-3 rounded-lg shadow-md border border-gray-100">
        <p className="text-sm font-medium">{`${label}`}</p>
        <p className="text-xs text-sigeti-gray-medium">Nivel de Tráfico: <span style={{ color }}>{status}</span></p>
        <p className="text-xs text-sigeti-gray-medium">Valor: {level}%</p>
      </div>
    );
  }

  return null;
};

const TrafficTrendChart = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 h-full">
      <h2 className="text-lg font-semibold text-sigeti-gray-dark mb-4">Tendencias de Tráfico - Hoy</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="hour" 
              tick={{ fontSize: 12, fill: '#8A898C' }} 
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: '#8A898C' }} 
              tickLine={false}
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            <defs>
              <linearGradient id="trafficColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0.2}/>
              </linearGradient>
            </defs>
            <Line 
              type="monotone" 
              dataKey="level" 
              stroke="#0EA5E9" 
              strokeWidth={3}
              dot={{ r: 4, strokeWidth: 2, fill: "#fff" }}
              activeDot={{ r: 6, strokeWidth: 0, fill: "#0EA5E9" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex justify-between text-xs text-sigeti-gray-medium">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-sigeti-red mr-1"></div>
          <span>Alto (76-100%)</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-sigeti-orange mr-1"></div>
          <span>Medio (41-75%)</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-sigeti-green mr-1"></div>
          <span>Bajo (0-40%)</span>
        </div>
      </div>
    </div>
  );
};

export default TrafficTrendChart;
