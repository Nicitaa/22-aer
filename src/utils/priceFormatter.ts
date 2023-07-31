const PRICE_FORMATTER = new Intl.NumberFormat(undefined, {currency: "USD", style: "currency"})
export function priceFormatter(price: number) {
  return PRICE_FORMATTER.format(price)
}
