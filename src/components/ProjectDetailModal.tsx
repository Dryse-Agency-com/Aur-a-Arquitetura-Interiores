import React, { useState, useEffect } from 'react';
import { Project } from '../data/projects';
import { ArrowLeft, ArrowRight, X, Maximize2, ShieldCheck, Share2 } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  allProjects: Project[];
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects
}) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  // Lock body scroll when project modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  // Handle keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex !== null && project) {
        if (e.key === 'Escape') setLightboxIndex(null);
        if (e.key === 'ArrowRight') {
          setLightboxIndex((prev) => ((prev! + 1) % project.gallery.length));
        }
        if (e.key === 'ArrowLeft') {
          setLightboxIndex((prev) => ((prev! - 1 + project.gallery.length) % project.gallery.length));
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, project, onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#FAF8F5] overflow-y-auto animate-in fade-in duration-300">
      {/* Top Floating Action Bar */}
      <div className="sticky top-0 z-30 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EDE7DD] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onClose}
            className="group flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-[#1A1A19] hover:text-[#C5A059] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Voltar ao Portfólio</span>
          </button>

          <div className="flex items-center space-x-6 text-xs uppercase tracking-widest text-[#8C887B]">
            <span className="hidden sm:inline font-mono">{project.index}</span>
            <span className="hidden md:inline font-medium text-[#1A1A19]">{project.name}</span>
            <button
              onClick={handleShare}
              className="flex items-center space-x-1.5 text-xs uppercase tracking-widest hover:text-[#1A1A19] transition-colors"
              title="Copiar link"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{copied ? 'Copiado!' : 'Compartilhar'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 text-[#1A1A19] hover:text-[#C5A059] transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Project Hero Section */}
      <section className="relative w-full aspect-[16/9] md:aspect-[21/9] max-h-[80vh] bg-[#1A1A19] overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.name}
          className="w-full h-full object-cover object-center filter brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A19]/80 via-transparent to-[#1A1A19]/20" />

        <div className="absolute bottom-8 left-0 right-0 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto text-white">
          <div className="flex items-center space-x-3 mb-2 text-xs uppercase tracking-[0.25em] text-[#C5A059]">
            <span>{project.category}</span>
            <span>&bull;</span>
            <span>{project.year}</span>
            <span>&bull;</span>
            <span>{project.location}</span>
          </div>
          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-tight">
            {project.name}
          </h1>
        </div>
      </section>

      {/* Project Editorial Content & Specs */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Narrative & Concept */}
          <div className="lg:col-span-8">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-6 h-[1.5px] bg-[#C5A059]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
                CONCEITO & DIRETRIZES
              </span>
            </div>

            <p className="font-serif-luxury text-2xl sm:text-3xl text-[#1A1A19] font-light leading-snug mb-8">
              {project.tagline}
            </p>

            <div className="space-y-6 text-base text-[#1A1A19]/80 font-light leading-relaxed">
              <p>{project.concept}</p>
            </div>

            {/* Materials Palette Highlight */}
            <div className="mt-12 pt-8 border-t border-[#EDE7DD]">
              <span className="text-xs uppercase tracking-[0.22em] text-[#8C887B] block mb-4">
                MATÉRIA & ACABAMENTOS SELECIONADOS
              </span>
              <div className="flex flex-wrap gap-2.5">
                {project.materials.map((mat, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-[#EDE7DD]/60 rounded-full text-xs text-[#1A1A19] font-medium tracking-wide"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project Technical Specifications */}
          <div className="lg:col-span-4 bg-[#EDE7DD]/40 p-8 rounded-sm border border-[#EDE7DD]">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium block mb-6">
              FICHA TÉCNICA
            </span>

            <dl className="space-y-5 text-sm">
              {project.specs.map((item, idx) => (
                <div key={idx} className="pb-4 border-b border-[#EDE7DD] last:border-b-0">
                  <dt className="text-[11px] uppercase tracking-wider text-[#8C887B] mb-1">
                    {item.label}
                  </dt>
                  <dd className="font-medium text-[#1A1A19]">{item.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 pt-6 border-t border-[#EDE7DD] flex items-center space-x-2 text-xs text-[#8C887B]">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>Projeto autoral exclusivo — Auréa Arquitetura</span>
            </div>
          </div>
        </div>

        {/* Editorial Photo Gallery with Lightbox Feature */}
        <div className="mt-24 pt-16 border-t border-[#EDE7DD]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium block mb-2">
                EDITORIAL FOTOGRÁFICO
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#1A1A19] font-light">
                Percepção espacial & detalhes
              </h2>
            </div>
            <p className="text-xs text-[#8C887B] uppercase tracking-wider mt-2 sm:mt-0">
              Clique em qualquer imagem para expandir
            </p>
          </div>

          {/* Dynamic Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {project.gallery.map((img, idx) => {
              // Asymmetric layout logic for magazine feel
              const colSpan =
                idx === 0
                  ? 'md:col-span-12'
                  : idx === 1
                  ? 'md:col-span-7'
                  : idx === 2
                  ? 'md:col-span-5'
                  : idx === 3
                  ? 'md:col-span-6'
                  : 'md:col-span-6';

              return (
                <div
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  className={`${colSpan} group cursor-pointer relative overflow-hidden bg-[#EDE7DD] rounded-sm shadow-sm`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={img.url}
                      alt={img.caption}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="p-3 bg-white/90 rounded-full text-[#1A1A19] shadow-lg">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-[#FAF8F5] border-t border-[#EDE7DD] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-medium block mb-0.5">
                        {img.tag}
                      </span>
                      <p className="text-xs text-[#1A1A19]/80 font-light line-clamp-1">
                        {img.caption}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-[#8C887B] ml-4">
                      {idx + 1} / {project.gallery.length}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Project Navigation (Previous / Next) */}
        <div className="mt-28 pt-12 border-t border-[#EDE7DD] flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            onClick={() => onSelectProject(prevProject)}
            className="group flex items-center space-x-4 text-left p-4 rounded-lg hover:bg-[#EDE7DD]/40 transition-colors w-full sm:w-auto"
          >
            <div className="w-10 h-10 rounded-full border border-[#EDE7DD] flex items-center justify-center text-[#1A1A19] group-hover:border-[#C5A059] group-hover:text-[#C5A059] transition-colors shrink-0">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C887B] block">
                Projeto Anterior
              </span>
              <span className="font-serif-luxury text-lg text-[#1A1A19] font-medium">
                {prevProject.name}
              </span>
            </div>
          </button>

          <button
            onClick={() => onSelectProject(nextProject)}
            className="group flex items-center space-x-4 text-right p-4 rounded-lg hover:bg-[#EDE7DD]/40 transition-colors w-full sm:w-auto justify-end"
          >
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C887B] block">
                Próximo Projeto
              </span>
              <span className="font-serif-luxury text-lg text-[#1A1A19] font-medium">
                {nextProject.name}
              </span>
            </div>
            <div className="w-10 h-10 rounded-full border border-[#EDE7DD] flex items-center justify-center text-[#1A1A19] group-hover:border-[#C5A059] group-hover:text-[#C5A059] transition-colors shrink-0">
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </button>
        </div>
      </div>

      {/* Accessible Fullscreen Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-60 bg-[#1A1A19]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Lightbox Header */}
          <div className="flex items-center justify-between text-white pb-4 border-b border-white/10">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C5A059]">
                {project.name} &bull; {project.gallery[lightboxIndex].tag}
              </span>
              <p className="text-sm text-white/80 font-light mt-0.5">
                {project.gallery[lightboxIndex].caption}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-xs font-mono text-white/60">
                {lightboxIndex + 1} / {project.gallery.length}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2 text-white hover:text-[#C5A059] transition-colors"
                aria-label="Fechar Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Lightbox Main Image & Navigation Arrows */}
          <div className="relative flex-1 flex items-center justify-center py-4">
            <button
              onClick={() =>
                setLightboxIndex(
                  (prev) => (prev! - 1 + project.gallery.length) % project.gallery.length
                )
              }
              className="absolute left-2 sm:left-6 p-3 rounded-full bg-white/10 hover:bg-[#C5A059] text-white transition-colors"
              aria-label="Foto anterior"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            <img
              src={project.gallery[lightboxIndex].url}
              alt={project.gallery[lightboxIndex].caption}
              className="max-h-[80vh] max-w-full object-contain rounded shadow-2xl"
            />

            <button
              onClick={() =>
                setLightboxIndex((prev) => (prev! + 1) % project.gallery.length)
              }
              className="absolute right-2 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-[#C5A059] text-white transition-colors"
              aria-label="Próxima foto"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Footer Keyboard Hints */}
          <div className="text-center text-[11px] uppercase tracking-widest text-white/50 pt-2">
            Navegue com as setas do teclado &bull; Pressione ESC para fechar
          </div>
        </div>
      )}
    </div>
  );
};
