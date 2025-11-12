"use client"
import { useLovedProducts } from "@/hooks/use-loved-products"
import LovedItemProduct from "./components/loved-item-product"

export default function Page() {
    const {lovedItems} = useLovedProducts()

    return (
        <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 lg:px-8 p-6 rounded-lg bg-white/30 dark:bg-white/10 backdrop-blur-md shadow-xl transition duration-200">
            <h1 className="sm:text-2xl py-4">
                Productos que te gustan
            </h1>
        
            <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 lg:px-8 p-6 rounded-lg bg-white/30 dark:bg-white/10 backdrop-blur-md shadow-xl transition duration-200">
                <div>
                    {lovedItems.length == 0 && (
                        <p>No hay productos en la sección</p>
                    )}
                    <ul>
                        {lovedItems.map((item) =>(
                            <LovedItemProduct key={item.id} product={item} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}