import React from 'react';
import { ExternalLink, Zap } from 'lucide-react';

export const MainProject: React.FC = () => {
  return (
    <section className="w-full">
      <div className="relative group w-full">
        {/* Glow effect behind the card */}
        <div className="absolute -inset-1 bg-gradient-to-r from-neon to-purple-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        
        <div className="relative p-1 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/10 hover:-translate-y-2 transition-transform duration-500 ease-out">
            <div className="px-6 py-10 md:py-14 md:px-12 flex flex-col items-center text-center space-y-8">
                
                <div className="inline-flex items-center space-x-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-xs font-mono text-gray-300 uppercase tracking-widest">Live Проект</span>
                </div>

                {/* Title with padding fix for italic clipping */}
                <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter pb-1">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-[length:200%_auto] animate-gradient-x pr-4">
                        SuperWoman AI
                    </span>
                </h2>

                <div className="space-y-6 max-w-2xl mx-auto">
                    <p className="text-white text-lg md:text-xl font-medium leading-relaxed drop-shadow-md">
                        💎 Первая экосистема ИИ-помощников для современной девушки.
                    </p>

                    {/* Bot List - "Organic" layout */}
                    <div className="grid gap-3 text-left bg-white/5 p-5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                        <div className="flex items-start space-x-3 text-sm md:text-base text-gray-300">
                            <span className="text-xl flex-shrink-0">👗</span>
                            <span>
                                <strong className="text-neonLight font-mono">@Glow_Style_AI_bot</strong> — Твой карманный стилист (цветотип и фейс-йога)
                            </span>
                        </div>
                        <div className="flex items-start space-x-3 text-sm md:text-base text-gray-300">
                            <span className="text-xl flex-shrink-0">🥗</span>
                            <span>
                                <strong className="text-neonLight font-mono">@Nutrimy_AI_bot</strong> — Считаем калории по фото
                            </span>
                        </div>
                        <div className="flex items-start space-x-3 text-sm md:text-base text-gray-300">
                            <span className="text-xl flex-shrink-0">🧸</span>
                            <span>
                                <strong className="text-neonLight font-mono">@MoySkazka_bot</strong> — Добрые сказки для детей за 1 минуту!
                            </span>
                        </div>
                    </div>

                    <span className="block text-xs text-gray-500 font-mono pt-2">Разработано за 48 часов.</span>
                </div>

                <div className="pt-2">
                    <a 
                        href="https://t.me/+-7Uuw03zGaQwZDhi" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-neon font-mono rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon hover:bg-purple-600 hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.5)] animate-pulse-slow"
                    >
                        <Zap className="w-5 h-5 mr-2 fill-current" />
                        ПОЛУЧИТЬ ДОСТУП
                        <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                </div>
            </div>
            
            {/* Decorative tech lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};