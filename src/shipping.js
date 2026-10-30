export function shippingFee(orderTotal) {
  if (orderTotal >= 50) {
    return 0;
  }

  return 5;
}

// RELEASEBRIDGE_PUBLIC_BETA_NEGATIVE_CONTROL_DO_NOT_MERGE
