import React from 'react';
import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { MainProject } from './components/MainProject';
import { SecondaryProjects } from './components/SecondaryProjects';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center overflow-hidden font-sans selection:bg-neon selection:text-white">
      {/* Background Animation Layer */}
      <Background />

      {/* Content Layer - z-index ensures it sits above canvas */}
      <main className="relative z-10 w-full max-w-4xl px-6 py-12 md:py-20 flex flex-col items-center gap-16 md:gap-24">
        <Hero />
        <MainProject />
        <SecondaryProjects />
      </main>

      <Footer />
    </div>
  );
};

export default App;