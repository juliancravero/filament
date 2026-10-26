"use client"

import { useGetCategoryProducts } from "@/api/getCategoryProducts"
import SkeletonSchema from "@/components/skeletonSchema"
import { Button } from "@/components/ui/button"
import { ProductType } from "@/types/product"
import { ResponseType } from "@/types/response"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useState } from "react"
import FiltersControlCategory from "./components/filters-control-category"
import ProductCard from "./components/product-card"

export default function Page() {
  const { categorySlug } = useParams()
  const { result, loading }: ResponseType = useGetCategoryProducts(categorySlug as string)
  const [filterOrigin, setFilterOrigin] = useState("")

  const products: ProductType[] = !loading && Array.isArray(result) ? result : []
  const filteredProducts =
    filterOrigin === "" ? products : products.filter((p) => p.attributes.origin === filterOrigin)

  const categoryName = products[0]?.attributes.category?.data?.attributes?.categoryName

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <nav aria-label="Ruta" className="mb-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Inicio</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{categoryName ?? "Categoría"}</span>
      </nav>

      <header className="mb-8 flex flex-wrap items-end justify-between gap-2 border-b pb-6">
        <h1 className="text-3xl font-bold tracking-tight [font-stretch:110%] sm:text-4xl">
          {categoryName ? `Filamento ${categoryName}` : "Filamentos"}
        </h1>
        {!loading && (
          <p className="text-sm text-muted-foreground">
            {filteredProducts.length} {filteredProducts.length === 1 ? "producto" : "productos"}
          </p>
        )}
      </header>

      <div className="flex flex-col gap-8 lg:flex-row">
        <FiltersControlCategory filterOrigin={filterOrigin} setFilterOrigin={setFilterOrigin} />

        <div className="flex-1">
          {loading && <SkeletonSchema grid={3} />}

          {!loading && filteredProducts.length > 0 && (
            <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {!loading && filteredProducts.length === 0 && (
            <div className="rounded-xl border border-dashed p-10 text-center">
              <p className="font-medium">No hay filamentos con este peso.</p>
              <p className="mt-1 text-sm text-muted-foreground">Probá con otro filtro o mirá todos.</p>
              <Button variant="outline" className="mt-5 rounded-full" onClick={() => setFilterOrigin("")}>
                Ver todos
              </Button>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
