import { motion } from "motion/react";
import { Check } from "lucide-react";
import { diferenciais } from "@/data/tabela";
import { Reveal, SectionTitle } from "./Reveal";

export function Diferenciais() {
  return (
    <section className="px-5 py-14">
      <SectionTitle kicker="Diferenciais">Por que escolher nossos serviços?</SectionTitle>

      <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {diferenciais.map((d, i) => (
          <Reveal key={d} delay={i * 0.05}>
            <motion.div
              whileHover={{ y: -5 }}
              className="glass-card flex items-center gap-3 p-4"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/30 ring-1 ring-accent/50">
                <Check className="size-4 text-accent" strokeWidth={2.5} />
              </span>
              <span className="text-sm font-semibold sm:text-base">{d}</span>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
