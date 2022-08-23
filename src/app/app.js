const {getCurrentStock} = require('./stock-inventory/index.js');

const main = async () => {
    try {
        const currentStock = await getCurrentStock('KSS894454/75/76')
        console.log(currentStock)
    } catch (err) {
        console.error(err);
    }
}

main();