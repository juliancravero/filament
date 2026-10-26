import { STORE } from "@/lib/store-config"
import { formatPrice } from "@/lib/formatPrice"
import { CreditCard, Landmark, ShieldCheck, Truck } from "lucide-react"

const benefits = [
  {
    icon: Truck,
    title: "Envíos a todo el país",
    text: `Gratis en ${STORE.freeShipping[0].zone} desde ${formatPrice(STORE.freeShipping[0].from)}`,
  },
  {
    icon: CreditCard,
    title: `${STORE.installments} cuotas sin interés`,
    text: "Con todos los medios habilitados",
  },
  {
    icon: Landmark,
    title: `${STORE.transferDiscount * 100}% off con transferencia`,
    text: "Se aplica al finalizar la compra",
  },
  {
    icon: ShieldCheck,
    title: `Garantía hasta ${STORE.warrantyMonths} meses`,
    text: "Te ayudamos por WhatsApp o mail",
  },
]

const StoreBenefits = () => (
  <section aria-label="Beneficios" className="border-y bg-card">
    <ul className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
      {benefits.map(({ icon: Icon, title, text }) => (
        <li
          key={title}
          className="flex items-start gap-3 px-4 py-5 sm:px-6 [&:not(:last-child)]:lg:border-r even:border-l lg:even:border-l-0 [&:nth-child(-n+2)]:border-b lg:[&:nth-child(-n+2)]:border-b-0"
        >
          <Icon className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.75} />
          <div>
            <p className="text-sm font-semibold leading-tight">{title}</p>
            <p className="mt-1 text-xs text-muted-foreground">{text}</p>
          </div>
        </li>
      ))}
    </ul>
  </section>
)

export default StoreBenefits
