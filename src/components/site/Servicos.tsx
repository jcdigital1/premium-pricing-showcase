import { motion } from "motion/react";
import { servicos } from "@/data/tabela";
import { iconMap } from "./icons";
import { Reveal, SectionTitle } from "./Reveal";

export function Servicos() {
  return (
    <section id="servicos" className="px-5 py-14">
      <SectionTitle kicker="O que fazemos">Serviços</SectionTitle>

      <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {servicos.map((s, i) => {
          const Icon = iconMap[s.icone];
          return (
            <Reveal key={s.nome} delay={i * 0.06}>
              <motion.article
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="glass-card flex h-full flex-col p-6"
              >
                <span className="glow-ring flex size-12 items-center justify-center rounded-xl bg-accent/15 ring-1 ring-accent/40">
                  {Icon ? <Icon className="size-6 text-accent" strokeWidth={1.6} /> : null}
                </span>
                <h3 className="mt-5 text-lg uppercase">{s.nome}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.descricao}
                </p>
                <div className="mt-5">
                  <motion.span
                    className="price-pill text-base"
                    whileHover={{ scale: 1.07 }}
                    transition={{ type: "spring", stiffness: 350, damping: 15 }}
                  >
                    {s.valor}
                  </motion.span>
                </div>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
