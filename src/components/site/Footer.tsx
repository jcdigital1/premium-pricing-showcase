import { motion } from "motion/react";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { empresa } from "@/data/tabela";
import { Reveal } from "./Reveal";

const redes = [
  { icon: MessageCircle, label: "WhatsApp", href: empresa.whatsapp },
  { icon: Instagram, label: "Instagram", href: empresa.instagram },
  { icon: Facebook, label: "Facebook", href: empresa.facebook },
];

export function Footer() {
  return (
    <footer className="px-5 pb-14 pt-6">
      <div className="neon-strip mx-auto mb-10 w-full max-w-4xl rounded-full" />
      <Reveal className="mx-auto max-w-3xl text-center">
        <img
          src={logo.url}
          alt="Studio Lava e Brilho"
          width={533}
          height={800}
          loading="lazy"
          className="mx-auto w-[min(70%,16rem)] drop-shadow-[0_18px_35px_rgba(0,0,0,0.6)]"
        />
        <p className="mt-4 text-base text-muted-foreground">{empresa.rodape}</p>

        {/* Cole os links das redes em src/data/tabela.ts */}
        <div className="mt-7 flex items-center justify-center gap-4">
          {redes.map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              href={href || "#"}
              target={href ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              whileHover={{ y: -4, scale: 1.08 }}
              className="glass-card flex size-12 items-center justify-center"
            >
              <Icon className="size-5 text-accent" />
            </motion.a>
          ))}
        </div>

        <p className="mt-8 text-xs uppercase tracking-[0.25em] text-muted-foreground/70">
          {empresa.nome}
        </p>
      </Reveal>
    </footer>
  );
}
