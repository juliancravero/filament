import { formatPrice } from "@/lib/formatPrice"
import { STORE, installmentPrice, transferPrice } from "@/lib/store-config"
import { cn } from "@/lib/utils"

type ProductPriceProps = {
  price: number
  size?: "sm" | "lg"
}

const ProductPrice = ({ price, size = "sm" }: ProductPriceProps) => {
  const large = size === "lg"
  return (
    <div className="flex flex-col gap-0.5">
      <p className={cn("font-semibold tracking-tight", large ? "text-3xl" : "text-lg")}>
        {formatPrice(price)}
      </p>
      <p className={cn("font-medium text-transfer", large ? "text-base" : "text-sm")}>
        {formatPrice(transferPrice(price))} con transferencia
      </p>
      <p className={cn("text-muted-foreground", large ? "text-sm" : "text-xs")}>
        {STORE.installments} cuotas sin interés de {formatPrice(installmentPrice(price))}
      </p>
    </div>
  )
}

export default ProductPrice
