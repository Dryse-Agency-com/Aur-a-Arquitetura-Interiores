import React, { useState } from 'react';
import { Project, PROJECTS } from '../data/projects';
import { ArrowUpRight, Filter } from 'lucide-react';
import { useInView } from '../hooks/useScroll';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [selectedFilter, setSelectedFilter] = useState<'Todos' | 'Residencial' | 'Interiores' | 'Comercial'>('Todos');
  const { ref, isInView } = useInView({ threshold: 0.08 });

  const filteredProjects =
    selectedFilter === 'Todos'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedFilter);

  return (
    <section id="projetos" ref={ref} className="relative py-28 sm:py-36 bg-[#FAF8F5] overflow-hidden">
      {/* Editorial Decorative Background Label */}
      <div className="absolute top-10 left-8 text-[120px] font-serif-luxury font-light text-[#EDE7DD]/35 select-none pointer-events-none -z-0 leading-none">
        WORKS
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#EDE7DD]">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1.5px] bg-[#C5A059]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
                PORTFÓLIO / PROJETOS
              </span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-light text-[#1A1A19] leading-[1.1] mb-4">
              Uma arquitetura. <br />
              <span className="font-normal text-[#B8934A]">Infinitas maneiras de viver.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#1A1A19]/70 font-light leading-relaxed max-w-xl">
              Projetos conceituais que exploram a relação entre espaço, matéria, luz e identidade. Cada proposta é uma investigação autoral do habitar contemporâneo.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-8 md:mt-0 flex flex-wrap items-center gap-2">
            <div className="flex items-center space-x-1 mr-2 text-xs uppercase tracking-widest text-[#8C887B]">
              <Filter className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="hidden sm:inline">Filtrar:</span>
            </div>
            {(['Todos', 'Residencial', 'Interiores', 'Comercial'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.16em] transition-all duration-300 ${
                  selectedFilter === cat
                    ? 'bg-[#1A1A19] text-[#FAF8F5]'
                    : 'bg-[#EDE7DD]/60 text-[#1A1A19]/70 hover:bg-[#EDE7DD] hover:text-[#1A1A19]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Asymmetric Gallery Layout */}
        <div className="space-y-16 lg:space-y-24">
          {/* Row 1: Project 01 (Large Landscape Hero Card) */}
          {filteredProjects.find((p) => p.id === '01') && (
            <ProjectCardHorizontal
              project={filteredProjects.find((p) => p.id === '01')!}
              onSelect={onSelectProject}
              isInView={isInView}
            />
          )}

          {/* Row 2: Two Columns Asymmetric - Project 02 (Vertical Framing) & Project 03 (Panoramic Balanced) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {filteredProjects.find((p) => p.id === '02') && (
              <div className="lg:col-span-5">
                <ProjectCardVertical
                  project={filteredProjects.find((p) => p.id === '02')!}
                  onSelect={onSelectProject}
                  isInView={isInView}
                  delay="100ms"
                />
              </div>
            )}

            {filteredProjects.find((p) => p.id === '03') && (
              <div className="lg:col-span-7 lg:pt-12">
                <ProjectCardStandard
                  project={filteredProjects.find((p) => p.id === '03')!}
                  onSelect={onSelectProject}
                  isInView={isInView}
                  delay="250ms"
                />
              </div>
            )}
          </div>

          {/* Row 3: Alternating Balanced Grid for 04, 05, 06 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 pt-4">
            {filteredProjects
              .filter((p) => ['04', '05', '06'].includes(p.id))
              .map((project, idx) => (
                <ProjectCardStandard
                  key={project.id}
                  project={project}
                  onSelect={onSelectProject}
                  isInView={isInView}
                  delay={`${(idx + 1) * 150}ms`}
                />
              ))}
          </div>
        </div>

        {/* Portfólio Bottom Note */}
        <div className="mt-20 pt-8 border-t border-[#EDE7DD] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C887B] tracking-wider">
          <span>AURÉA ARQUITETURA &bull; PORTFÓLIO CONCEITUAL 2023 — 2025</span>
          <span className="mt-2 sm:mt-0 font-light">Todas as imagens representam diretrizes estéticas autorais do estúdio.</span>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// CARD COMPONENT 1: Horizontal Panoramic Card (Project 01)
// ==========================================
interface CardProps {
  project: Project;
  onSelect: (p: Project) => void;
  isInView: boolean;
  delay?: string;
}

const ProjectCardHorizontal: React.FC<CardProps> = ({ project, onSelect, isInView, delay = '0ms' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      onClick={() => onSelect(project)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer block"
      style={{ transitionDelay: delay }}
    >
      <div className="relative overflow-hidden aspect-[16/9] md:aspect-[21/9] bg-[#EDE7DD] rounded-sm shadow-lg mb-6">
        {/* Curtains reveal mask */}
        <div
          className={`absolute inset-0 bg-[#EDE7DD] z-10 transition-transform duration-1000 ease-out origin-left ${
            isInView ? 'translate-x-full' : 'translate-x-0'
          }`}
        />

        {/* Project Image with Subtle Architectural Zoom */}
        <img
          src={project.heroImage}
          alt={project.name}
          className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
            isHovered ? 'scale-[1.035]' : 'scale-100'
          }`}
        />

        {/* Subtle Dark Gradient Overlay for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A19]/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

        {/* Project Index Overlay on Image */}
        <div className="absolute top-6 left-6 text-xs uppercase tracking-[0.25em] text-white/90 font-mono bg-[#1A1A19]/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
          {project.index}
        </div>

        {/* Category Pill */}
        <div className="absolute top-6 right-6 text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium bg-[#1A1A19]/80 backdrop-blur-sm px-4 py-1.5 rounded-full">
          {project.category} &bull; {project.year}
        </div>

        {/* Hover Floating Action */}
        <div
          className={`absolute bottom-6 right-6 inline-flex items-center space-x-2 bg-[#FAF8F5] text-[#1A1A19] px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] font-medium shadow-xl transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <span>Explorar Projeto</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Editorial Card Footer */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between pt-2">
        <div>
          <div className="flex items-center space-x-3 mb-1">
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#1A1A19] font-light group-hover:text-[#B8934A] transition-colors">
              {project.name}
            </h3>
            <span className="text-xs text-[#8C887B] tracking-widest uppercase">&bull; {project.location}</span>
          </div>
          <p className="text-sm text-[#1A1A19]/70 font-light max-w-xl">
            {project.tagline}
          </p>
        </div>

        {/* Decorative dynamic line */}
        <div className="mt-4 md:mt-0 flex items-center space-x-3 text-xs uppercase tracking-[0.18em] text-[#1A1A19] group-hover:text-[#C5A059] font-medium">
          <span className="relative pb-0.5">
            Explorar Projeto
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
          </span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </article>
  );
};

// ==========================================
// CARD COMPONENT 2: Vertical Framing Card (Project 02)
// ==========================================
const ProjectCardVertical: React.FC<CardProps> = ({ project, onSelect, isInView, delay = '0ms' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      onClick={() => onSelect(project)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer block"
      style={{ transitionDelay: delay }}
    >
      <div className="relative overflow-hidden aspect-[4/5] bg-[#EDE7DD] rounded-sm shadow-md mb-6">
        <div
          className={`absolute inset-0 bg-[#EDE7DD] z-10 transition-transform duration-1000 ease-out origin-bottom ${
            isInView ? '-translate-y-full' : 'translate-y-0'
          }`}
        />

        <img
          src={project.heroImage}
          alt={project.name}
          className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
            isHovered ? 'scale-[1.035]' : 'scale-100'
          }`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A19]/50 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

        <div className="absolute top-5 left-5 text-xs uppercase tracking-[0.25em] text-white/90 font-mono bg-[#1A1A19]/60 backdrop-blur-sm px-3 py-1 rounded-full">
          {project.index}
        </div>

        <div className="absolute top-5 right-5 text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium bg-[#1A1A19]/80 backdrop-blur-sm px-3 py-1 rounded-full">
          {project.category}
        </div>

        {/* Hover action button */}
        <div
          className={`absolute bottom-5 right-5 inline-flex items-center space-x-2 bg-[#FAF8F5] text-[#1A1A19] px-4 py-2 rounded-full text-xs uppercase tracking-[0.18em] font-medium shadow-lg transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <span>Explorar</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>

      <div className="flex items-start justify-between">
        <div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C887B] block mb-1">
            {project.location} &bull; {project.year}
          </span>
          <h3 className="font-serif-luxury text-2xl text-[#1A1A19] font-light group-hover:text-[#B8934A] transition-colors mb-2">
            {project.name}
          </h3>
          <p className="text-xs text-[#1A1A19]/70 font-light line-clamp-2">
            {project.tagline}
          </p>
        </div>
        <ArrowUpRight className="w-5 h-5 text-[#8C887B] group-hover:text-[#C5A059] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0 ml-4 mt-2" />
      </div>
    </article>
  );
};

// ==========================================
// CARD COMPONENT 3: Standard Editorial Card (Projects 03, 04, 05, 06)
// ==========================================
const ProjectCardStandard: React.FC<CardProps> = ({ project, onSelect, isInView, delay = '0ms' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      onClick={() => onSelect(project)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer block"
      style={{ transitionDelay: delay }}
    >
      <div className="relative overflow-hidden aspect-[16/10] bg-[#EDE7DD] rounded-sm shadow-md mb-5">
        <div
          className={`absolute inset-0 bg-[#EDE7DD] z-10 transition-transform duration-1000 ease-out origin-top ${
            isInView ? 'translate-y-full' : 'translate-y-0'
          }`}
        />

        <img
          src={project.heroImage}
          alt={project.name}
          className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
            isHovered ? 'scale-[1.035]' : 'scale-100'
          }`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A19]/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

        <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.25em] text-white/90 font-mono bg-[#1A1A19]/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
          {project.index}
        </div>

        <div className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-medium bg-[#1A1A19]/80 backdrop-blur-sm px-3 py-1 rounded-full">
          {project.category}
        </div>

        {/* Hover trigger label */}
        <div
          className={`absolute bottom-4 right-4 inline-flex items-center space-x-1.5 bg-[#FAF8F5] text-[#1A1A19] px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.18em] font-medium shadow-md transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <span>Ver projeto</span>
          <ArrowUpRight className="w-3 h-3" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-[#8C887B] mb-1">
          <span>{project.location}</span>
          <span>{project.year}</span>
        </div>
        <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#1A1A19] font-light group-hover:text-[#B8934A] transition-colors mb-1.5">
          {project.name}
        </h3>
        <p className="text-xs text-[#1A1A19]/70 font-light line-clamp-2 leading-relaxed">
          {project.tagline}
        </p>

        {/* Subtle decorative line below title */}
        <div className="mt-3 w-8 h-[1px] bg-[#EDE7DD] group-hover:w-full group-hover:bg-[#C5A059] transition-all duration-500" />
      </div>
    </article>
  );
};
