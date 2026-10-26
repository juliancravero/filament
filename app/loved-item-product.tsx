"use client"

import ProductPrice from "@/components/shared/product-price"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { useLovedProducts } from "@/hooks/use-loved-products"
import { ProductType } from "@/types/product"
import { X } from "lucide-react"
import Link from "next/link"

interface LovedItemProductProps {
  product: ProductType
}

const LovedItemProduct = ({ product }: LovedItemProductProps) => {
  const { removeLovedItem } = useLovedProducts()
  const { addItem } = useCart()
  const { slug, productName, price, origin, images } = product.attributes
  const image = images.data[0]

  const moveToCart = () => {
    addItem(product)
    removeLovedItem(product.id)
  }

  return (
    <li className="flex gap-4 py-5 first:pt-0 last:pb-0">
      <Link href={`/product/${slug}`} className="size-24 shrink-0 overflow-hidden rounded-lg bg-muted sm:size-28">
        {image && (
          <img
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.attributes.url}`}
            alt={productName}
            className="size-full object-cover"
          />
        )}
      </Link>

      <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="flex items-start justify-between gap-3">
            <Link href={`/product/${slug}`} className="font-medium leading-snug hover:underline">
              {productName}
            </Link>
            <button
              type="button"
              onClick={() => removeLovedItem(product.id)}
              aria-label={`Quitar ${productName} de favoritos`}
              className="-m-1 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:hidden"
            >
              <X className="size-4" />
            </button>
          </div>
          {origin && <p className="mb-2 mt-0.5 text-sm text-muted-foreground">{origin}</p>}
          <ProductPrice price={price} />
        </div>

        <div className="flex items-center gap-2">
          <Button className="rounded-full" onClick={moveToCart}>
            Pasar al carrito
          </Button>
          <button
            type="button"
            onClick={() => removeLovedItem(product.id)}
            aria-label={`Quitar ${productName} de favoritos`}
            className="hidden rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:block"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default LovedItemProduct
