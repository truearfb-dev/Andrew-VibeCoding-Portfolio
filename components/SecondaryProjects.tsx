import React from 'react';
import { Lock, Timer } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  status: string;
  icon: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, status, icon }) => (
  <div className="relative group overflow-hidden rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-white/10">
    <div className="p-6 flex flex-col items-center justify-center space-y-3 text-center h-full min-h-[160px]">
      <div className="text-gray-500 group-hover:text-neonLight transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-mono font-bold text-gray-300 group-hover:text-white transition-colors">{title}</h3>
      <span className="text-xs text-gray-600 uppercase tracking-widest border border-gray-700 rounded px-2 py-0.5">
        {status}
      </span>
    </div>
  </div>
);

export const SecondaryProjects: React.FC = () => {
  return (
    <section className="w-full">
      <div className="flex items-center space-x-4 mb-6 opacity-60">
        <div className="h-px bg-gray-700 flex-1"></div>
        <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">В Лаборатории</span>
        <div className="h-px bg-gray-700 flex-1"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-70 hover:opacity-100 transition-opacity duration-500">
        <ProjectCard 
            title="Quantum Soul" 
            status="Скоро" 
            icon={<Timer className="w-8 h-8" />}
        />
        <ProjectCard 
            title="Project X" 
            status="Секретно" 
            icon={<Lock className="w-8 h-8" />}
        />
      </div>
    </section>
  );
};