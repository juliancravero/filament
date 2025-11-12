import {create} from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'
import { toast } from "sonner"
import { ProductType } from "@/types/product";

interface UseLovedProductsType {
    lovedItems: ProductType[],
    addLovedItem: (data: ProductType) => void
    removeLovedItem: (id: number) => void
}

export const useLovedProducts = create(persist<UseLovedProductsType>((set,get) =>({
    lovedItems: [],
    addLovedItem: (data: ProductType) => {
       const currentLovedItems = get().lovedItems;
       const existingItem = currentLovedItems.find((item) => item.id === data.id) 
    
        if(existingItem) {
            return toast.error("El producto ya existe en la lista <3")
    
        }

        set({
            lovedItems: [ ...get().lovedItems, data]
        })
        toast.success("Producto añadido a la lista <3")
    },
    removeLovedItem: (id: number) => {
        set({lovedItems: [ ...get().lovedItems.filter((item) => item.id != id)] })
        toast.success("Producto eliminado de la lista </3")
    }

}),{
    name: "loved-products-storage",
    storage: createJSONStorage(() => localStorage)
}))