const {readJSONFile} = require('../../service/file-service.js');
const {CONSTANTS} = require('../../constants/inventory-constants.js');
const {TRANSACTION_TYPE} = require('../../enum/transaction-type.js');

exports.getCurrentStock = async (sku) => {
    const stock = await readJSONFile(CONSTANTS.STOCKS_FILE)
    const transactions = await readJSONFile(CONSTANTS.TRANSACTION_FILE)

    const skuStock = stock.find((obj) => obj.sku === sku);
    const skuTransactions = transactions.filter((obj) => obj.sku === sku);

    if (!skuStock && !skuTransactions.length) {
        throw new Error('SKU Not Found');
    }

    let currentStock = skuStock ? skuStock.stock : 0;

    for (const transaction of skuTransactions) {
        if (transaction.type === TRANSACTION_TYPE.ORDER) {
            currentStock -= transaction.qty;
        } else if (transaction.type === TRANSACTION_TYPE.REFUND) {
            currentStock += transaction.qty;
        }
    }

    // current stock can not be a negative value
    currentStock = currentStock >= 0 ? currentStock : 0;

    return {sku, qty: currentStock}
}
