import { motion } from "motion/react";
import type { Categoria } from "@/data/tabela";
import { iconMap } from "./icons";

export function CategoriaCard({ categoria }: { categoria: Categoria }) {
  const Icon = iconMap[categoria.icone];

  return (
    <motion.article
      whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      style={{ transformPerspective: 900 }}
      className="glass-card h-full p-6"
    >
      <div className="flex items-center gap-4">
        <span className="glow-ring flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/25 ring-1 ring-accent/40">
          {Icon ? <Icon className="size-7 text-accent" strokeWidth={1.6} /> : null}
        </span>
        <h3 className="text-xl uppercase leading-tight">{categoria.nome}</h3>
      </div>

      <ul className="mt-6 space-y-3">
        {categoria.itens.map((item) => (
          <li
            key={item.nome}
            className="flex items-center justify-between gap-3 border-b border-border/60 pb-3 last:border-0 last:pb-0"
          >
            <span className="text-sm text-muted-foreground sm:text-base">{item.nome}</span>
            <motion.span
              className="price-pill shrink-0"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 350, damping: 15 }}
            >
              {item.preco}
            </motion.span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
