const fs = require('fs/promises');
const {CONSTANTS} = require('../constants/inventory-constants.js');

exports.readJSONFile = async (file) => {
    try {
        // For large JSON files we can use https://github.com/dominictarr/JSONStream
        const data = await fs.readFile(CONSTANTS.FILES_BASE_PATH + file, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        throw err;
    }
}
