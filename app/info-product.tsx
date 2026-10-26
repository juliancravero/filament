"use client"

import ProductPrice from "@/components/shared/product-price"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { useLovedProducts } from "@/hooks/use-loved-products"
import { formatPrice } from "@/lib/formatPrice"
import { STORE } from "@/lib/store-config"
import { cn } from "@/lib/utils"
import { ProductType } from "@/types/product"
import { Heart, ShieldCheck, ShoppingCart, Truck } from "lucide-react"

export type InfoProductProps = {
  product: ProductType
}

const InfoProduct = ({ product }: InfoProductProps) => {
  const { addItem } = useCart()
  const { lovedItems, addLovedItem, removeLovedItem } = useLovedProducts()
  const { productName, origin, price, description } = product.attributes
  const isLoved = lovedItems.some((item) => item.id === product.id)

  return (
    <div className="flex flex-col gap-6">
      <div>
        {origin && (
          <span className="mb-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
            {origin}
          </span>
        )}
        <h1 className="text-3xl font-bold leading-tight tracking-tight [font-stretch:108%]">
          {productName}
        </h1>
      </div>

      <ProductPrice price={price} size="lg" />

      <div className="flex gap-3">
        <Button size="lg" className="flex-1 rounded-full" onClick={() => addItem(product)}>
          <ShoppingCart className="size-4" />
          Agregar al carrito
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="rounded-full px-4"
          aria-label={isLoved ? "Quitar de favoritos" : "Agregar a favoritos"}
          aria-pressed={isLoved}
          onClick={() => (isLoved ? removeLovedItem(product.id) : addLovedItem(product))}
        >
          <Heart className={cn("size-5", isLoved && "fill-primary text-primary")} />
        </Button>
      </div>

      <ul className="divide-y rounded-xl border bg-card text-sm">
        <li className="flex gap-3 p-4">
          <Truck className="size-5 shrink-0 text-primary" strokeWidth={1.75} />
          <div>
            <p className="font-medium">Envíos a todo el país</p>
            <p className="text-muted-foreground">
              Gratis en {STORE.freeShipping.map((z) => `${z.zone} desde ${formatPrice(z.from)}`).join(" e ")}.
            </p>
          </div>
        </li>
        <li className="flex gap-3 p-4">
          <ShieldCheck className="size-5 shrink-0 text-primary" strokeWidth={1.75} />
          <div>
            <p className="font-medium">Garantía hasta {STORE.warrantyMonths} meses</p>
            <p className="text-muted-foreground">Si algo falla, te acompañamos hasta resolverlo.</p>
          </div>
        </li>
      </ul>

      {description && (
        <section>
          <h2 className="mb-2 font-semibold">Descripción</h2>
          <p className="max-w-prose whitespace-pre-line leading-relaxed text-muted-foreground">
            {description}
          </p>
        </section>
      )}
    </div>
  )
}

export default InfoProduct
