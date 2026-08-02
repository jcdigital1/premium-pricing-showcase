import { motion } from "motion/react";
import { Check } from "lucide-react";
import { diferenciais } from "@/data/tabela";
import { Reveal, SectionTitle } from "./Reveal";

export function Diferenciais() {
  return (
    <section className="px-5 py-14">
      <SectionTitle kicker="Diferenciais">Qualidade em cada detalhe</SectionTitle>

      <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {diferenciais.map((item, i) => (
          <Reveal key={item} delay={i * 0.05}>
            <motion.div
              whileHover={{ y: -6, rotateX: 4 }}
              style={{ transformPerspective: 800 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className="glass-card flex h-full items-center gap-3 p-5"
            >
              <span className="glow-ring flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/30 ring-1 ring-accent/40">
                <Check className="size-4 text-accent" strokeWidth={2.4} />
              </span>
              <span className="text-sm font-semibold sm:text-base">{item}</span>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
