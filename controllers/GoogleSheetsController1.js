const GoogleSpreadSheet = require("google-spreadsheet");
const { promisify } = require("util");
const creds = require("./client_secret.json");

GoogleSheetsController1 = {
  getCampaings: async function accessSpreadsheet(amount) {
    const campaigns = [];
    const doc = new GoogleSpreadSheet(
      "1qFJzC_RkAjwMLu2xFMmZORFAoFW0AtHByDlSkbrJ1X4"
    );
    await promisify(doc.useServiceAccountAuth)(creds);
    const info = await promisify(doc.getInfo)();
    const campaingsSheet = info.worksheets[1];
    const cells = await promisify(campaingsSheet.getCells)({
      "min-row": 2,
      "max-row": 2 + (amount - 1),
      "min-col": 14,
      "max-col": 14
    });
    for (const cell of cells) {
      let campaign = JSON.parse(cell.value);
      campaigns.push(campaign);
    }
    return campaigns;
  }
};

module.exports = GoogleSheetsController;