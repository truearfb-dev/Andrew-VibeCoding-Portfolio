import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Bot, Sparkles, Heart, LineChart } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  highlight?: boolean;
  status?: string;
}

export const MainProject: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      id: 'superwoman',
      name: 'SuperWoman AI',
      description: 'Экосистема ИИ-помощников для девушек',
      link: 'https://t.me/+-7Uuw03zGaQwZDhi',
      icon: <Sparkles className="w-6 h-6 text-yellow-400" />,
      highlight: true
    },
    {
      id: 'glow',
      name: 'Glow AI | Стилист и Фейс-йога',
      description: 'Карманный стилист: цветотип и фейс-йога',
      link: 'https://t.me/Glow_Style_AI_bot',
      icon: <Bot className="w-6 h-6 text-pink-400" />
    },
    {
      id: 'nutrimy',
      name: 'NutriLens | Твой нутрициолог',
      description: 'Считаем калории по фото еды',
      link: 'https://t.me/Nutrimy_AI_bot',
      icon: <Heart className="w-6 h-6 text-green-400" />
    },
    {
      id: 'skazka',
      name: 'Magic Tales',
      description: 'Добрые сказки для детей за 1 минуту',
      link: 'https://t.me/MoySkazka_bot',
      icon: <Bot className="w-6 h-6 text-blue-400" />
    },
    {
      id: 'crypto',
      name: 'Crypto Sentinel',
      description: 'Умный мониторинг курсов и новостей',
      link: '#', 
      icon: <LineChart className="w-6 h-6 text-teal-400" />,
      status: 'В разработке'
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 5);

  return (
    <section className="w-full max-w-2xl mx-auto">
      
      {/* Header */}
      <div className="flex items-center space-x-4 mb-8">
        <div className="h-px bg-gradient-to-r from-transparent via-neon to-transparent flex-1 opacity-50"></div>
        <div className="flex items-center space-x-2 px-4 py-1 rounded-full bg-neon/10 border border-neon/20 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono font-bold text-neonLight tracking-widest uppercase">Live Проекты</span>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-neon to-transparent flex-1 opacity-50"></div>
      </div>

      {/* List */}
      <div className="flex flex-col space-y-3">
        {visibleProjects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex items-center justify-between p-4 rounded-xl transition-all duration-300 border backdrop-blur-sm
              ${project.highlight 
                ? 'bg-gradient-to-r from-neon/10 to-purple-900/20 border-neon/50 shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:bg-neon/20' 
                : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20'
              }
              hover:-translate-y-1 hover:shadow-lg
            `}
          >
            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-lg bg-black/40 border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                {project.icon}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className={`font-mono font-bold text-base md:text-lg leading-tight ${project.highlight ? 'text-white' : 'text-gray-200 group-hover:text-white'}`}>
                    {project.name}
                  </h3>
                  {project.status && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full border border-gray-600 bg-gray-800/50 text-gray-400 uppercase tracking-wider">
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="pl-4">
              <div className={`p-2 rounded-full transition-all duration-300 ${project.highlight ? 'bg-neon text-white' : 'bg-white/5 text-gray-400 group-hover:text-white group-hover:bg-white/20'}`}>
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Show More Button */}
      {projects.length > 5 && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center space-x-2 text-xs md:text-sm font-mono text-gray-500 hover:text-neonLight transition-colors uppercase tracking-widest"
          >
            <span>{showAll ? 'Свернуть' : 'Показать все проекты'}</span>
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      )}
    </section>
  );
};