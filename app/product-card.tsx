"use client"

import ProductPrice from "@/components/shared/product-price"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { useLovedProducts } from "@/hooks/use-loved-products"
import { cn } from "@/lib/utils"
import { ProductType } from "@/types/product"
import { Heart, ShoppingCart } from "lucide-react"
import Link from "next/link"

type ProductCardProps = {
  product: ProductType
}

const imageUrl = (url: string) => `${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart()
  const { lovedItems, addLovedItem, removeLovedItem } = useLovedProducts()
  const { slug, productName, price, origin, images } = product.attributes
  const href = `/product/${slug}`
  const [first, second] = images.data
  const isLoved = lovedItems.some((item) => item.id === product.id)

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border bg-card transition-colors hover:border-primary/40">
      <div className="relative">
        <Link href={href} className="relative block aspect-square overflow-hidden bg-muted">
          {first && (
            <img src={imageUrl(first.attributes.url)} alt={productName} className="size-full object-cover" />
          )}
          {second && (
            <img
              src={imageUrl(second.attributes.url)}
              alt=""
              className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          )}
        </Link>

        {origin && (
          <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold backdrop-blur">
            {origin}
          </span>
        )}

        <button
          type="button"
          aria-label={isLoved ? "Quitar de favoritos" : "Agregar a favoritos"}
          aria-pressed={isLoved}
          onClick={() => (isLoved ? removeLovedItem(product.id) : addLovedItem(product))}
          className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-background/90 backdrop-blur transition-transform hover:scale-105"
        >
          <Heart className={cn("size-4", isLoved && "fill-primary text-primary")} />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <Link href={href} className="line-clamp-2 font-medium leading-snug hover:underline">
          {productName}
        </Link>
        <ProductPrice price={price} />
        <Button className="mt-auto w-full rounded-full" onClick={() => addItem(product)}>
          <ShoppingCart className="size-4" />
          Agregar al carrito
        </Button>
      </div>
    </article>
  )
}

export default ProductCard
