
import React from 'react';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import TrafficMap from '../components/dashboard/TrafficMap';
import { ChartBar, Clock, MapPin, Calendar, BarChart2, PieChart } from 'lucide-react';
import { ChartContainer } from '@/components/ui/chart';
import { Bar, ResponsiveContainer, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Datos de predicción de tráfico
const trafficPredictionData = [
  { hora: '7:00', congestion: 45, promedio: 40 },
  { hora: '8:00', congestion: 80, promedio: 65 },
  { hora: '9:00', congestion: 70, promedio: 60 },
  { hora: '10:00', congestion: 50, promedio: 45 },
  { hora: '11:00', congestion: 45, promedio: 40 },
  { hora: '12:00', congestion: 55, promedio: 50 },
  { hora: '13:00', congestion: 65, promedio: 55 },
  { hora: '14:00', congestion: 50, promedio: 45 },
  { hora: '15:00', congestion: 55, promedio: 50 },
  { hora: '16:00', congestion: 60, promedio: 55 },
  { hora: '17:00', congestion: 75, promedio: 65 },
  { hora: '18:00', congestion: 85, promedio: 70 },
  { hora: '19:00', congestion: 75, promedio: 65 },
  { hora: '20:00', congestion: 60, promedio: 55 },
];

// Componente actualizado para el gráfico de barras
const TrafficPredictionChart = () => (
  <div className="h-full w-full">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={trafficPredictionData}
        margin={{ top: 20, right: 30, left: 10, bottom: 30 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis 
          dataKey="hora" 
          tick={{ fontSize: 12 }} 
          tickLine={false} 
          axisLine={{ stroke: '#E5E7EB' }}
        />
        <YAxis 
          tickFormatter={(value) => `${value}%`} 
          tick={{ fontSize: 12 }} 
          tickLine={false}
          axisLine={{ stroke: '#E5E7EB' }}
          domain={[0, 100]}
        />
        <Tooltip 
          formatter={(value) => [`${value}%`, 'Nivel de congestión']}
          labelFormatter={(label) => `${label} hrs`}
          contentStyle={{ borderRadius: '8px', border: '1px solid #E5E7EB' }}
        />
        <Legend wrapperStyle={{ paddingTop: '10px' }} />
        <Bar 
          name="Predicción hoy" 
          dataKey="congestion" 
          fill="#F97316" 
          radius={[4, 4, 0, 0]} 
          maxBarSize={40}
        />
        <Bar 
          name="Promedio histórico" 
          dataKey="promedio" 
          fill="#FDBA74" 
          radius={[4, 4, 0, 0]} 
          maxBarSize={40}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

// Mock component para gráfico circular
const PieChartComponent = () => (
  <div className="h-full flex items-center justify-center">
    <div className="relative w-40 h-40">
      <svg viewBox="0 0 36 36" className="w-full h-full">
        <path
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#F3F4F6"
          strokeWidth="3"
        />
        <path
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#F97316"
          strokeWidth="3"
          strokeDasharray="75, 100"
          strokeLinecap="round"
        />
        <text x="18" y="20.5" textAnchor="middle" fontSize="8" fill="#222222" fontWeight="bold">75%</text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <span className="text-3xl font-bold text-sigeti-gray-dark">75%</span>
        </div>
      </div>
    </div>
    <div className="ml-4">
      <div className="flex items-center mb-2">
        <div className="w-3 h-3 bg-sigeti-orange rounded-full mr-2"></div>
        <span className="text-xs text-sigeti-gray-medium">Horas pico (75%)</span>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 bg-gray-200 rounded-full mr-2"></div>
        <span className="text-xs text-sigeti-gray-medium">Horas valle (25%)</span>
      </div>
    </div>
  </div>
);

const Analisis = () => {
  const hotspots = [
    { id: 1, name: "Blvd. Luis Encinas y Blvd. Navarrete", congestion: "85%", timePeriod: "7:30 - 9:30, 17:30 - 19:30" },
    { id: 2, name: "Blvd. Morelos y Blvd. Solidaridad", congestion: "78%", timePeriod: "7:00 - 9:00, 18:00 - 20:00" },
    { id: 3, name: "Periférico Norte y Blvd. Progreso", congestion: "72%", timePeriod: "7:30 - 8:30, 17:30 - 19:00" },
    { id: 4, name: "Blvd. Colosio y Blvd. Quinta Norte", congestion: "70%", timePeriod: "8:00 - 9:30, 18:00 - 19:30" },
  ];
  
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-sigeti-gray-dark">Análisis IA</h1>
            <p className="text-sigeti-gray-medium">Inteligencia artificial aplicada para el análisis del tráfico</p>
          </div>
          
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <div className="bg-white rounded-lg shadow-sm p-4 h-[400px]">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-sigeti-gray-dark">Predicción de Tráfico</h2>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-xs bg-sigeti-orange text-white rounded-full">Hoy</button>
                    <button className="px-3 py-1 text-xs bg-white border border-gray-200 rounded-full text-sigeti-gray-medium">Mañana</button>
                    <button className="px-3 py-1 text-xs bg-white border border-gray-200 rounded-full text-sigeti-gray-medium">7 días</button>
                  </div>
                </div>
                <div className="h-[calc(100%-2rem)]">
                  <TrafficPredictionChart />
                </div>
              </div>
            </div>
            
            <div className="col-span-4">
              <div className="bg-white rounded-lg shadow-sm p-4 h-[400px]">
                <h2 className="text-lg font-semibold text-sigeti-gray-dark mb-4">Distribución del Tráfico</h2>
                <div className="h-[calc(100%-2rem)] flex items-center justify-center">
                  <PieChartComponent />
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-12 gap-6 mt-6">
            <div className="col-span-6">
              <div className="bg-white rounded-lg shadow-sm p-4 h-[400px]">
                <h2 className="text-lg font-semibold text-sigeti-gray-dark mb-4">Mapa de Calor de Congestión</h2>
                <div className="h-[calc(100%-2rem)]">
                  <TrafficMap />
                </div>
              </div>
            </div>
            
            <div className="col-span-6">
              <div className="bg-white rounded-lg shadow-sm p-4 h-[400px]">
                <h2 className="text-lg font-semibold text-sigeti-gray-dark mb-4">Puntos Críticos Detectados</h2>
                <div className="h-[calc(100%-2rem)] overflow-y-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 border-b text-left text-sm font-medium text-sigeti-gray-medium">Ubicación</th>
                        <th className="px-4 py-2 border-b text-left text-sm font-medium text-sigeti-gray-medium">Congestión</th>
                        <th className="px-4 py-2 border-b text-left text-sm font-medium text-sigeti-gray-medium">Horario</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hotspots.map(spot => (
                        <tr key={spot.id} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm">{spot.name}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                                <div 
                                  className="bg-sigeti-orange rounded-full h-2" 
                                  style={{ width: spot.congestion }}
                                ></div>
                              </div>
                              <span className="text-xs text-sigeti-gray-dark font-medium">{spot.congestion}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm text-sigeti-gray-medium">{spot.timePeriod}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-12 gap-6 mt-6">
            <div className="col-span-12">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-sigeti-gray-dark">Recomendaciones del Sistema</h2>
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">IA Generado</span>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-2">
                        <Clock className="text-sigeti-red" size={16} />
                      </div>
                      <h3 className="font-medium text-sigeti-gray-dark">Ajuste de Horarios</h3>
                    </div>
                    <p className="text-sm text-sigeti-gray-medium">Recomendamos ajustar los tiempos de semáforos en Blvd. Morelos durante las horas pico de la mañana para mejorar el flujo en dirección norte-sur.</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-2">
                        <MapPin className="text-sigeti-orange" size={16} />
                      </div>
                      <h3 className="font-medium text-sigeti-gray-dark">Rutas Alternas</h3>
                    </div>
                    <p className="text-sm text-sigeti-gray-medium">Activar señalización digital para desviar tráfico por Calle República durante las obras en Blvd. Luis Encinas, reduciendo congestión en un 25%.</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                        <Calendar className="text-sigeti-green" size={16} />
                      </div>
                      <h3 className="font-medium text-sigeti-gray-dark">Planificación</h3>
                    </div>
                    <p className="text-sm text-sigeti-gray-medium">Para el Maratón del 15 de Mayo, programar cierres escalonados desde las 5:00 AM con apertura gradual siguiendo el avance de los corredores.</p>
                  </div>
                </div>
                
                <div className="mt-4 pt-3 border-t border-gray-100 flex justify-center">
                  <button className="text-sigeti-orange text-sm hover:underline">
                    Ver todas las recomendaciones
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analisis;
