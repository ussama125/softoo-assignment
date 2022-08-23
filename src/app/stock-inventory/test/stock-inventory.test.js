const Mocks = require("./stock-inventory.mock");
const { getCurrentStock } = require("../index.js");
const { readJSONFile } = require("../../../service/file-service");
const { CONSTANTS } = require("../../../constants/inventory-constants");

jest.mock("../../../service/file-service.js");

const mockReadFile = () => {
  readJSONFile.mockImplementation((file) => {
    if (file === CONSTANTS.STOCKS_FILE) {
      return Mocks.stock;
    } else if (file === CONSTANTS.TRANSACTION_FILE) {
      return Mocks.transactions;
    }
  });
};

describe("Stock Inventory", () => {
  describe("Get Current Stock Levels", () => {
    test("Should return current stock levels", async () => {
      mockReadFile();

      for (const stockLevel of Mocks.currentStockLevel) {
        const result = await getCurrentStock(stockLevel.sku);
        expect(result.sku).toBe(stockLevel.sku);
        expect(result.qty).toBe(stockLevel.qty);
      }
    });
    test("Should throw error - SKU not found", async () => {
      mockReadFile();

      try {
        await getCurrentStock("invalidSKU");
        // Fail test if above expression doesn't throw anything.
        expect(true).toBe(false);
      } catch (e) {
        expect(e).toBeInstanceOf(Error);
        expect(e.message).toBe("SKU Not Found");
      }
    });
  });
});
