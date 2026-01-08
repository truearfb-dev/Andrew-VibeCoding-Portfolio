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
    stats: ['10k+ Пользователей', '98% Точность', '24/7 Трекинг'],
    image: '/nutrilens-screen.jpg' // User needs to add this file
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
    <section className="w-full max-w-4xl mx-auto flex flex-col gap-16">
      
      {/* FEATURED PROJECT: NUTRILENS (iPhone 16 Presentation) */}
      <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Info */}
        <div className="flex flex-col space-y-6 text-left order-2 lg:order-1">
           <div className="flex items-center space-x-2">
              <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono tracking-widest uppercase animate-pulse">
                Flagship Project
              </span>
           </div>
           
           <h2 className="text-4xl md:text-5xl font-bold font-mono text-white leading-tight">
             {featuredProject.name}
             <span className="block text-2xl md:text-3xl text-gray-400 mt-2 font-light">{featuredProject.tagline}</span>
           </h2>

           <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-md">
             {featuredProject.description}
           </p>

           <div className="flex flex-wrap gap-4 py-2">
             {featuredProject.stats.map((stat, i) => (
               <div key={i} className="flex items-center space-x-2 text-sm text-gray-400 font-mono">
                 <Zap className="w-3 h-3 text-neon" />
                 <span>{stat}</span>
               </div>
             ))}
           </div>

           <a 
             href={featuredProject.link}
             target="_blank"
             rel="noopener noreferrer"
             className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] w-fit"
           >
             <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
             <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
               Запустить сейчас <ArrowRight className="w-5 h-5" />
             </span>
           </a>
        </div>

        {/* Right Side: iPhone Mockup */}
        <div className="relative flex justify-center order-1 lg:order-2 perspective-1000">
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-green-500/20 blur-[80px] rounded-full pointer-events-none transform translate-y-10"></div>
          
          {/* iPhone 16 Frame */}
          <div className="relative w-[300px] h-[620px] bg-gray-900 rounded-[3.5rem] shadow-2xl border-[6px] border-[#3a3a3a] ring-1 ring-white/10 overflow-hidden transform rotate-[-6deg] hover:rotate-0 transition-transform duration-700 ease-out z-10">
             {/* Titanium Edge Shine */}
             <div className="absolute inset-0 rounded-[3.2rem] ring-2 ring-white/20 pointer-events-none z-20"></div>

             {/* Dynamic Island Area */}
             <div className="absolute top-0 w-full h-8 flex justify-center z-30 pt-3">
               <div className="w-28 h-7 bg-black rounded-full flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-[#1a1a1a]"></div>
               </div>
             </div>

             {/* Screen Content */}
             <div className="w-full h-full bg-[#0F0F0F] relative overflow-hidden">
                {/* Status Bar Mock */}
                <div className="absolute top-3 left-6 text-[10px] font-bold text-white z-20">12:37</div>
                <div className="absolute top-3 right-6 flex space-x-1 z-20">
                    <div className="w-4 h-2.5 border border-white rounded-[2px]"></div>
                </div>

                {/* Actual Screenshot Image */}
                <img 
                  src={featuredProject.image} 
                  alt="NutriLens App Screenshot" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    // Show fallback gradient if image missing
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                        const fallback = document.createElement('div');
                        fallback.className = "w-full h-full flex items-center justify-center bg-gradient-to-br from-green-900 to-black p-8 text-center";
                        fallback.innerHTML = "<div class='text-green-500 font-mono text-sm'>Add nutrilens-screen.jpg to public folder</div>";
                        parent.appendChild(fallback);
                    }
                  }}
                />
             </div>
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