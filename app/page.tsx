import ChooseCategory from "@/components/choose-category"
import FeaturedProducts from "@/components/featured-products"
import StoreBenefits from "@/components/store-benefits"
import { Button } from "@/components/ui/button"
import { STORE } from "@/lib/store-config"
import Link from "next/link"

// Colores de las bobinas del hero: cambialos por los de tu catálogo
const SPOOLS = [
  "oklch(0.7 0.19 50)",   // naranja
  "oklch(0.55 0.1 125)",  // verde oliva
  "oklch(0.96 0 0)",      // blanco
  "oklch(0.22 0 0)",      // negro
  "oklch(0.6 0.25 340)",  // magenta
  "oklch(0.88 0.17 95)",  // amarillo
  "oklch(0.75 0.13 220)", // cian
  "oklch(0.58 0.22 27)",  // rojo
  "oklch(0.4 0.14 265)",  // azul oscuro
  "oklch(0.78 0.12 85)",  // dorado silk
]

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-12 sm:px-6 sm:pt-20">
        <h1 className="max-w-[14ch] text-4xl font-bold leading-[1.05] tracking-tight [font-stretch:115%] sm:text-6xl">
          PLA, PETG y SILK listos para tu próxima impresión
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">
          Despachamos a todo el país. {STORE.transferDiscount * 100}% off pagando con transferencia
          y {STORE.installments} cuotas sin interés en todos los productos.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-full px-7">
            <Link href="#destacados">Ver filamentos</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-7">
            <Link href="/cart">Ir al carrito</Link>
          </Button>
        </div>

        <div aria-hidden className="mt-14 -mx-4 overflow-hidden px-4 sm:mx-0 sm:px-2">
          <div className="flex gap-3 sm:gap-5">
            {SPOOLS.map((color, i) => (
              <div
                key={color}
                className="spool w-16 shrink-0 sm:w-auto sm:flex-1"
                style={{ "--c": color, "--i": i } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      </section>

      <StoreBenefits />

      <section id="destacados" className="scroll-mt-24">
        <FeaturedProducts />
      </section>
      <ChooseCategory />
    </main>
  )
}
