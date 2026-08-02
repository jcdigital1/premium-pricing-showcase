import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { empresa } from "@/data/tabela";

export function FloatingWhatsapp() {
  return (
    <motion.a
      href={empresa.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Solicitar orçamento pelo WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: [1, 1.05, 1] }}
      transition={{
        opacity: { duration: 0.4, delay: 1 },
        scale: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
      }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[image:var(--gradient-neon)] px-4 py-4 font-bold uppercase tracking-wide text-primary-foreground shadow-[0_16px_40px_-12px_rgba(0,0,0,0.9)] ring-1 ring-white/30 sm:px-6"
    >
      <MessageCircle className="size-6" />
      <span className="hidden text-sm sm:inline">Solicitar orçamento</span>
    </motion.a>
  );
}
