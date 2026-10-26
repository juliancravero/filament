"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/formatPrice"
import { STORE, installmentPrice, transferPrice } from "@/lib/store-config"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import CartItem from "./components/cart-item"

export default function Page() {
  const { items, removeAll } = useCart()
  const total = items.reduce((sum, product) => sum + product.attributes.price, 0)

  // Barra de envío gratis según el primer umbral (CABA y GBA)
  const freeShipping = STORE.freeShipping[0]
  const missing = Math.max(freeShipping.from - total, 0)
  const progress = Math.min((total / freeShipping.from) * 100, 100)

  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-xl px-4 py-24 text-center">
        <ShoppingCart className="mx-auto size-10 text-muted-foreground" strokeWidth={1.5} />
        <h1 className="mt-4 text-2xl font-bold">Tu carrito está vacío</h1>
        <p className="mt-2 text-muted-foreground">Elegí tus filamentos y aparecen acá.</p>
        <Button asChild className="mt-6 rounded-full px-6">
          <Link href="/">Ver filamentos</Link>
        </Button>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8 flex items-end justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight [font-stretch:110%]">Carrito</h1>
        <button
          type="button"
          onClick={removeAll}
          className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          Vaciar carrito
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <ul className="divide-y rounded-xl border bg-card p-5 sm:p-6">
          {items.map((item) => (
            <CartItem key={item.id} product={item} />
          ))}
        </ul>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border bg-card p-5 sm:p-6">
            <h2 className="font-semibold">Resumen</h2>

            <div className="mt-4 rounded-lg bg-muted p-3 text-sm">
              <p>
                {missing > 0 ? (
                  <>Te faltan <strong>{formatPrice(missing)}</strong> para envío gratis en {freeShipping.zone}.</>
                ) : (
                  <>Tenés <strong>envío gratis</strong> en {freeShipping.zone}.</>
                )}
              </p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-background" role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100} aria-label="Progreso para envío gratis">
                <div className="h-full rounded-full bg-primary transition-[width]" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <dl className="mt-5 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Subtotal ({items.length} {items.length === 1 ? "producto" : "productos"})</dt>
                <dd>{formatPrice(total)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Envío</dt>
                <dd className="text-muted-foreground">Se calcula al finalizar</dd>
              </div>
            </dl>

            <div className="mt-4 border-t pt-4">
              <div className="flex items-baseline justify-between">
                <span className="font-semibold">Total</span>
                <span className="text-2xl font-bold tracking-tight">{formatPrice(total)}</span>
              </div>
              <p className="mt-1 text-right text-sm font-medium text-transfer">
                {formatPrice(transferPrice(total))} con transferencia
              </p>
              <p className="text-right text-xs text-muted-foreground">
                o {STORE.installments} cuotas sin interés de {formatPrice(installmentPrice(total))}
              </p>
            </div>

            <Button size="lg" className="mt-6 w-full rounded-full" onClick={() => console.log("compra")}>
              Finalizar compra
            </Button>
            <Button asChild variant="ghost" className="mt-2 w-full rounded-full">
              <Link href="/">Seguir comprando</Link>
            </Button>
          </div>
        </aside>
      </div>
    </main>
  )
}
