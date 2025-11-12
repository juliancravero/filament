"use client"
import { useRouter } from "next/navigation";
import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import ToggleTheme from "./toggle-theme";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import Image from 'next/image';

const Navbar = () => {
    const router = useRouter()
    const cart = useCart()
    const {lovedItems} = useLovedProducts()

    return (
        <div className='flex items-center justify-between p-4 nx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl'>
            <div onClick={() => router.push("/")} className="cursor-pointer">
                <Image 
                    src="/logosGst33.png"
                    alt="GST3D Logo"
                    width={120} 
                    height={40}
                />
            </div>
            {/*<div className="z-50 items-center justify-between hidden sm:flex">
                <MenuList />
            </div>
            <div className="flex sm:hidden">
                <ItemsMenuMobile />
            </div>
            <div className="flex items-center justify-between gap-2 sm:gap-7">
                {cart.items.length == 0 ?
                    <ShoppingCart strokeWidth="1" 
                        className="cursor-pointer" 
                        onClick={() => router.push("/cart")}
                    />
                    : (
                        <div className="flex gap-1" onClick={() => router.push("/cart")}>
                            <BaggageClaim strokeWidth={1} className="cursor-pointer" />
                            <span>{cart.items.length}</span>
                        </div>

                )}
                <Heart strokeWidth="1"
                    className={`cursor-pointer ${lovedItems.length > 0 && 'fill-primary'}`} 
                    onClick={() => router.push("/loved-products")}
                />
                <User strokeWidth={1} className="cursor-pointer" />

                <ToggleTheme />
            </div>*/}
        </div>
    );
};

export default Navbar;