"use client"

import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/formatPrice"
import { transferPrice } from "@/lib/store-config"
import { ProductType } from "@/types/product"
import { X } from "lucide-react"
import Link from "next/link"

interface CartItemProps {
  product: ProductType
}

const CartItem = ({ product }: CartItemProps) => {
  const { removeItem } = useCart()
  const { slug, productName, price, origin, images } = product.attributes
  const image = images.data[0]

  return (
    <li className="flex gap-4 py-5 first:pt-0 last:pb-0">
      <Link href={`/product/${slug}`} className="size-20 shrink-0 overflow-hidden rounded-lg bg-muted sm:size-24">
        {image && (
          <img
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.attributes.url}`}
            alt={productName}
            className="size-full object-cover"
          />
        )}
      </Link>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <Link href={`/product/${slug}`} className="font-medium leading-snug hover:underline">
            {productName}
          </Link>
          <button
            type="button"
            onClick={() => removeItem(product.id)}
            aria-label={`Quitar ${productName} del carrito`}
            className="-m-1 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>
        {origin && <p className="mt-0.5 text-sm text-muted-foreground">{origin}</p>}
        <div className="mt-auto pt-2">
          <p className="font-semibold">{formatPrice(price)}</p>
          <p className="text-xs text-transfer">{formatPrice(transferPrice(price))} con transferencia</p>
        </div>
      </div>
    </li>
  )
}

export default CartItem
