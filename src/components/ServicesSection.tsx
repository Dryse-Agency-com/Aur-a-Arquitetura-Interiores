import React from 'react';
import { Home, Compass, Building2, MessageSquare, ArrowUpRight } from 'lucide-react';
import { useInView } from '../hooks/useScroll';

interface ServicesProps {
  onStartProject: () => void;
}

export const ServicesSection: React.FC<ServicesProps> = ({ onStartProject }) => {
  const { ref } = useInView({ threshold: 0.1 });

  const services = [
    {
      num: '01',
      icon: Home,
      title: 'Arquitetura Residencial',
      desc: 'Projetos autorais para casas e residências que valorizam o bem-estar, a iluminação natural, conforto térmico e a identidade única de cada família.',
      tags: ['Casas de Alto Padrão', 'Residências de Praia & Campo', 'Casas Urbanas']
    },
    {
      num: '02',
      icon: Compass,
      title: 'Design de Interiores',
      desc: 'Ambientes que unem estética apurada, funcionalidade e sensorialidade através de marcenaria sob medida, iluminação quente e materiais naturais.',
      tags: ['Apartamentos Exclusivos', 'Reformas Globais', 'Curadoria de Mobiliário']
    },
    {
      num: '03',
      icon: Building2,
      title: 'Arquitetura Comercial',
      desc: 'Espaços que fortalecem marcas e criam experiências memoráveis para clientes e equipes: estúdios, sedes corporativas, cafés e boutiques.',
      tags: ['Espaços Corporativos', 'Gastronomia & Cafés', 'Lojas Conceito']
    },
    {
      num: '04',
      icon: MessageSquare,
      title: 'Consultoria Arquitetônica',
      desc: 'Orientação técnica e estética especializada para você tomar as melhores decisões antes de comprar um terreno, imóvel ou iniciar uma grande obra.',
      tags: ['Viabilidade de Terreno', 'Diagnóstico Espacial', 'Direção Conceitual']
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Escutar',
      desc: 'Entendemos profundamente suas necessidades, desejos e estilo de vida através de um diagnóstico minucioso.'
    },
    {
      step: '02',
      title: 'Conceber',
      desc: 'Desenvolvemos o conceito autoral e as primeiras propostas volumétricas, espaciais e materiais.'
    },
    {
      step: '03',
      title: 'Desenvolver',
      desc: 'Detalhamento executivo completo do projeto com precisão milimétrica e sensibilidade estética.'
    },
    {
      step: '04',
      title: 'Concretizar',
      desc: 'Acompanhamos a execução da obra para garantir fidelidade absoluta ao que foi sonhado.'
    }
  ];

  return (
    <section id="servicos" ref={ref} className="py-24 sm:py-32 bg-[#FAF8F5] text-[#1A1A19]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#EDE7DD]">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1.5px] bg-[#C5A059]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
                NOSSOS SERVIÇOS
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-[#1A1A19]">
              Do conceito à realização.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#1A1A19]/70 font-light max-w-md mt-4 md:mt-0">
            Oferecemos soluções completas e personalizadas em arquitetura e interiores, com foco na estética, funcionalidade e bem-estar.
          </p>
        </div>

        {/* 4 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#EDE7DD]/35 hover:bg-[#EDE7DD]/70 border border-[#EDE7DD] hover:border-[#C5A059]/40 p-8 rounded-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-[#C5A059] tracking-widest">{srv.num}</span>
                    <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-[#1A1A19] group-hover:bg-[#C5A059] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif-luxury text-2xl text-[#1A1A19] font-light mb-3">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#1A1A19]/70 font-light leading-relaxed mb-6">
                    {srv.desc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#EDE7DD]">
                    {srv.tags.map((t, i) => (
                      <span key={i} className="text-[10px] tracking-wider uppercase bg-white/60 px-2.5 py-1 rounded text-[#8C887B]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4-Step Process Section */}
        <div className="bg-[#EDE7DD]/40 border border-[#EDE7DD] p-8 sm:p-12 lg:p-16 rounded-sm">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium block mb-2">
              COMO TRABALHAMOS
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#1A1A19] font-light">
              Um processo claro para grandes resultados.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((st, i) => (
              <div key={i} className="relative">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="font-serif-luxury text-3xl sm:text-4xl text-[#C5A059] font-light">
                    {st.step}
                  </span>
                  {i < steps.length - 1 && (
                    <span className="hidden md:inline-block w-8 h-[1px] bg-[#C5A059]/40" />
                  )}
                </div>
                <h4 className="font-serif-luxury text-xl text-[#1A1A19] font-medium mb-2">
                  {st.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#1A1A19]/70 font-light leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-[#EDE7DD] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#8C887B] tracking-wider uppercase">
              Atendimento personalizado para Belém, Pará e projetos em todo o Brasil.
            </p>
            <button
              onClick={onStartProject}
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] text-[#1A1A19] hover:text-[#C5A059] font-medium transition-colors"
            >
              <span>Conversar sobre sua etapa atual</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
