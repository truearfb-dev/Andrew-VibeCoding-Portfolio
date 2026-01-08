import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Bot, Sparkles, LineChart, Zap, ArrowRight } from 'lucide-react';

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

  // Featured Project Data (NutriLens)
  const featuredProject = {
    name: 'NutriLens AI',
    tagline: 'Твой карманный нутрициолог',
    description: 'Мгновенный подсчет калорий по фото еды. ИИ распознает блюдо, определяет вес и выдает полный расклад КБЖУ за 1 секунду.',
    link: 'https://t.me/Nutrilensai_bot/app?startapp=mainsite',
    stats: ['1k+ Пользователей', '98% Точность', '24/7 Трекинг'],
    image: '/nutrilens-screen.jpg' 
  };

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
      name: 'Glow AI | Стилист',
      description: 'Карманный стилист: цветотип и фейс-йога',
      link: 'https://t.me/Glow_Style_AI_bot',
      icon: <Bot className="w-6 h-6 text-pink-400" />
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

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-center gap-16">
      
      {/* FEATURED PROJECT: NUTRILENS */}
      <div className="flex flex-col items-center text-center space-y-8 max-w-2xl relative z-20">
           {/* Badge */}
           <div className="flex items-center space-x-2 animate-fade-in">
              <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono tracking-widest uppercase animate-pulse">
                Flagship Project
              </span>
           </div>
           
           {/* Text Content */}
           <div className="space-y-4">
             <h2 className="text-5xl md:text-7xl font-bold font-mono text-white leading-tight drop-shadow-[0_0_25px_rgba(74,222,128,0.2)]">
               {featuredProject.name}
             </h2>
             <p className="text-xl md:text-2xl text-gray-400 font-light">
               {featuredProject.tagline}
             </p>
           </div>

           <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
             {featuredProject.description}
           </p>

           {/* Stats */}
           <div className="flex flex-wrap justify-center gap-4 md:gap-8 py-2">
             {featuredProject.stats.map((stat, i) => (
               <div key={i} className="flex items-center space-x-2 text-sm text-gray-400 font-mono">
                 <Zap className="w-4 h-4 text-neon" />
                 <span>{stat}</span>
               </div>
             ))}
           </div>

           {/* CTA Button */}
           <a 
             href={featuredProject.link}
             target="_blank"
             rel="noopener noreferrer"
             className="group relative inline-flex items-center justify-center px-10 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]"
           >
             <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-emerald-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
             <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
               Запустить <ArrowRight className="w-5 h-5" />
             </span>
           </a>
      </div>

      {/* PHONE MOCKUP (Full Stretch Image) */}
      <div className="relative w-full flex justify-center perspective-1000 -mt-8">
          {/* Ambient Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          {/* Phone Container */}
          <div className="relative transform transition-transform duration-700 hover:scale-[1.01] hover:-rotate-1">
            
            {/* The Frame */}
            <div 
                className="relative w-[320px] h-[640px] bg-black rounded-[3.5rem] border-[6px] border-[#1a1a1a] ring-1 ring-white/20 overflow-hidden shadow-2xl z-10"
                style={{
                    // Gradient mask to fade out the bottom
                    maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)'
                }}
            >
               {/* Image fills entire container absolutely */}
               <img 
                 src={featuredProject.image} 
                 alt="NutriLens App" 
                 className="absolute inset-0 w-full h-full object-cover object-top scale-[1.01]"
                 onError={(e) => {
                     e.currentTarget.style.display = 'none';
                     const parent = e.currentTarget.parentElement;
                     if (parent) {
                         const msg = document.createElement('div');
                         msg.className = "flex items-center justify-center h-full text-gray-500 font-mono text-xs p-4 text-center absolute inset-0";
                         msg.innerText = "Screen preview loading...";
                         parent.appendChild(msg);
                     }
                 }}
               />
               
               {/* Subtle Glass Glare Overlay */}
               <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none opacity-50"></div>
            </div>
          </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

      {/* OTHER PROJECTS LIST */}
      <div className="w-full max-w-2xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-neon to-transparent flex-1 opacity-50"></div>
            <div className="flex items-center space-x-2 px-4 py-1 rounded-full bg-neon/10 border border-neon/20 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <span className="text-xs font-mono font-bold text-neonLight tracking-widest uppercase">Другие Проекты</span>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-neon to-transparent flex-1 opacity-50"></div>
        </div>

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

        {projects.length > 3 && (
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
      </div>
    </section>
  );
};