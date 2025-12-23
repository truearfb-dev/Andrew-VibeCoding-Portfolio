import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "VIBE CODER | СОЗДАТЕЛЬ | МЕЧТАТЕЛЬ";
  
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
    <section className="flex flex-col items-center text-center space-y-6 animate-fade-in-up">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/20 bg-black">
          <img 
            src="./photo.jpg" 
            alt="Andrew" 
            className="w-full h-full object-cover opacity-90 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        <h1 className="text-5xl md:text-7xl font-mono font-bold tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          ANDREW
        </h1>
        <div className="h-8"> {/* Fixed height to prevent layout shift */}
            <p className="text-neonLight font-mono text-sm md:text-lg tracking-widest border-r-2 border-neon animate-pulse inline-block pr-1">
            {text}
            </p>
        </div>
      </div>

      <p className="max-w-md text-gray-400 text-sm md:text-base leading-relaxed">
        Создаю IT-продукты с помощью ИИ. <br className="hidden md:block" />
        <span className="text-white font-semibold">0 строчек кода вручную. 100% души.</span>
      </p>
    </section>
  );
};