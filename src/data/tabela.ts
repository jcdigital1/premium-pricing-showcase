/**
 * TODOS OS TEXTOS E PREÇOS SÃO EDITÁVEIS AQUI.
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
  icone: "bike" | "bikeBig" | "car" | "truck";
  nome: string;
  itens: { nome: string; preco: string }[];
};

export const categorias: Categoria[] = [
  {
    icone: "bike",
    nome: "Motos pequenas e médias",
    itens: [
      { nome: "Lavagem simples + cera", preco: "R$ 40" },
      { nome: "Revitalização de plásticos", preco: "R$ 15" },
      { nome: "Vitrificação dos plásticos", preco: "R$ 120" },
      { nome: "Limpeza detalhada", preco: "R$ 150" },
      { nome: "Verniz", preco: "R$ 30" },
    ],
  },
  {
    icone: "bikeBig",
    nome: "Motos grandes",
    itens: [
      { nome: "Lavagem simples + cera", preco: "R$ 60" },
      { nome: "Revitalização de plásticos", preco: "R$ 15" },
      { nome: "Vitrificação dos plásticos", preco: "R$ 150" },
      { nome: "Limpeza detalhada", preco: "R$ 180" },
      { nome: "Verniz", preco: "R$ 50" },
    ],
  },
  {
    icone: "car",
    nome: "Carro pequeno",
    itens: [
      { nome: "Lavagem simples + cera + aspiração", preco: "R$ 65" },
      { nome: "Limpeza interna detalhada sem remover os bancos", preco: "R$ 160" },
      { nome: "Limpeza de teto interno", preco: "R$ 120" },
      { nome: "Tratamento de banco em couro", preco: "R$ 170" },
      { nome: "Tratamento de chuva ácida nos vidros", preco: "R$ 90" },
      { nome: "Lavagem de chassis + verniz", preco: "R$ 200" },
      { nome: "Lavagem Premium", preco: "R$ 500" },
    ],
  },
  {
    icone: "truck",
    nome: "Camionete média e grandes",
    itens: [
      { nome: "Lavagem simples + cera e aspiração", preco: "R$ 80" },
      { nome: "Limpeza interna detalhada", preco: "R$ 250" },
      { nome: "Limpeza de teto", preco: "R$ 170" },
      { nome: "Tratamento em bancos de couro", preco: "R$ 190" },
      { nome: "Tratamento de chuva ácida nos vidros", preco: "R$ 100" },
      { nome: "Lavagem de chassis + verniz", preco: "R$ 300" },
      { nome: "Lavagem de motor + tratamento", preco: "R$ 390" },
      { nome: "Lavagem Premium", preco: "R$ 800" },
    ],
  },
];
