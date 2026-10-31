import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, MessageSquare, Mail, Phone, MapPin } from 'lucide-react';
import { useInView } from '../hooks/useScroll';

export const ContactCTASection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipoProjeto: 'Residencial',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      // keep message visible
    }, 500);
  };

  return (
    <section id="contato" ref={ref} className="relative bg-[#1A1A19] text-[#FAF8F5] overflow-hidden">
      {/* Immersive CTA Background Image with Twilight Lighting */}
      <div className="relative min-h-[550px] lg:min-h-[620px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/cta-architecture.jpg"
            alt="Arquitetura contemporânea ao entardecer - Auréa Estúdio"
            className={`w-full h-full object-cover object-center filter brightness-[0.65] contrast-[1.1] transition-transform duration-[1200ms] ease-out ${
              isInView ? 'scale-100' : 'scale-105'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A19] via-[#1A1A19]/50 to-[#1A1A19]/70" />
        </div>

        {/* CTA Hero Text */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32 w-full text-center">
          <div className="inline-flex items-center space-x-3 mb-6">
            <span className="w-8 h-[1px] bg-[#C5A059]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#C5A059] font-medium">
              VAMOS CONVERSAR?
            </span>
            <span className="w-8 h-[1px] bg-[#C5A059]" />
          </div>

          <h2 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-light text-white mb-6 max-w-4xl mx-auto leading-tight">
            Vamos dar forma ao seu <br />
            <span className="font-normal text-[#EDE7DD]">próximo espaço?</span>
          </h2>

          <p className="text-base sm:text-lg text-[#FAF8F5]/85 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Compartilhe suas ideias e descubra novas possibilidades para o seu projeto com a equipe de criação da Auréa.
          </p>

          <a
            href="#formulario"
            className="group inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-[#FAF8F5] text-[#1A1A19] font-medium text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-[#C5A059] hover:text-white transition-all duration-300"
          >
            <span>INICIAR UMA CONVERSA</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>

      {/* Contact & Consultation Form Section */}
      <div id="formulario" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium block mb-2">
                ESTÚDIO DE ARQUITETURA
              </span>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#FAF8F5] font-light">
                Atendimento com a arquiteta Isadora Vale
              </h3>
            </div>

            <p className="text-sm text-[#FAF8F5]/70 font-light leading-relaxed">
              Cada cliente é atendido de forma individualizada pela direção criativa do escritório, garantindo consistência do primeiro croqui à entrega final das chaves.
            </p>

            <div className="space-y-4 pt-4">
              <a
                href="https://wa.me/5591987654321"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-[#C5A059] transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#8C887B] block">WhatsApp Direto</span>
                  <span className="text-sm text-white font-medium group-hover:text-[#C5A059] transition-colors">
                    Falar no WhatsApp &bull; Atendimento Rápido
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8C887B] group-hover:text-[#C5A059]" />
              </a>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#8C887B] block">E-mail</span>
                  <span className="text-sm text-white font-medium">contato@aurea.arq.br</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#8C887B] block">Telefone</span>
                  <span className="text-sm text-white font-medium">(91) 98765-4321</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#8C887B] block">Estúdio Criativo</span>
                  <span className="text-sm text-white font-medium">Belém — Pará, Brasil (Atendimento Nacional)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-white/5 p-8 sm:p-10 rounded-sm border border-white/10">
            {formSubmitted ? (
              <div className="py-16 text-center space-y-4">
                <CheckCircle2 className="w-14 h-14 text-[#C5A059] mx-auto" />
                <h4 className="font-serif-luxury text-3xl text-white font-light">
                  Mensagem Recebida com Sucesso
                </h4>
                <p className="text-sm text-[#FAF8F5]/80 font-light max-w-md mx-auto">
                  Agradecemos seu contato. Isadora Vale e a equipe da Auréa retornarão em até 24 horas úteis para agendar uma conversa.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-6 py-2.5 text-xs uppercase tracking-widest border border-white/30 rounded-full hover:border-[#C5A059] text-white transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h4 className="font-serif-luxury text-2xl text-white font-light mb-1">
                    Conte-nos sobre o seu projeto
                  </h4>
                  <p className="text-xs text-[#8C887B]">
                    Preencha o formulário para receber um contato personalizado da arquiteta.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-[#FAF8F5]/70 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Como podemos te chamar?"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full bg-white/5 border border-white/20 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A059] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-[#FAF8F5]/70 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="seuemail@exemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/20 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A059] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-[#FAF8F5]/70 mb-2">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(91) 98000-0000"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      className="w-full bg-white/5 border border-white/20 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A059] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-[#FAF8F5]/70 mb-2">
                      Tipologia de Projeto
                    </label>
                    <select
                      value={formData.tipoProjeto}
                      onChange={(e) => setFormData({ ...formData, tipoProjeto: e.target.value })}
                      className="w-full bg-[#252422] border border-white/20 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A059] transition-colors"
                    >
                      <option value="Residencial">Arquitetura Residencial (Casa Nova)</option>
                      <option value="Interiores">Design de Interiores (Apartamento / Reforma)</option>
                      <option value="Comercial">Arquitetura Comercial / Corporativa</option>
                      <option value="Consultoria">Consultoria de Terreno ou Imóvel</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-widest text-[#FAF8F5]/70 mb-2">
                    Como podemos te ajudar? (Localização, metragem aproximada, prazos) *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Descreva brevemente o espaço, cidade ou fase do seu projeto..."
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="w-full bg-white/5 border border-white/20 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#C5A059] hover:bg-[#b8934a] text-[#1A1A19] font-medium text-xs uppercase tracking-[0.2em] rounded transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Enviar Mensagem</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
