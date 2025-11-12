export function formatPrice(price: number) {
    const priceFormated = new Intl.NumberFormat('es-AR',{
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2,
    })
    const finalPrice = priceFormated.format(price)

    return finalPrice
}
