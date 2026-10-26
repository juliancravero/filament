"use client"

import { Button } from "@/components/ui/button"
import { useLovedProducts } from "@/hooks/use-loved-products"
import { Heart } from "lucide-react"
import Link from "next/link"
import LovedItemProduct from "./components/loved-item-product"

export default function Page() {
  const { lovedItems } = useLovedProducts()

  if (lovedItems.length === 0) {
    return (
      <main className="mx-auto max-w-xl px-4 py-24 text-center">
        <Heart className="mx-auto size-10 text-muted-foreground" strokeWidth={1.5} />
        <h1 className="mt-4 text-2xl font-bold">Todavía no guardaste favoritos</h1>
        <p className="mt-2 text-muted-foreground">
          Tocá el corazón de un producto para tenerlo a mano acá.
        </p>
        <Button asChild className="mt-6 rounded-full px-6">
          <Link href="/">Ver filamentos</Link>
        </Button>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <h1 className="mb-8 text-3xl font-bold tracking-tight [font-stretch:110%]">Favoritos</h1>
      <ul className="divide-y rounded-xl border bg-card p-5 sm:p-6">
        {lovedItems.map((item) => (
          <LovedItemProduct key={item.id} product={item} />
        ))}
      </ul>
    </main>
  )
}
