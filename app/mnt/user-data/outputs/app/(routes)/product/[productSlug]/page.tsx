"use client"

import { useGetProductBySlug } from "@/api/getProductBySlug"
import { Button } from "@/components/ui/button"
import { ResponseType } from "@/types/response"
import Link from "next/link"
import { useParams } from "next/navigation"
import CarouselProduct from "./components/carousel-product"
import InfoProduct from "./components/info-product"
import SkeletonProduct from "./components/skeleton-products"

export default function Page() {
  const { productSlug } = useParams()
  const { result }: ResponseType = useGetProductBySlug(productSlug as string)

  if (result == null) return <SkeletonProduct />

  const product = result[0]

  if (!product) {
    return (
      <main className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="text-2xl font-bold">No encontramos este producto</h1>
        <p className="mt-2 text-muted-foreground">Puede que ya no esté disponible.</p>
        <Button asChild className="mt-6 rounded-full">
          <Link href="/">Ver filamentos</Link>
        </Button>
      </main>
    )
  }

  const category = product.attributes.category?.data?.attributes

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <nav aria-label="Ruta" className="mb-8 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Inicio</Link>
        {category && (
          <>
            <span className="mx-2">/</span>
            <Link href={`/category/${category.slug}`} className="hover:text-foreground">
              {category.categoryName}
            </Link>
          </>
        )}
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.attributes.productName}</span>
      </nav>

      <div className="grid gap-8 md:grid-cols-2 lg:gap-14">
        <CarouselProduct images={product.attributes.images} name={product.attributes.productName} />
        <InfoProduct product={product} />
      </div>
    </main>
  )
}
