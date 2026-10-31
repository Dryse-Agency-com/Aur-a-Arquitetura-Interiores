import React from 'react';
import { useInView } from '../hooks/useScroll';

export const PhilosophySection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="filosofia" ref={ref} className="relative py-28 sm:py-36 bg-[#EDE7DD] overflow-hidden text-[#1A1A19]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side: Poetic Architecture Detail Image */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative overflow-hidden aspect-[4/3] rounded-sm shadow-xl bg-[#FAF8F5]">
              <img
                src="/images/philosophy-detail.jpg"
                alt="Encontro de matérias e luz na arquitetura Auréa"
                className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
                  isInView ? 'scale-100' : 'scale-106'
                }`}
              />
              <div className="absolute inset-0 bg-[#1A1A19]/10" />
            </div>

            {/* Editorial Caption Tag */}
            <div className="mt-4 flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#8C887B]">
              <span>MATÉRIA, SOMBRA E PROPORÇÃO</span>
              <span>BELÉM / PA</span>
            </div>
          </div>

          {/* Right Side: Philosophy Statement & 3 Key Words */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
            <div
              className={`flex items-center space-x-3 mb-4 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="w-8 h-[1px] bg-[#C5A059]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
                NOSSA ESSÊNCIA
              </span>
            </div>

            {/* Section Title */}
            <h2
              className={`font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-light text-[#1A1A19] leading-[1.1] mb-6 transition-all duration-700 delay-150 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Projetar é interpretar <br />
              <span className="font-normal text-[#B8934A]">o essencial.</span>
            </h2>

            {/* Paragraph Text */}
            <p
              className={`text-base sm:text-lg text-[#1A1A19]/75 font-light leading-relaxed mb-12 transition-all duration-700 delay-300 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Entre luz, matéria e proporção, encontramos possibilidades para criar espaços que acolhem a vida em suas diferentes formas. Uma arquitetura que não grita por atenção, mas que permanece viva e significativa através do tempo.
            </p>

            {/* Three Keywords - Staged Entrance with horizontal subtle lines */}
            <div className="space-y-6 pt-4 border-t border-[#1A1A19]/15">
              {/* Word 01 */}
              <div
                className={`flex items-center justify-between group py-2 border-b border-[#1A1A19]/10 transition-all duration-700 delay-450 ${
                  isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                }`}
              >
                <div className="flex items-baseline space-x-4">
                  <span className="text-[10px] tracking-[0.25em] text-[#C5A059] font-mono">01</span>
                  <span className="font-serif-luxury text-xl sm:text-2xl tracking-[0.12em] font-medium uppercase text-[#1A1A19]">
                    ESSENCIALIDADE
                  </span>
                </div>
                <span className="text-xs text-[#8C887B] tracking-wider hidden sm:inline">
                  Apenas o que tem razão de existir
                </span>
              </div>

              {/* Word 02 */}
              <div
                className={`flex items-center justify-between group py-2 border-b border-[#1A1A19]/10 transition-all duration-700 delay-600 ${
                  isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                }`}
              >
                <div className="flex items-baseline space-x-4">
                  <span className="text-[10px] tracking-[0.25em] text-[#C5A059] font-mono">02</span>
                  <span className="font-serif-luxury text-xl sm:text-2xl tracking-[0.12em] font-medium uppercase text-[#1A1A19]">
                    SENSIBILIDADE
                  </span>
                </div>
                <span className="text-xs text-[#8C887B] tracking-wider hidden sm:inline">
                  Compreensão humana e acolhimento
                </span>
              </div>

              {/* Word 03 */}
              <div
                className={`flex items-center justify-between group py-2 border-b border-[#1A1A19]/10 transition-all duration-700 delay-750 ${
                  isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                }`}
              >
                <div className="flex items-baseline space-x-4">
                  <span className="text-[10px] tracking-[0.25em] text-[#C5A059] font-mono">03</span>
                  <span className="font-serif-luxury text-xl sm:text-2xl tracking-[0.12em] font-medium uppercase text-[#1A1A19]">
                    ATEMPORALIDADE
                  </span>
                </div>
                <span className="text-xs text-[#8C887B] tracking-wider hidden sm:inline">
                  Resistência aos modismos passageiros
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
