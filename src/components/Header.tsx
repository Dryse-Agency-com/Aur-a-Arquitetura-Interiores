import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScroll';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  onOpenProject?: (slug: string) => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      {/* Scroll Reading Progress Bar - discrete & elegant */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-[#C5A059]/20"
        aria-hidden="true"
      >
        <div
          className="h-full bg-[#C5A059] transition-all duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#FAF8F5]/90 backdrop-blur-md py-4 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-[#EDE7DD]'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo / Brand */}
          <button
            onClick={() => handleNavClick('hero')}
            className="group flex flex-col items-start text-left focus:outline-none"
            aria-label="Auréa Arquitetura - Início"
          >
            <div className="flex items-center space-x-2">
              <span className="font-serif-luxury text-2xl sm:text-3xl tracking-[0.2em] font-light uppercase text-[#1A1A19]">
                Auréa
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] transition-transform duration-300 group-hover:scale-150" />
            </div>
            <span className="text-[9px] uppercase tracking-[0.28em] text-[#8C887B] font-medium -mt-1 group-hover:text-[#1A1A19] transition-colors">
              Arquitetura & Interiores
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-9 text-xs tracking-[0.18em] uppercase font-medium text-[#1A1A19]/80">
            <button
              onClick={() => handleNavClick('hero')}
              className="relative py-1 hover:text-[#1A1A19] transition-colors group"
            >
              Início
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => handleNavClick('arquiteta')}
              className="relative py-1 hover:text-[#1A1A19] transition-colors group"
            >
              A Arquiteta
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => handleNavClick('filosofia')}
              className="relative py-1 hover:text-[#1A1A19] transition-colors group"
            >
              Essência
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => handleNavClick('projetos')}
              className="relative py-1 hover:text-[#1A1A19] transition-colors group"
            >
              Projetos
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => handleNavClick('servicos')}
              className="relative py-1 hover:text-[#1A1A19] transition-colors group"
            >
              Serviços
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => handleNavClick('contato')}
              className="relative py-1 hover:text-[#1A1A19] transition-colors group"
            >
              Contato
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
            </button>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => handleNavClick('contato')}
              className="group relative inline-flex items-center space-x-2 text-xs uppercase tracking-[0.16em] px-5 py-2.5 rounded-full border border-[#1A1A19]/20 hover:border-[#1A1A19] bg-[#FAF8F5] hover:bg-[#1A1A19] hover:text-[#FAF8F5] transition-all duration-300 overflow-hidden"
            >
              <span>Iniciar Projeto</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1A1A19] focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#FAF8F5] pt-24 px-8 pb-12 flex flex-col justify-between md:hidden animate-in fade-in duration-300">
          <div className="space-y-6 pt-6">
            <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-semibold">
              AURÉA — NAVEGAÇÃO
            </span>
            <div className="flex flex-col space-y-5 text-xl font-serif-luxury tracking-wide text-[#1A1A19]">
              <button
                onClick={() => handleNavClick('hero')}
                className="text-left hover:text-[#C5A059] transition-colors"
              >
                01. Início
              </button>
              <button
                onClick={() => handleNavClick('arquiteta')}
                className="text-left hover:text-[#C5A059] transition-colors"
              >
                02. A Arquiteta (Isadora Vale)
              </button>
              <button
                onClick={() => handleNavClick('filosofia')}
                className="text-left hover:text-[#C5A059] transition-colors"
              >
                03. Nossa Essência
              </button>
              <button
                onClick={() => handleNavClick('projetos')}
                className="text-left hover:text-[#C5A059] transition-colors"
              >
                04. Obras Selecionadas
              </button>
              <button
                onClick={() => handleNavClick('servicos')}
                className="text-left hover:text-[#C5A059] transition-colors"
              >
                05. Do Conceito à Realização
              </button>
              <button
                onClick={() => handleNavClick('contato')}
                className="text-left hover:text-[#C5A059] transition-colors"
              >
                06. Contato & Consultoria
              </button>
            </div>
          </div>

          <div className="pt-8 border-t border-[#EDE7DD] space-y-4">
            <button
              onClick={() => handleNavClick('contato')}
              className="w-full py-3.5 bg-[#1A1A19] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] rounded-full flex items-center justify-center space-x-2"
            >
              <span>Falar sobre seu projeto</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-[#8C887B] text-center tracking-wider">
              Belém, Pará — Atendimento Nacional
            </p>
          </div>
        </div>
      )}
    </>
  );
};
