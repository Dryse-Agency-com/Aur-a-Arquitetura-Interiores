export interface ProjectImage {
  url: string;
  caption: string;
  tag: string;
  aspect?: 'landscape' | 'portrait' | 'wide';
}

export interface Project {
  id: string;
  slug: string;
  index: string;
  name: string;
  category: 'Residencial' | 'Interiores' | 'Comercial';
  year: string;
  location: string;
  heroImage: string;
  tagline: string;
  concept: string;
  area: string;
  status: string;
  architectRole: string;
  materials: string[];
  specs: { label: string; value: string }[];
  gallery: ProjectImage[];
}

export const PROJECTS: Project[] = [
  {
    id: '01',
    slug: 'residencia-horizonte',
    index: '01 / 06',
    name: 'Residência Horizonte',
    category: 'Residencial',
    year: '2025',
    location: 'Belém, PA',
    heroImage: '/images/proj1-residencia-horizonte.jpg',
    tagline: 'Uma residência que funde concreto escultural, ripados de madeira nobre e vegetação tropical amazônica.',
    concept:
      'Implantada em um terreno suavemente inclinado na região metropolitana de Belém, a Residência Horizonte expressa a busca pela integração radical entre espaço interno e paisagem nativa. A volumetria combina planos puros de concreto aparente com ripados móveis de cumaru que regulam a incidência solar e protegem da chuva equatorial. O pátio central funciona como um pulmão verde que refresca a temperatura interna através de ventilação natural cruzada constante.',
    area: '680 m²',
    status: 'Conceito / Projeto Autoral',
    architectRole: 'Arquitetura, Interiores e Paisagismo',
    materials: ['Concreto arquitetônico aparente', 'Cumaru certificado', 'Pedra Travertino', 'Esquadrias piso-teto em alumínio escovado', 'Água espelhada'],
    specs: [
      { label: 'Localização', value: 'Belém, Pará — Brasil' },
      { label: 'Área Construída', value: '680 m²' },
      { label: 'Ano de Projeto', value: '2025' },
      { label: 'Tipologia', value: 'Residencial Unifamiliar' },
      { label: 'Autoria', value: 'Isadora Vale (Auréa)' },
      { label: 'Fotografia Conceitual', value: 'Direção de Arte Auréa' }
    ],
    gallery: [
      {
        url: '/images/proj1-residencia-horizonte.jpg',
        caption: 'Fachada frontal com planos horizontais de concreto e brises de madeira com luz poente.',
        tag: 'Fachada Panorâmica',
        aspect: 'wide'
      },
      {
        url: 'https://images.pexels.com/photos/36394726/pexels-photo-36394726.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
        caption: 'Área externa ao entardecer: piscina de borda limpa integrada ao lounge coberto.',
        tag: 'Pátio com Piscina',
        aspect: 'landscape'
      },
      {
        url: 'https://images.pexels.com/photos/28915352/pexels-photo-28915352.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
        caption: 'Integração contínua entre sala social e varanda gourmet envolta pelo jardim tropical.',
        tag: 'Sala de Estar Integrada',
        aspect: 'landscape'
      },
      {
        url: 'https://images.pexels.com/photos/8143669/pexels-photo-8143669.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
        caption: 'Pátio e espelho d\'água trazendo frescor térmico e reflexos para as áreas íntimas.',
        tag: 'Jardim e Espelho D\'água',
        aspect: 'landscape'
      },
      {
        url: 'https://images.pexels.com/photos/30767898/pexels-photo-30767898.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900',
        caption: 'Encontro honesto entre concreto bruto, madeira nobre e pedra esculpida.',
        tag: 'Detalhe Construtivo',
        aspect: 'portrait'
      }
    ]
  },
  {
    id: '02',
    slug: 'apartamento-essencia',
    index: '02 / 06',
    name: 'Apartamento Essência',
    category: 'Interiores',
    year: '2025',
    location: 'Belém, PA',
    heroImage: '/images/proj2-apartamento-essencia.jpg',
    tagline: 'A sobriedade silenciosa da pedra travertino, marcenaria em carvalho claro e iluminação difusa.',
    concept:
      'Uma reformulação de interiores focada no silêncio visual e no acolhimento sensorial. Paredes revestidas com massa mineral mineralizada off-white refletem a luz natural que entra pelas amplas aberturas com vista para a orla de Belém. A ilha da cozinha e a bancada social foram esculpidas em bloco monolítico de pedra travertino Navona, harmonizadas com mobiliário assinado do modernismo brasileiro contemporâneo.',
    area: '340 m²',
    status: 'Projeto de Interiores Concluído',
    architectRole: 'Design de Interiores, Curadoria de Mobiliário e Lighting Design',
    materials: ['Travertino Navona resinado acetinado', 'Carvalho europeu claro', 'Linho cru puro', 'Microcimento acetinado', 'Iluminação linear difusa quente (2700K)'],
    specs: [
      { label: 'Localização', value: 'Umarizal, Belém — PA' },
      { label: 'Área Privativa', value: '340 m²' },
      { label: 'Ano', value: '2025' },
      { label: 'Tipologia', value: 'Apartamento Residencial' },
      { label: 'Mobiliário', value: 'Curadoria Auréa & Design Autoral' }
    ],
    gallery: [
      {
        url: '/images/proj2-apartamento-essencia.jpg',
        caption: 'Living integrado com estofados em linho, painel de madeira clara e vista panorâmica para a copa das árvores.',
        tag: 'Living Principal',
        aspect: 'landscape'
      },
      {
        url: 'https://images.pexels.com/photos/6899438/pexels-photo-6899438.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
        caption: 'Sala de jantar e cozinha gourmet em perfeita continuidade espacial sem divisórias sólidas.',
        tag: 'Sala de Jantar & Gourmet',
        aspect: 'wide'
      },
      {
        url: 'https://images.pexels.com/photos/7607331/pexels-photo-7607331.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
        caption: 'Mesa de centro autoral em pedra polida e arranjo de cerâmica artesanal.',
        tag: 'Curadoria de Objetos',
        aspect: 'landscape'
      },
      {
        url: 'https://images.pexels.com/photos/8092177/pexels-photo-8092177.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
        caption: 'Acolhimento térmico através de tecidos naturais e marcenaria contínua.',
        tag: 'Estar Íntimo',
        aspect: 'landscape'
      },
      {
        url: 'https://images.pexels.com/photos/7749055/pexels-photo-7749055.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900',
        caption: 'Linhas ortogonais e sobriedade de texturas no aparador suspenso.',
        tag: 'Detalhes de Marcenaria',
        aspect: 'portrait'
      }
    ]
  },
  {
    id: '03',
    slug: 'casa-brisa',
    index: '03 / 06',
    name: 'Casa Brisa',
    category: 'Residencial',
    year: '2024',
    location: 'Ananindeua, PA',
    heroImage: '/images/proj3-casa-brisa.jpg',
    tagline: 'Arquitetura bioclimática tropical brasileira em harmonia com o microclima amazônico.',
    concept:
      'Projetada para conviver harmoniosamente com as altas temperaturas e a umidade característica do Pará, a Casa Brisa é estruturada com grandes beirais de madeira que criam generosas galerias sombreadas. As vedações são constituídas por venezianas de madeira operáveis, garantindo que o vento circule sem interrupção mesmo com as chuvas da tarde. A vegetação nativa invade os pátios internos gerando um microclima de serenidade.',
    area: '520 m²',
    status: 'Conceito / Residencial',
    architectRole: 'Arquitetura e Consultoria Bioclimática',
    materials: ['Madeira laminada colada (MLC)', 'Concreto pigmentado claro', 'Piso cimentício atérmico', 'Venezianas móveis em tauari', 'Gramado e folhagens tropicais'],
    specs: [
      { label: 'Localização', value: 'Ananindeua, Pará' },
      { label: 'Área Terreno', value: '1.400 m²' },
      { label: 'Área Construída', value: '520 m²' },
      { label: 'Ano', value: '2024' },
      { label: 'Conceito', value: 'Bioclimático & Tropical' }
    ],
    gallery: [
      {
        url: '/images/proj3-casa-brisa.jpg',
        caption: 'Pátio sombreado por brises e beirais contínuos com vegetação tropical nativa.',
        tag: 'Fachada & Pátio',
        aspect: 'wide'
      },
      {
        url: 'https://images.pexels.com/photos/7811319/pexels-photo-7811319.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
        caption: 'Implantação horizontal aberta para a brisa constante e a luz natural.',
        tag: 'Varanda Bioclimática',
        aspect: 'landscape'
      },
      {
        url: 'https://images.pexels.com/photos/8134746/pexels-photo-8134746.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
        caption: 'Conexão franca entre a sala de convivência e a piscina revestida em pedra natural.',
        tag: 'Sala Aberta',
        aspect: 'landscape'
      },
      {
        url: 'https://images.pexels.com/photos/20989520/pexels-photo-20989520.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
        caption: 'Sombra e luz filtrada pelas venezianas ripadas ao longo do dia.',
        tag: 'Galeria de Circulação',
        aspect: 'portrait'
      },
      {
        url: 'https://images.pexels.com/photos/37042107/pexels-photo-37042107.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
        caption: 'Jardins internos trazendo a floresta para o centro do cotidiano.',
        tag: 'Jardim Interno',
        aspect: 'landscape'
      }
    ]
  },
  {
    id: '04',
    slug: 'refugio-das-aguas',
    index: '04 / 06',
    name: 'Refúgio das Águas',
    category: 'Residencial',
    year: '2023',
    location: 'Salinópolis, PA',
    heroImage: '/images/proj4-refugio-aguas.jpg',
    tagline: 'Residência litorânea contemporânea desenhada para contemplar o mar e desacelerar o tempo.',
    concept:
      'Debruçada sobre a faixa litorânea do Atlântico equatorial em Salinas, esta residência de descanso aposta na horizontalidade radical para respeitar a linha do horizonte marítimo. Grandes vigas aparentes de madeira roliça sustentam telhados com forro em esteira natural, permitindo que a brisa do oceano percorra todos os dormitórios. A piscina com borda infinita parece se dissolver na areia clara e nas marés salinas.',
    area: '790 m²',
    status: 'Obra Concluída',
    architectRole: 'Arquitetura Completa e Interiores',
    materials: ['Estrutura em madeira nobre roliça', 'Muros de pedra calcária bruta', 'Piso em pedra São Tomé clara', 'Esquadrias retráteis de correr', 'Deck em cumaru'],
    specs: [
      { label: 'Localização', value: 'Salinópolis, Pará — Litoral' },
      { label: 'Área Terreno', value: '2.200 m²' },
      { label: 'Área Construída', value: '790 m²' },
      { label: 'Ano', value: '2023' },
      { label: 'Tipologia', value: 'Casa de Praia / Lazer' }
    ],
    gallery: [
      {
        url: '/images/proj4-refugio-aguas.jpg',
        caption: 'Pavilhão social em madeira e pedra aberto diretamente para a piscina e os coqueirais.',
        tag: 'Vista Externa & Piscina',
        aspect: 'wide'
      },
      {
        url: 'https://images.pexels.com/photos/7811319/pexels-photo-7811319.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
        caption: 'Varanda gourmet com mesa coletiva esculpida em prancha única de madeira maciça.',
        tag: 'Varanda Gourmet',
        aspect: 'landscape'
      },
      {
        url: 'https://images.pexels.com/photos/36394726/pexels-photo-36394726.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
        caption: 'Área de convivência noturna com iluminação zenital quente e aconchegante.',
        tag: 'Área de Convivência',
        aspect: 'landscape'
      },
      {
        url: 'https://images.pexels.com/photos/30767898/pexels-photo-30767898.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900',
        caption: 'Suíte master voltada para o nascer do sol e a vegetação dunar costeira.',
        tag: 'Suíte Master',
        aspect: 'portrait'
      },
      {
        url: 'https://images.pexels.com/photos/28915352/pexels-photo-28915352.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
        caption: 'Paisagismo litorâneo com espécies nativas de restinga de baixa manutenção.',
        tag: 'Paisagismo Costeiro',
        aspect: 'landscape'
      }
    ]
  },
  {
    id: '05',
    slug: 'atelie-orla',
    index: '05 / 06',
    name: 'Ateliê Orla',
    category: 'Comercial',
    year: '2024',
    location: 'Belém, PA',
    heroImage: '/images/proj5-atelie-orla.jpg',
    tagline: 'Um estúdio criativo onde concreto polido, carvalho e iluminação linear catalisam a produção de design.',
    concept:
      'Concebido para abrigar uma empresa de branding e arquitetura no centro metropolitano de Belém, o Ateliê Orla propõe uma releitura do espaço de trabalho contemporâneo. Ausência de cubículos: as bancadas contínuas em carvalho claro promovem a colaboração enquanto nichos acústicos em feltro e madeira oferecem recolhimento para reuniões privativas. A iluminação técnica integrada foi calculada para reproduzir a luz diurna natural sem cansaço ocular.',
    area: '410 m²',
    status: 'Projeto Corporativo Autoral',
    architectRole: 'Arquitetura de Interiores Corporativos e Iluminação Técnica',
    materials: ['Piso em concreto polido acetinado', 'Marcenaria sob medida em carvalho', 'Perfis de iluminação LED 3000K', 'Divisórias de vidro com amortecimento acústico'],
    specs: [
      { label: 'Localização', value: 'Campina, Belém — PA' },
      { label: 'Área Corporativa', value: '410 m²' },
      { label: 'Ano', value: '2024' },
      { label: 'Tipologia', value: 'Estúdio Corporativo / Comercial' },
      { label: 'Estações de Trabalho', value: '28 posições colaborativas' }
    ],
    gallery: [
      {
        url: '/images/proj5-atelie-orla.jpg',
        caption: 'Bancadas abertas em carvalho natural e forro com iluminação técnica embutida.',
        tag: 'Área de Trabalho',
        aspect: 'wide'
      },
      {
        url: 'https://images.pexels.com/photos/7005270/pexels-photo-7005270.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
        caption: 'Recepção com bancada escultural monolítica e luz rasgante indireta.',
        tag: 'Recepção Escultural',
        aspect: 'landscape'
      },
      {
        url: 'https://images.pexels.com/photos/6899438/pexels-photo-6899438.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
        caption: 'Sala de conferência com mesa para 12 lugares e cortina fonoabsorvente.',
        tag: 'Sala de Reunião',
        aspect: 'landscape'
      },
      {
        url: 'https://images.pexels.com/photos/30767898/pexels-photo-30767898.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900',
        caption: 'Corredor de transição com painéis de madeira ripada e spots direcionais pontuais.',
        tag: 'Galeria de Circulação',
        aspect: 'portrait'
      },
      {
        url: 'https://images.pexels.com/photos/7749055/pexels-photo-7749055.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
        caption: 'Materiários e expositores com mostruários de pedras, tecidos e madeiras.',
        tag: 'Materiários & Detalhes',
        aspect: 'landscape'
      }
    ]
  },
  {
    id: '06',
    slug: 'cafe-linha',
    index: '06 / 06',
    name: 'Café Linha',
    category: 'Comercial',
    year: '2025',
    location: 'Belém, PA',
    heroImage: '/images/proj6-cafe-linha.jpg',
    tagline: 'Cafeteria autoral e sensorial: pedra bruta travertino, madeira nobre escura e atmosfera intimista.',
    concept:
      'Uma experiência gastronômica e sensorial na qual a arquitetura é protagonista. O Café Linha foi desenhado a partir de um balcão curvo monolítico talhado em bloco de travertino rústico com bordas suaves, que convida ao toque e ao diálogo com os baristas. As paredes revestidas em lambris de nogueira escura criam um contraste aconchegante com o piso cimentício, enquanto a iluminação quente focada em cada mesa acolhe conversas prolongadas.',
    area: '185 m²',
    status: 'Conceito / Comercial',
    architectRole: 'Arquitetura Comercial, Interiores e Branding Espacial',
    materials: ['Travertino bruto entalhado', 'Nogueira escura acetinada', 'Metais em bronze envelhecido', 'Estofados em couro conhaque', 'Vidro termoacústico'],
    specs: [
      { label: 'Localização', value: 'Nazaré, Belém — PA' },
      { label: 'Capacidade', value: '46 lugares' },
      { label: 'Área', value: '185 m²' },
      { label: 'Ano', value: '2025' },
      { label: 'Destaque', value: 'Balcão escultural em travertino bruto' }
    ],
    gallery: [
      {
        url: '/images/proj6-cafe-linha.jpg',
        caption: 'Salão principal com o balcão escultural em pedra bruta travertino e iluminação acolhedora.',
        tag: 'Salão & Balcão Principal',
        aspect: 'wide'
      },
      {
        url: 'https://images.pexels.com/photos/7607331/pexels-photo-7607331.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
        caption: 'Mesas intimistas com luminárias suspensas desenhadas sob medida para o café.',
        tag: 'Ambiente de Mesas',
        aspect: 'landscape'
      },
      {
        url: 'https://images.pexels.com/photos/6899438/pexels-photo-6899438.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
        caption: 'Fachada envidraçada voltada para a rua arborizada, conectando o café à cidade.',
        tag: 'Fachada & Vitrine',
        aspect: 'landscape'
      },
      {
        url: 'https://images.pexels.com/photos/7749055/pexels-photo-7749055.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900',
        caption: 'Textura da pedra natural travertino em contraste com a marcenaria precisa de nogueira.',
        tag: 'Detalhes de Materiais',
        aspect: 'portrait'
      },
      {
        url: 'https://images.pexels.com/photos/7005270/pexels-photo-7005270.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
        caption: 'Bar de café filtrado e espresso com ergonomia estudada para o fluxo de serviço.',
        tag: 'Área de Atendimento',
        aspect: 'landscape'
      }
    ]
  }
];
