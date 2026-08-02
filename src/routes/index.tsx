import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Categorias } from "@/components/site/Categorias";
import { Cta } from "@/components/site/Cta";
import { Footer } from "@/components/site/Footer";

const title = "Tabela de Preços | Studio Lava e Brilho";
const description =
  "Tabela de preços do Studio Lava e Brilho: lavagem, vitrificação, limpeza detalhada e lavagem premium para motos, carros e camionetes.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="carbon-bg relative min-h-screen w-full overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.22),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl">
        <Hero />
        <Categorias />
        <Cta />
        <Footer />
      </div>
    </main>
  );
}
