/**
 * TODOS OS TEXTOS E PREÇOS SÃO EDITÁVEIS AQUI.
 */

export const WHATSAPP_LINK =
  "https://wa.me/5594993041694?text=Ol%C3%A1!%20Vi%20a%20tabela%20de%20pre%C3%A7os%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

export const empresa = {
  nome: "Studio Lava e Brilho",
  titulo: "TABELA DE PREÇOS",
  subtitulo: "Cuidados profissionais para motos, carros e camionetes.",
  apresentacao:
    "Escolha o serviço ideal para o seu veículo e solicite seu atendimento pelo WhatsApp.",
  telefone: "(94) 99304-1694",
  rodape: "Atendimento com qualidade, cuidado e compromisso.",
  whatsapp: WHATSAPP_LINK,
};

export type Categoria = {
  icone: "bike" | "bikeBig" | "car" | "truck";
  nome: string;
  itens: { nome: string; preco: string }[];
};

export const categorias: Categoria[] = [
  {
    icone: "bike",
    nome: "Motos pequenas e médias",
    itens: [
      { nome: "Lavagem simples + cera", preco: "R$ 40,00" },
      { nome: "Revitalização de plásticos", preco: "R$ 15,00" },
      { nome: "Vitrificação dos plásticos", preco: "R$ 120,00" },
      { nome: "Limpeza detalhada", preco: "R$ 150,00" },
      { nome: "Verniz", preco: "R$ 30,00" },
    ],
  },
  {
    icone: "bikeBig",
    nome: "Motos grandes",
    itens: [
      { nome: "Lavagem simples + cera", preco: "R$ 60,00" },
      { nome: "Revitalização de plásticos", preco: "R$ 15,00" },
      { nome: "Vitrificação dos plásticos", preco: "R$ 150,00" },
      { nome: "Limpeza detalhada", preco: "R$ 180,00" },
      { nome: "Verniz", preco: "R$ 50,00" },
    ],
  },
  {
    icone: "car",
    nome: "Carro pequeno",
    itens: [
      { nome: "Lavagem simples + cera + aspiração", preco: "R$ 65,00" },
      { nome: "Limpeza interna detalhada sem remover os bancos", preco: "R$ 160,00" },
      { nome: "Limpeza de teto interno", preco: "R$ 120,00" },
      { nome: "Tratamento de banco em couro", preco: "R$ 170,00" },
      { nome: "Tratamento de chuva ácida nos vidros", preco: "R$ 90,00" },
      { nome: "Lavagem de chassi + verniz", preco: "R$ 200,00" },
      { nome: "Lavagem Premium", preco: "R$ 500,00" },
    ],
  },
  {
    icone: "truck",
    nome: "Camionetes médias e grandes",
    itens: [
      { nome: "Lavagem simples + cera e aspiração", preco: "R$ 80,00" },
      { nome: "Limpeza interna detalhada", preco: "R$ 250,00" },
      { nome: "Limpeza de teto", preco: "R$ 170,00" },
      { nome: "Tratamento em bancos de couro", preco: "R$ 190,00" },
      { nome: "Tratamento de chuva ácida nos vidros", preco: "R$ 100,00" },
      { nome: "Lavagem de chassi + verniz", preco: "R$ 300,00" },
      { nome: "Lavagem de motor + tratamento", preco: "R$ 390,00" },
      { nome: "Lavagem Premium", preco: "R$ 800,00" },
    ],
  },
];

export const premium = {
  titulo: "LAVAGEM PREMIUM",
  texto:
    "Um cuidado completo para limpeza, revitalização e valorização do seu veículo.",
  cards: [
    { nome: "Carro pequeno", preco: "R$ 500,00", icone: "car" as const },
    { nome: "Camionetes médias e grandes", preco: "R$ 800,00", icone: "truck" as const },
  ],
};

export const diferenciais = [
  "Atendimento profissional",
  "Produtos de qualidade",
  "Cuidado com o veículo",
  "Acabamento detalhado",
  "Serviços para motos e carros",
  "Orçamento rápido pelo WhatsApp",
];
