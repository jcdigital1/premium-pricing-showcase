import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { empresa } from "@/data/tabela";
import { Reveal } from "./Reveal";

export function Cta() {
  return (
    <section className="px-5 py-14">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-accent/40 p-8 text-center sm:p-12">
          <div className="absolute inset-0 bg-[image:var(--gradient-neon)] opacity-90" />
          <motion.div
            className="absolute inset-y-0 -left-1/3 w-1/3 bg-white/25 blur-2xl"
            animate={{ x: ["0%", "420%"] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.4 }}
          />
          <div className="relative">
            <h2 className="text-2xl uppercase text-primary-foreground sm:text-4xl">
              Solicite seu orçamento agora mesmo.
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-primary-foreground/85 sm:text-base">
              Fale com a nossa equipe pelo WhatsApp e agende o seu horário.
            </p>

            {/* Insira o link do WhatsApp em src/data/tabela.ts (campo whatsapp) */}
            <motion.a
              href={empresa.whatsapp || "#"}
              target={empresa.whatsapp ? "_blank" : undefined}
              rel="noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-background px-8 py-4 text-base font-bold uppercase tracking-wide text-foreground shadow-[0_18px_40px_-14px_rgba(0,0,0,0.85)] ring-1 ring-white/25 sm:text-lg"
            >
              <MessageCircle className="size-5 text-accent" />
              Chamar no WhatsApp
            </motion.a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
