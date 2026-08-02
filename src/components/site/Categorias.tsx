import { motion } from "motion/react";
import { categorias } from "@/data/tabela";
import { iconMap } from "./icons";
import { Reveal, SectionTitle } from "./Reveal";

export function Categorias() {
  return (
    <section id="tabela" className="px-5 py-14">
      <SectionTitle kicker="Valores">Categorias</SectionTitle>

      <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categorias.map((cat, i) => {
          const Icon = iconMap[cat.icone];
          return (
            <Reveal key={cat.nome} delay={i * 0.07}>
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
                  <h3 className="text-xl uppercase leading-tight">{cat.nome}</h3>
                </div>

                <ul className="mt-6 space-y-3">
                  {cat.itens.map((item) => (
                    <li
                      key={item.nome}
                      className="flex items-center justify-between gap-3 border-b border-border/60 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-sm text-muted-foreground sm:text-base">
                        {item.nome}
                      </span>
                      <motion.span
                        className="price-pill"
                        whileHover={{ scale: 1.08 }}
                        transition={{ type: "spring", stiffness: 350, damping: 15 }}
                      >
                        {item.preco}
                      </motion.span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
