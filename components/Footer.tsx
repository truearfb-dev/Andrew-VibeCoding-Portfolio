import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 w-full py-8 text-center mt-auto border-t border-white/5 bg-black/20 backdrop-blur-sm">
      <p className="font-mono text-xs text-gray-600 tracking-widest">
        &copy; 2025 ANDREW <span className="text-neon">VIBECODING</span>
      </p>
    </footer>
  );
};