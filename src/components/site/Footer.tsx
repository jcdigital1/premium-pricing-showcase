import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { empresa } from "@/data/tabela";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="px-5 pb-28 pt-6 sm:pb-20">
      <div className="neon-strip mx-auto mb-10 w-full max-w-4xl rounded-full" />
      <Reveal className="mx-auto max-w-3xl text-center">
        <img
          src={logo.url}
          alt="Studio Lava e Brilho"
          width={533}
          height={800}
          loading="lazy"
          className="mx-auto w-[min(55%,12rem)] drop-shadow-[0_18px_35px_rgba(0,0,0,0.6)]"
        />
        <p className="mt-4 text-base text-muted-foreground">{empresa.rodape}</p>
        <p className="mt-2 text-base font-semibold">
          WhatsApp: <span className="text-accent">{empresa.telefone}</span>
        </p>

        <div className="mt-7 flex items-center justify-center">
          <motion.a
            href={empresa.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            whileHover={{ y: -4, scale: 1.08 }}
            className="glass-card flex size-12 items-center justify-center"
          >
            <MessageCircle className="size-5 text-accent" />
          </motion.a>
        </div>

        <p className="mt-8 text-xs uppercase tracking-[0.25em] text-muted-foreground/70">
          {empresa.nome} · © Todos os direitos reservados.
        </p>
      </Reveal>
    </footer>
  );
}
