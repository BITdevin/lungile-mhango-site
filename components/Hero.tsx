
import React from 'react';
import AudioVisualizer from './AudioVisualizer';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white p-6 overflow-hidden">
      <div className="absolute inset-0 bg-charcoal z-0">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Vibrant, professional portrait of Lungile Mhango"
          className="w-full h-full object-cover opacity-30"
          loading="eager"
        />
      </div>
      
      <div className="relative z-10 flex flex-col items-center animate-fade-in-up">
        <h1 className="text-5xl md:text-8xl font-extrabold text-white drop-shadow-2xl tracking-tight">
          Lungile <span className="text-accent">Mhango</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-medium text-white/90 max-w-3xl mx-auto drop-shadow-lg">
          Radio Host | MC | DJ | Motivational Speaker | Entrepreneur
        </p>
        <a href="#booking" className="mt-10 px-8 py-4 bg-accent text-charcoal font-bold rounded-full hover:bg-accent-darker transition-all duration-300 transform hover:scale-105 shadow-xl text-lg">
            Book Me For Your Event
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 z-20">
        <AudioVisualizer />
      </div>
    </section>
  );
};

export default Hero;
