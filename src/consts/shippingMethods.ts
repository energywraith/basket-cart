export const internationalShippingMethods = [
  { label: "DHL International Shipping", value: "DHLInternational" },
];

export const polishShippingMethods = [{ label: "Poczta Polska", value: "PP" }];

export const usaShippingMethods = [
  { label: "USPS Retail Ground", value: "USPS" },
];

export const shippingMethods = [
  ...internationalShippingMethods,
  ...polishShippingMethods,
  ...usaShippingMethods,
];
