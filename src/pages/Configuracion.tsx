
import React from 'react';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import { Settings, Users, Bell, Shield, Map, Database, ChartLine, Clock } from 'lucide-react';

const ConfigSection = ({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) => (
  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
    <div className="flex items-center mb-4">
      <div className="w-10 h-10 rounded-full bg-sigeti-orange/10 flex items-center justify-center mr-3">
        {icon}
      </div>
      <h2 className="text-lg font-semibold text-sigeti-gray-dark">{title}</h2>
    </div>
    <div className="pl-12">
      {children}
    </div>
  </div>
);

const SettingToggle = ({ label, description, enabled = false }: { label: string; description: string; enabled?: boolean }) => (
  <div className="py-4 border-b border-gray-100 flex justify-between items-center">
    <div>
      <h3 className="font-medium text-sigeti-gray-dark">{label}</h3>
      <p className="text-sm text-sigeti-gray-medium mt-1">{description}</p>
    </div>
    <label className="relative inline-block w-12 h-6 cursor-pointer">
      <input type="checkbox" className="sr-only peer" defaultChecked={enabled} />
      <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sigeti-orange"></div>
    </label>
  </div>
);

const SettingSelect = ({ label, description, options, defaultValue }: { 
  label: string; 
  description: string; 
  options: {value: string; label: string}[];
  defaultValue?: string;
}) => (
  <div className="py-4 border-b border-gray-100">
    <h3 className="font-medium text-sigeti-gray-dark">{label}</h3>
    <p className="text-sm text-sigeti-gray-medium mt-1 mb-3">{description}</p>
    <select className="w-full max-w-xs border border-gray-200 rounded-md p-2 text-sm" defaultValue={defaultValue}>
      {options.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  </div>
);

const Configuracion = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-sigeti-gray-dark">Configuración</h1>
            <p className="text-sigeti-gray-medium">Gestiona las preferencias y opciones del sistema</p>
          </div>
          
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <ConfigSection title="General" icon={<Settings size={20} className="text-sigeti-orange" />}>
                <SettingToggle 
                  label="Modo Oscuro"
                  description="Cambia la apariencia del panel a modo oscuro" 
                />
                
                <SettingToggle 
                  label="Actualizaciones Automáticas"
                  description="Actualizar datos del mapa cada 30 segundos"
                  enabled={true}
                />
                
                <SettingSelect 
                  label="Zona Horaria"
                  description="Selecciona la zona horaria para reportes y eventos" 
                  options={[
                    {value: "america-hermosillo", label: "América/Hermosillo (UTC-7)"},
                    {value: "america-mexico-city", label: "América/Ciudad de México (UTC-6)"},
                    {value: "america-tijuana", label: "América/Tijuana (UTC-8)"}
                  ]}
                  defaultValue="america-hermosillo"
                />
              </ConfigSection>
              
              <ConfigSection title="Notificaciones" icon={<Bell size={20} className="text-sigeti-orange" />}>
                <SettingToggle 
                  label="Notificaciones de Incidentes"
                  description="Recibir alertas de nuevos incidentes en tiempo real"
                  enabled={true}
                />
                
                <SettingToggle 
                  label="Notificaciones de Eventos"
                  description="Recibir recordatorios de eventos programados"
                  enabled={true}
                />
                
                <SettingToggle 
                  label="Alertas de Congestión"
                  description="Notificar cuando la congestión supere umbrales establecidos"
                  enabled={true}
                />
                
                <SettingSelect 
                  label="Método de Notificación"
                  description="Selecciona cómo quieres recibir las notificaciones" 
                  options={[
                    {value: "all", label: "Todas (Email, SMS, Dashboard)"},
                    {value: "email-dashboard", label: "Email y Dashboard"},
                    {value: "dashboard", label: "Solo Dashboard"}
                  ]}
                  defaultValue="all"
                />
              </ConfigSection>
              
              <ConfigSection title="Sistema de IA" icon={<ChartLine size={20} className="text-sigeti-orange" />}>
                <SettingToggle 
                  label="Análisis Predictivo"
                  description="Generar predicciones de tráfico basadas en datos históricos"
                  enabled={true}
                />
                
                <SettingToggle 
                  label="Detección Automática de Incidentes"
                  description="Usar IA para identificar accidentes y congestiones desde cámaras"
                  enabled={true}
                />
                
                <SettingSelect 
                  label="Frecuencia de Análisis"
                  description="Cada cuánto tiempo se analizan los datos para generar predicciones" 
                  options={[
                    {value: "15min", label: "Cada 15 minutos"},
                    {value: "30min", label: "Cada 30 minutos"},
                    {value: "60min", label: "Cada hora"}
                  ]}
                  defaultValue="15min"
                />
                
                <div className="py-4 border-b border-gray-100">
                  <h3 className="font-medium text-sigeti-gray-dark">Sensibilidad de Alertas</h3>
                  <p className="text-sm text-sigeti-gray-medium mt-1 mb-3">Ajusta qué tan sensible es el sistema para detectar anomalías</p>
                  <input 
                    type="range" 
                    min="1" 
                    max="5" 
                    defaultValue="3" 
                    className="w-full max-w-xs accent-sigeti-orange cursor-pointer"
                  />
                  <div className="flex justify-between w-full max-w-xs text-xs text-sigeti-gray-medium mt-1">
                    <span>Menos alertas</span>
                    <span>Más precisión</span>
                  </div>
                </div>
              </ConfigSection>
            </div>
            
            <div className="col-span-4">
              <ConfigSection title="Cámaras y Sensores" icon={<Map size={20} className="text-sigeti-orange" />}>
                <div className="py-4 border-b border-gray-100">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium text-sigeti-gray-dark">Cámaras Conectadas</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">127 activas</span>
                  </div>
                  <button className="text-sigeti-orange text-sm hover:underline">Configurar fuentes de video</button>
                </div>
                
                <div className="py-4 border-b border-gray-100">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium text-sigeti-gray-dark">Sensores IoT</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">84 activos</span>
                  </div>
                  <button className="text-sigeti-orange text-sm hover:underline">Gestionar sensores</button>
                </div>
                
                <SettingToggle 
                  label="Rotación de Cámaras"
                  description="Mostrar todas las cámaras en secuencia en el monitor central"
                  enabled={true}
                />
                
                <SettingSelect 
                  label="Resolución de Video"
                  description="Calidad predeterminada para visualización de cámaras" 
                  options={[
                    {value: "high", label: "Alta (1080p)"},
                    {value: "medium", label: "Media (720p)"},
                    {value: "low", label: "Baja (480p)"}
                  ]}
                  defaultValue="medium"
                />
              </ConfigSection>
              
              <ConfigSection title="Usuarios y Permisos" icon={<Users size={20} className="text-sigeti-orange" />}>
                <div className="py-4 border-b border-gray-100">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium text-sigeti-gray-dark">Usuarios Activos</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">12 usuarios</span>
                  </div>
                  <button className="text-sigeti-orange text-sm hover:underline">Gestionar usuarios</button>
                </div>
                
                <div className="py-4 border-b border-gray-100">
                  <h3 className="font-medium text-sigeti-gray-dark">Roles Disponibles</h3>
                  <div className="mt-2 space-y-1 text-sm">
                    <div className="flex items-center">
                      <Shield size={14} className="text-sigeti-orange mr-1" />
                      <span>Administrador</span>
                    </div>
                    <div className="flex items-center">
                      <Shield size={14} className="text-sigeti-orange mr-1" />
                      <span>Operador</span>
                    </div>
                    <div className="flex items-center">
                      <Shield size={14} className="text-sigeti-orange mr-1" />
                      <span>Analista</span>
                    </div>
                    <div className="flex items-center">
                      <Shield size={14} className="text-sigeti-orange mr-1" />
                      <span>Visualizador</span>
                    </div>
                  </div>
                  <button className="text-sigeti-orange text-sm hover:underline mt-3">Configurar permisos</button>
                </div>
              </ConfigSection>
              
              <ConfigSection title="Base de Datos" icon={<Database size={20} className="text-sigeti-orange" />}>
                <div className="py-4 border-b border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-sigeti-gray-dark">Estado</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Online</span>
                  </div>
                  <p className="text-sm text-sigeti-gray-medium">Último respaldo: 06/05/2025 03:00 AM</p>
                </div>
                
                <SettingSelect 
                  label="Frecuencia de Respaldo"
                  description="Cada cuánto tiempo se realiza un respaldo automático" 
                  options={[
                    {value: "daily", label: "Diario"},
                    {value: "12h", label: "Cada 12 horas"},
                    {value: "weekly", label: "Semanal"}
                  ]}
                  defaultValue="daily"
                />
                
                <div className="py-4">
                  <button className="w-full bg-sigeti-orange text-white rounded-lg p-3 text-sm font-medium flex items-center justify-center">
                    <Clock size={16} className="mr-2" />
                    Realizar Respaldo Manual
                  </button>
                </div>
              </ConfigSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configuracion;
