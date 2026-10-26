"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"

interface CarouselProductProps {
  name: string
  images: {
    data: {
      id: number
      attributes: { url: string }
    }[]
  }
}

const imageUrl = (url: string) => `${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`

// Galería: imagen grande + miniaturas (en mobile se deslizan horizontalmente)
const CarouselProduct = ({ images, name }: CarouselProductProps) => {
  const [active, setActive] = useState(0)
  const list = images?.data ?? []
  const current = list[active]

  return (
    <div className="flex flex-col gap-3 lg:flex-row-reverse">
      <div className="aspect-square flex-1 overflow-hidden rounded-2xl border bg-muted">
        {current && (
          <img src={imageUrl(current.attributes.url)} alt={name} className="size-full object-cover" />
        )}
      </div>

      {list.length > 1 && (
        <div className="flex gap-2 overflow-x-auto lg:w-20 lg:flex-col lg:overflow-visible">
          {list.map((image, i) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ver imagen ${i + 1} de ${list.length}`}
              aria-current={i === active}
              className={cn(
                "aspect-square w-16 shrink-0 overflow-hidden rounded-lg border-2 bg-muted transition-colors lg:w-full",
                i === active ? "border-primary" : "border-transparent hover:border-border"
              )}
            >
              <img src={imageUrl(image.attributes.url)} alt="" className="size-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default CarouselProduct
