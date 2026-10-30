export function shippingFee(orderTotal) {
  if (orderTotal >= 50) {
    return 0;
  }

  return 5;
}
