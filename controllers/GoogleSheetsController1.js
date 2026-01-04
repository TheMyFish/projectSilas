const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require("./client_secret.json");

GoogleSheetsController1 = {
  getCampaings: async function accessSpreadsheet(amount) {
    const campaigns = [];
    const doc = new GoogleSpreadsheet(
      "1qFJzC_RkAjwMLu2xFMmZORFAoFW0AtHByDlSkbrJ1X4"
    );
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const campaingsSheet = doc.sheetsByIndex[1];
    await campaingsSheet.loadCells({
      startRowIndex: 1,
      endRowIndex: 1 + amount,
      startColumnIndex: 13,
      endColumnIndex: 14
    });
    for (let i = 0; i < amount; i++) {
      const cell = campaingsSheet.getCell(1 + i, 13);
      let campaign = JSON.parse(cell.value);
      campaigns.push(campaign);
    }
    return campaigns;
  }
};

module.exports = GoogleSheetsController1;