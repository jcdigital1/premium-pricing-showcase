import { categorias } from "@/data/tabela";
import { Reveal, SectionTitle } from "./Reveal";
import { CategoriaCard } from "./CategoriaCard";

export function Categorias() {
  return (
    <section id="tabela" className="px-5 py-14">
      <SectionTitle kicker="Valores">Serviços e preços</SectionTitle>

      <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {categorias.map((cat, i) => (
          <Reveal key={cat.nome} delay={i * 0.07}>
            <CategoriaCard categoria={cat} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
