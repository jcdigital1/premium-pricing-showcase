import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { empresa } from "@/data/tabela";

export function Hero() {
  return (
    <header className="relative overflow-hidden px-5 pt-10 pb-14 text-center sm:pt-16">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/30 blur-[110px]" />
      <div className="pointer-events-none absolute top-40 -right-20 h-64 w-64 rounded-full bg-accent/20 blur-[100px]" />

      <motion.img
        src={logo.url}
        alt="Studio Lava e Brilho — lavagem e estética automotiva"
        width={533}
        height={800}
        className="relative mx-auto w-[min(92%,26rem)] drop-shadow-[0_25px_45px_rgba(0,0,0,0.65)]"
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.h1
        className="relative mt-2 text-4xl uppercase text-metal sm:text-6xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
      >
        {empresa.titulo}
      </motion.h1>

      <motion.div
        className="neon-strip mx-auto mt-5 w-56 rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.45 }}
      />

      <motion.p
        className="relative mx-auto mt-5 max-w-xl text-base leading-relaxed text-foreground/90 sm:text-lg"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        {empresa.subtitulo}
      </motion.p>

      <motion.p
        className="relative mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        {empresa.apresentacao}
      </motion.p>

      <motion.a
        href={empresa.whatsapp}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="relative mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[image:var(--gradient-neon)] px-8 py-4 text-base font-bold uppercase tracking-wide text-primary-foreground shadow-[0_18px_40px_-14px_rgba(0,0,0,0.85)] ring-1 ring-white/25 sm:text-lg"
      >
        <MessageCircle className="size-5" />
        Solicitar orçamento
      </motion.a>
    </header>
  );
}
