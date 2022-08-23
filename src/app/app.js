const { getCurrentStock } = require("./stock-inventory/index.js");

const main = async () => {
  try {
    const currentStock = await getCurrentStock("LTV719449/39/39");
    console.log(currentStock);
  } catch (err) {
    console.error(err);
  }
};

main();
