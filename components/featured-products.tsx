"use client"

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts"; 
import { ResponseType } from "@/types/response";
import SkeletonSchema from "./skeletonSchema"; 
import { ProductType } from "@/types/product"; 
import { Card, CardContent } from "./ui/card"; 
import { useRouter } from "next/navigation";

// ESTE ES EL MAPA DE DOMINIOS
const DOMAIN_MAP: { [key: string]: string } = {
    "ar": "www.gst3d.com.ar",
    "py": "www.gst3d.com.py",
    "eu": "www.gst3d.eu",
};


const getRegionName = (code: string): string => {
    switch (code) {
        case "ar": return "Argentina";
        case "py": return "Paraguay";
        case "eu": return "Europe"; 
        default: return code.toUpperCase();
    }
};

// 🚩 Mapa de imágenes para las banderas.
const FLAG_IMAGE_MAP: { [key: string]: string } = {
    "ar": "/ar.png", // Reemplaza con tu ruta real si es necesario
    "py": "/py.png", // Reemplaza con tu ruta real si es necesario
    "eu": "/eu.png", // Reemplaza con tu ruta real si es necesario
};


const FeaturedProducts = () => {
    // Las dejamos por si el componente original las usaba
    const { loading, result }: ResponseType = useGetFeaturedProducts()
    const router = useRouter()
    
    // Función para manejar la navegación A LA HOME
    const handleNavigation = (origin: string) => {
        const fullDomain = DOMAIN_MAP[origin.toLowerCase()];

        if (fullDomain) {
            window.location.href = `https://${fullDomain}`; 
        } else {
            console.error(`Dominio no encontrado en DOMAIN_MAP para el origen: ${origin}`);
        }
    };
    
    const domainKeys = Object.keys(DOMAIN_MAP);
    return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 px-4 sm:px-6">
        <div
        className="
            flex flex-col 
            gap-8
            w-full max-w-md
            mx-auto
            items-center sm:items-start
            scale-110
            sm:translate-x-28     /* mueve más a la derecha */
            sm:translate-y-20     /* baja el bloque */
        "
        >
        {domainKeys.map((origin) => (
            <button
            key={origin}
            className="
                flex items-center
                gap-5 p-6
                bg-gray-800/80 hover:bg-gray-700/90
                rounded-lg
                transition duration-300 ease-in-out
                text-white text-2xl
                justify-start
                w-72
                shadow-lg shadow-black/40
            "
            onClick={() => handleNavigation(origin)}
            >
            {FLAG_IMAGE_MAP[origin] ? (
                <img
                src={FLAG_IMAGE_MAP[origin]}
                alt={`${getRegionName(origin)} flag`}
                className="w-12 h-12 rounded-full object-cover"
                />
            ) : (
                <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-xs">
                {origin.toUpperCase()}
                </div>
            )}
            <span className="font-semibold">{getRegionName(origin)}</span>
            </button>
        ))}
        </div>
    </div>
    );

}

export default FeaturedProducts;