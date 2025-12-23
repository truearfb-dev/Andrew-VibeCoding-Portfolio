import React from 'react';
import { Send } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 w-full py-10 flex flex-col items-center space-y-6 mt-auto border-t border-white/5 bg-black/20 backdrop-blur-sm">
      
      <a 
        href="https://t.me/truear" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group flex items-center space-x-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 hover:scale-105 hover:border-neon/50"
      >
        <span className="text-gray-300 group-hover:text-white font-mono text-sm transition-colors">Связаться в Telegram</span>
        <Send className="w-4 h-4 text-neon group-hover:translate-x-1 transition-transform" />
      </a>

      <p className="font-mono text-xs text-gray-600 tracking-widest">
        &copy; 2025 ANDREW <span className="text-neon">VIBECODING</span>
      </p>
    </footer>
  );
};