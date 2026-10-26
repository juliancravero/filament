// Condiciones comerciales de la tienda. Cambiá los valores acá y se actualizan en todo el sitio.
export const STORE = {
  transferDiscount: 0.1, // 10% off con transferencia
  installments: 3, // cuotas sin interés
  freeShipping: [
    { zone: "CABA y GBA", from: 50000 },
    { zone: "Interior", from: 120000 },
  ],
  warrantyMonths: 18,
}

export const transferPrice = (price: number) =>
  Math.round(price * (1 - STORE.transferDiscount))

export const installmentPrice = (price: number) =>
  price / STORE.installments
