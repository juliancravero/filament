"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "PLA+",
    href: "/category/PLA+",
    description:
      "Filamento fácil de imprimir, mejorado con mayor resistencia y acabado suave. Ideal para piezas funcionales y detalladas.",
  },
  {
    title: "SILK",
    href: "/category/SILK",
    description:
      "Filamento con acabado brillante tipo seda, perfecto para figuras decorativas y modelos que necesitan brillar.",
  },
  {
    title: "ASA",
    href: "/category/ASA",
    description:
      "Resistente a los rayos UV y al clima, ideal para piezas expuestas al exterior sin preocuparte por la deformación.",
  },
  {
    title: "ABS",
    href: "/category/ABS",
    description: "Filamento técnico, fuerte y duradero. Perfecto para piezas mecánicas o resistentes al calor.",
  },
  {
    title: "PETG",
    href: "/category/PETG",
    description:
      "Combina resistencia mecánica con cierta flexibilidad. Ideal para piezas funcionales y resistentes a químicos.",
  },
  {
    title: "TPU",
    href: "/category/TPU",
    description:
      "Filamento flexible y elástico. Perfecto para fundas, amortiguadores, y piezas que necesitan doblarse sin romperse.",
  },
    {
    title: "FIBRA DE CARBONO",
    href: "/category/FIBRA DE CARBONO:",
    description:
      "Filamento reforzado para máxima rigidez y resistencia. Ligero pero ultra resistente, ideal para aplicaciones técnicas.",
  },
  {
    title: "SILK TRICOLOR",
    href: "/category/SILK TRICOLOR",
    description:
      "Un espectáculo visual con colores que cambian según el ángulo. Ideal para piezas artísticas o llamativas.",
  },
]

const MenuList = () => {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
        {/*  <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      Inicio
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Explorá nuestras soluciones en impresión 3D, desde materiales premium hasta soporte personalizado.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/shop" title="Tienda">
                Descubrí todos nuestros filamentos y accesorios en un solo lugar. ¡Listos para imprimir sin complicaciones!
              </ListItem>
              <ListItem href="/offers" title="Ofertas">
                Aprovechá promociones y descuentos exclusivos en nuestros productos de primera calidad.
              </ListItem>
              <ListItem href="/products" title="Productos">
                Conocé toda nuestra gama de filamentos y soluciones pensadas para cada tipo de impresión.
              </ListItem>
            </ul>
          </NavigationMenuContent>*/}
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Filamentos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          {/*<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/downloads">Descargas</Link>
          </NavigationMenuLink>*/}
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Contacto</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Sobre Nosotros</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
               <NavigationMenuItem>
          {/*<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/blog">Blog</Link>
          </NavigationMenuLink>*/}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export default MenuList