import React from 'react';
import { useInView } from '../hooks/useScroll';
import { ArrowUpRight, Award, Compass, Sparkles } from 'lucide-react';

interface ArchitectSectionProps {
  onExploreProjects: () => void;
}

export const ArchitectSection: React.FC<ArchitectSectionProps> = ({ onExploreProjects }) => {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <section id="arquiteta" ref={ref} className="relative py-24 sm:py-32 bg-[#FAF8F5] overflow-hidden">
      {/* Background Architectural Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#EDE7DD]" />
      <div className="absolute top-12 right-12 text-[140px] font-serif-luxury font-light text-[#EDE7DD]/40 select-none pointer-events-none -z-0 leading-none">
        01
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Large Portrait (50% composition) */}
          <div className="lg:col-span-6 relative">
            <div className="relative group">
              {/* Sliding reveal mask & Image container */}
              <div className="relative overflow-hidden aspect-[4/5] bg-[#EDE7DD] shadow-2xl rounded-sm">
                {/* Temporary beige curtain that slides away on entrance */}
                <div
                  className={`absolute inset-0 bg-[#EDE7DD] z-20 transition-transform duration-1000 ease-out origin-top ${
                    isInView ? '-translate-y-full' : 'translate-y-0'
                  }`}
                  style={{ transitionDelay: '200ms' }}
                />

                {/* Architect Editorial Photo */}
                <img
                  src="/images/isadora-vale.jpg"
                  alt="Isadora Vale — Fundadora e Diretora Criativa da Auréa Arquitetura & Interiores"
                  className={`w-full h-full object-cover object-top transition-all duration-[1200ms] ease-out ${
                    isInView ? 'scale-100 filter-none' : 'scale-105 filter brightness-95'
                  }`}
                />

                {/* Subtle Inner Frame Accent */}
                <div className="absolute inset-4 border border-white/20 pointer-events-none" />
              </div>

              {/* Delicate Gold Vertical Line next to portrait */}
              <div
                className={`absolute -right-4 top-8 bottom-8 w-[1.5px] bg-gradient-to-b from-[#C5A059] via-[#C5A059]/40 to-transparent hidden sm:block transition-all duration-1000 ${
                  isInView ? 'scale-y-100 opacity-80' : 'scale-y-0 opacity-0'
                }`}
                style={{ transformOrigin: 'top', transitionDelay: '500ms' }}
              />

              {/* Metadata tag at portrait bottom corner */}
              <div
                className={`absolute -bottom-6 -left-4 sm:left-6 bg-[#1A1A19] text-[#FAF8F5] p-5 shadow-xl max-w-xs transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '700ms' }}
              >
                <div className="flex items-center space-x-2 text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-semibold mb-1">
                  <Sparkles className="w-3 h-3" />
                  <span>01 / ESTÚDIO AUTORAL</span>
                </div>
                <p className="text-xs text-[#FAF8F5]/80 font-light leading-snug">
                  Direção criativa com foco em arquitetura residencial contemporânea e materiais naturais.
                </p>
                <div className="mt-2 text-[9px] uppercase tracking-widest text-[#8C887B]">
                  Belém, PA — Brasil
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Typographic Signature */}
          <div className="lg:col-span-6 flex flex-col justify-center pt-8 lg:pt-0">
            {/* Eyebrow */}
            <div
              className={`flex items-center space-x-3 mb-4 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <span className="w-6 h-[1.5px] bg-[#C5A059]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
                A ARQUITETA / 01
              </span>
            </div>

            {/* Editorial Title */}
            <h2
              className={`font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light text-[#1A1A19] leading-[1.15] mb-8 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '350ms' }}
            >
              Arquitetura começa com a{' '}
              <span className="font-normal text-[#B8934A]">sensibilidade</span> de compreender.
            </h2>

            {/* Biography Paragraphs */}
            <div
              className={`space-y-5 text-sm sm:text-base text-[#1A1A19]/80 font-light leading-relaxed mb-8 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <p>
                Para <strong className="font-medium text-[#1A1A19]">Isadora Vale</strong>, projetar não se resume à criação de ambientes visualmente expressivos. É compreender histórias, interpretar necessidades e encontrar equilíbrio entre estética, funcionalidade e identidade.
              </p>
              <p>
                À frente da direção criativa da <strong className="font-medium text-[#1A1A19]">Auréa</strong>, sua abordagem combina linhas contemporâneas, materiais naturais e uma atenção especial à forma como a arquitetura influencia a experiência cotidiana e o bem-viver.
              </p>
            </div>

            {/* Featured Quote Card */}
            <div
              className={`relative pl-6 py-4 border-l-2 border-[#C5A059] bg-[#EDE7DD]/40 rounded-r-lg mb-8 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '650ms' }}
            >
              <p className="font-serif-luxury text-lg sm:text-xl text-[#1A1A19] font-normal leading-relaxed">
                “Um espaço verdadeiramente especial não precisa impressionar. Precisa fazer sentido para quem o vive.”
              </p>
            </div>

            {/* Typographic Signature & Role */}
            <div
              className={`flex flex-col sm:flex-row sm:items-center sm:justify-between pt-6 border-t border-[#EDE7DD] gap-6 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <div>
                <div className="font-serif-luxury text-xl sm:text-2xl tracking-[0.16em] uppercase text-[#1A1A19] font-medium">
                  Isadora Vale
                </div>
                <div className="text-[10px] uppercase tracking-[0.24em] text-[#8C887B] font-medium mt-0.5">
                  DIREÇÃO CRIATIVA — AURÉA
                </div>
              </div>

              <button
                onClick={onExploreProjects}
                className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] text-[#1A1A19] hover:text-[#C5A059] transition-colors py-2 font-medium"
              >
                <span>Ver projetos assinados</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Studio Practice */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-16 border-t border-[#EDE7DD] transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '950ms' }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-[#EDE7DD] flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-lg text-[#1A1A19] font-medium mb-1">
                Arquitetura Bioclimática
              </h3>
              <p className="text-xs text-[#8C887B] leading-relaxed">
                Ventilação cruzada, iluminação natural calculada e integração sensorial com o clima e a natureza amazônica.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-[#EDE7DD] flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-lg text-[#1A1A19] font-medium mb-1">
                Matéria em Estado Puro
              </h3>
              <p className="text-xs text-[#8C887B] leading-relaxed">
                Madeiras de manejo sustentável, concreto aparente, pedras brutas e tecidos orgânicos que envelhecem com nobreza.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-[#EDE7DD] flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-lg text-[#1A1A19] font-medium mb-1">
                Projetos 100% Autorais
              </h3>
              <p className="text-xs text-[#8C887B] leading-relaxed">
                Cada residência e espaço comercial é desenhado de forma única, sem réplicas ou fórmulas genéricas de tendências.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
