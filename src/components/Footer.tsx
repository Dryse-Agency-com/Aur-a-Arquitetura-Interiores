import React from 'react';
// Icons with inline SVG for standard social links

interface FooterProps {
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#141413] text-[#FAF8F5] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-serif-luxury text-3xl tracking-[0.2em] font-light uppercase text-white">
                Auréa
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            </div>
            <p className="text-[10px] uppercase tracking-[0.26em] text-[#C5A059]">
              ARQUITETURA & INTERIORES &bull; ISADORA VALE
            </p>
            <p className="text-xs text-[#8C887B] font-light max-w-sm leading-relaxed pt-2">
              Estúdio de arquitetura contemporânea e design de interiores sediado em Belém, Pará. Projetos autorais concebidos para dialogar com o essencial.
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#FAF8F5]/60 font-semibold block mb-4">
              Navegação
            </span>
            <ul className="space-y-2.5 text-xs text-[#FAF8F5]/80 font-light">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-[#C5A059] transition-colors">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('arquiteta')} className="hover:text-[#C5A059] transition-colors">
                  A Arquiteta (Isadora Vale)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('filosofia')} className="hover:text-[#C5A059] transition-colors">
                  Essência & Filosofia
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projetos')} className="hover:text-[#C5A059] transition-colors">
                  Projetos Selecionados
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('servicos')} className="hover:text-[#C5A059] transition-colors">
                  Serviços do Estúdio
                </button>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#FAF8F5]/60 font-semibold block mb-4">
              Contato & Conexão
            </span>
            <p className="text-xs text-[#FAF8F5]/80 font-light">
              contato@aurea.arq.br
            </p>
            <p className="text-xs text-[#FAF8F5]/80 font-light">
              Belém, PA — Brasil (Projetos em âmbito nacional)
            </p>

            <div className="pt-4 flex items-center space-x-4 text-white/70">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C5A059] hover:text-[#1A1A19] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C5A059] hover:text-[#1A1A19] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8C887B] tracking-wider gap-4">
          <p>
            &copy; {new Date().getFullYear()} Auréa Arquitetura & Interiores. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-6 text-[10px] uppercase">
            <span>Direção Criativa: Isadora Vale</span>
            <span>&bull;</span>
            <span>Ambiente Conceitual Demonstrativo</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
