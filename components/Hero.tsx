import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "VIBE CODER | СОЗДАТЕЛЬ | МЕЧТАТЕЛЬ";
  
  // Pointing to the user's uploaded photo
  const photoUrl = "/photo.jpg";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100); // Typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col items-center text-center space-y-8 animate-fade-in-up">
      {/* Avatar Container with Neon Glow */}
      <div className="relative group cursor-pointer">
        {/* Outer Glow Ring */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-neon via-purple-500 to-neonLight rounded-full opacity-70 blur-md group-hover:opacity-100 group-hover:blur-lg transition duration-500 animate-glow"></div>
        
        {/* Image Frame */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-black bg-black shadow-[0_0_40px_rgba(168,85,247,0.4)]">
          <img 
            src={photoUrl} 
            alt="Andrew" 
            className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
            onError={(e) => {
              // Fallback if photo.jpg is missing yet
              e.currentTarget.src = "/avatar.svg"; 
            }}
          />
          
          {/* Shine effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-5xl md:text-8xl font-mono font-bold tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]">
          ANDREW
        </h1>
        <div className="h-8 flex justify-center items-center">
            <p className="text-neonLight font-mono text-sm md:text-lg tracking-widest border-r-2 border-neon animate-pulse inline-block pr-2">
            {text}
            </p>
        </div>
      </div>

      <p className="max-w-lg text-gray-400 text-sm md:text-base leading-relaxed font-light">
        Создаю IT-продукты с помощью ИИ. <br />
        <span className="text-white font-semibold drop-shadow-md">
          Нейросети пишут код. <br className="block md:hidden" /> 100% души.
        </span>
      </p>
    </section>
  );
};