import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
  onMeetArchitect: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onMeetArchitect }) => {
  const [mounted, setMounted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Staged entrance animation trigger
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#1A1A19] text-[#FAF8F5]">
      {/* Background Image Container with Cinematic Scale & Reveal Curtain */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className={`w-full h-full transition-transform duration-[1400ms] ease-out ${
            mounted ? 'scale-100' : 'scale-108'
          }`}
          style={{
            transform: mounted ? 'scale(1.0)' : 'scale(1.08)',
            transition: 'transform 1.4s cubic-bezier(0.22, 1, 0.36, 1), filter 1.2s ease-out',
          }}
        >
          <img
            src="/images/hero-horizonte.jpg"
            alt="Residência contemporânea brasileira assinada pela Auréa Arquitetura"
            className={`w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05] transition-opacity duration-1000 ${
              imageLoaded ? 'opacity-100' : 'opacity-80'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        {/* Sophisticated Architectural Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A19]/90 via-[#1A1A19]/35 to-[#1A1A19]/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A19]/70 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Top spacing placeholder for fixed header */}
      <div className="h-28 sm:h-36 relative z-10" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pb-16 pt-8">
        <div className="max-w-3xl">
          {/* Eyebrow / Small header text */}
          <div
            className={`flex items-center space-x-3 mb-6 transition-all duration-700 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="w-8 h-[1px] bg-[#C5A059]" />
            <span className="text-[11px] sm:text-xs tracking-[0.28em] uppercase text-[#C5A059] font-medium">
              AURÉA — ARQUITETURA & INTERIORES
            </span>
          </div>

          {/* Main Title - line by line reveal with vertical offset & opacity */}
          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.06] text-white mb-8">
            <span
              className={`block overflow-hidden transition-all duration-1000 ease-out delay-150 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Espaços para viver
            </span>
            <span
              className={`block overflow-hidden font-normal text-[#EDE7DD] transition-all duration-1000 ease-out delay-300 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              o essencial.
            </span>
          </h1>

          {/* Description */}
          <p
            className={`text-base sm:text-lg md:text-xl text-[#FAF8F5]/85 font-light leading-relaxed max-w-2xl mb-10 transition-all duration-1000 ease-out delay-500 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Arquitetura autoral e interiores que traduzem histórias, acolhem experiências e valorizam o que realmente importa.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap items-center gap-4 transition-all duration-1000 ease-out delay-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Primary CTA */}
            <button
              onClick={onExploreProjects}
              className="group relative inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-[#FAF8F5] text-[#1A1A19] font-medium text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-[#C5A059] hover:text-white transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Explorar projetos</span>
              <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Secondary CTA */}
            <button
              onClick={onMeetArchitect}
              className="group inline-flex items-center space-x-2 px-7 py-4 rounded-full border border-white/30 text-white hover:border-[#C5A059] hover:text-[#C5A059] text-xs uppercase tracking-[0.18em] transition-all duration-300 backdrop-blur-sm"
            >
              <span>Conhecer a arquiteta</span>
            </button>
          </div>
        </div>

        {/* Project indicator badge on bottom right */}
        <div
          className={`hidden lg:flex items-center justify-between mt-12 pt-8 border-t border-white/15 transition-all duration-1000 delay-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center space-x-8 text-xs tracking-[0.2em] text-[#FAF8F5]/60 uppercase">
            <span className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span className="text-white font-medium">01</span>
              <span>/ 06</span>
            </span>
            <span className="hidden sm:inline">PROJETO DESTAQUE: RESIDÊNCIA HORIZONTE — BELÉM, PA</span>
            <span>AUTORAL & BIOCLIMÁTICO</span>
          </div>

          {/* Discreet Golden line & scroll indicator */}
          <div className="flex items-center space-x-4">
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-[#C5A059]" />
            <a
              href="#arquiteta"
              className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#C5A059] hover:text-white transition-colors"
            >
              <span>Rolar</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative vertical golden thread line */}
      <div
        className={`absolute bottom-0 left-12 w-[1px] h-16 bg-[#C5A059] hidden lg:block transition-all duration-1000 delay-1000 origin-bottom ${
          mounted ? 'scale-y-100 opacity-60' : 'scale-y-0 opacity-0'
        }`}
      />
    </section>
  );
};
