exports.stock = [
  { sku: "SKU1", stock: 10 },
  { sku: "SKU2", stock: 20 },
];

exports.transactions = [
  { sku: "SKU1", type: "order", qty: 1 },
  { sku: "SKU2", type: "order", qty: 2 },
  { sku: "SKU2", type: "refund", qty: 1 },
  { sku: "SKU3", type: "order", qty: 5 },
  { sku: "SKU4", type: "refund", qty: 5 },
];

exports.currentStockLevel = [
  { sku: "SKU1", qty: 9 },
  { sku: "SKU2", qty: 19 },
  { sku: "SKU3", qty: 0 },
  { sku: "SKU4", qty: 5 },
];
