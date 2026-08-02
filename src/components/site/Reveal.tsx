import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({
  children,
  kicker,
}: {
  children: ReactNode;
  kicker?: string;
}) {
  return (
    <Reveal className="text-center">
      {kicker ? (
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
          {kicker}
        </span>
      ) : null}
      <h2 className="mt-3 text-3xl uppercase text-metal sm:text-4xl">{children}</h2>
      <div className="neon-strip mx-auto mt-4 w-40 rounded-full" />
    </Reveal>
  );
}
