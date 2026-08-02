import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { premium } from "@/data/tabela";
import { iconMap } from "./icons";
import { Reveal, SectionTitle } from "./Reveal";

export function Premium() {
  return (
    <section className="px-5 py-14">
      <SectionTitle kicker="Destaque">{premium.titulo}</SectionTitle>
      <Reveal>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-muted-foreground sm:text-base">
          {premium.texto}
        </p>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
        {premium.cards.map((card, i) => {
          const Icon = iconMap[card.icone];
          return (
            <Reveal key={card.nome} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="glass-card metal-border relative h-full overflow-hidden p-7 text-center"
              >
                <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-[image:var(--gradient-neon)] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-primary-foreground">
                  <Sparkles className="size-3" />
                  Premium
                </span>

                <span className="glow-ring mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary/25 ring-1 ring-accent/50">
                  {Icon ? <Icon className="size-8 text-accent" strokeWidth={1.6} /> : null}
                </span>

                <h3 className="mt-5 text-xl uppercase leading-tight">{card.nome}</h3>
                <p className="mt-5">
                  <span className="price-pill text-lg">{card.preco}</span>
                </p>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
