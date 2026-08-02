/**
 * TODOS OS TEXTOS E PREÇOS SÃO EDITÁVEIS AQUI.
 * Basta alterar os valores abaixo para atualizar o site.
 */

export const empresa = {
  nome: "Studio Lava e Brilho",
  titulo: "TABELA DE PREÇOS",
  subtitulo:
    "Confira todos os nossos serviços e escolha a melhor opção para o seu veículo.",
  rodape: "Atendimento com qualidade e compromisso.",
  telefone: "(94) 99304-1694",
  // Cole aqui o link do WhatsApp (ex.: https://wa.me/5594993041694)
  whatsapp: "",
  // Cole aqui os links das redes sociais
  instagram: "",
  facebook: "",
};

export type Categoria = {
  icone: "car" | "sparkles" | "droplets" | "shieldCheck" | "wrench" | "bike";
  nome: string;
  itens: { nome: string; preco: string }[];
};

export const categorias: Categoria[] = [
  {
    icone: "car",
    nome: "Lavagem de Carros",
    itens: [
      { nome: "Lavagem simples", preco: "R$ 40" },
      { nome: "Lavagem completa", preco: "R$ 70" },
      { nome: "Lavagem + cera", preco: "R$ 90" },
      { nome: "Lavagem técnica detalhada", preco: "R$ 150" },
    ],
  },
  {
    icone: "bike",
    nome: "Motos",
    itens: [
      { nome: "Lavagem simples", preco: "R$ 25" },
      { nome: "Lavagem completa", preco: "R$ 40" },
      { nome: "Lavagem + polimento", preco: "R$ 80" },
    ],
  },
  {
    icone: "sparkles",
    nome: "Estética Automotiva",
    itens: [
      { nome: "Polimento comercial", preco: "R$ 250" },
      { nome: "Polimento técnico", preco: "R$ 450" },
      { nome: "Cristalização de pintura", preco: "R$ 300" },
      { nome: "Vitrificação", preco: "R$ 700" },
    ],
  },
  {
    icone: "droplets",
    nome: "Higienização",
    itens: [
      { nome: "Higienização de bancos", preco: "R$ 180" },
      { nome: "Higienização interna completa", preco: "R$ 300" },
      { nome: "Higienização de ar-condicionado", preco: "R$ 120" },
    ],
  },
  {
    icone: "wrench",
    nome: "Serviços Extras",
    itens: [
      { nome: "Lavagem de motor", preco: "R$ 80" },
      { nome: "Hidratação de couro", preco: "R$ 150" },
      { nome: "Revitalização de plásticos", preco: "R$ 100" },
    ],
  },
  {
    icone: "shieldCheck",
    nome: "Proteção",
    itens: [
      { nome: "Impermeabilização de tecidos", preco: "R$ 200" },
      { nome: "Selante de pintura", preco: "R$ 250" },
      { nome: "Cristalização de vidros", preco: "R$ 180" },
    ],
  },
];

export type Servico = {
  icone: "car" | "sparkles" | "droplets" | "shieldCheck" | "wrench" | "wind";
  nome: string;
  descricao: string;
  valor: string;
};

export const servicos: Servico[] = [
  {
    icone: "car",
    nome: "Lavagem Completa",
    descricao: "Lavagem externa, rodas, pneus, vidros e aspiração interna.",
    valor: "R$ 70",
  },
  {
    icone: "sparkles",
    nome: "Polimento Técnico",
    descricao: "Remoção de riscos e microrriscos com brilho profundo de espelho.",
    valor: "R$ 450",
  },
  {
    icone: "shieldCheck",
    nome: "Vitrificação",
    descricao: "Camada cerâmica com proteção duradoura e efeito hidrofóbico.",
    valor: "R$ 700",
  },
  {
    icone: "droplets",
    nome: "Higienização Interna",
    descricao: "Limpeza profunda de bancos, tapetes, teto e carpetes.",
    valor: "R$ 300",
  },
  {
    icone: "wind",
    nome: "Ar-condicionado",
    descricao: "Higienização com eliminação de fungos, bactérias e odores.",
    valor: "R$ 120",
  },
  {
    icone: "wrench",
    nome: "Lavagem de Motor",
    descricao: "Desengraxe seguro do compartimento com finalização premium.",
    valor: "R$ 80",
  },
];

export const diferenciais = [
  "Atendimento profissional",
  "Produtos de alta qualidade",
  "Equipamentos modernos",
  "Garantia de qualidade",
  "Atendimento rápido",
  "Excelente acabamento",
];
