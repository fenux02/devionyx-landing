// Devionyx: landingdagi arizalarni Google Sheets jadvaliga yozadi.
// Jadval ichida: Kengaytmalar > Apps Script > shu kodni joylang > Saqlang > Joylashtirish (Deploy).

const SHEET_NAME = 'Lidlar';

function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['Sana', 'Ism', 'Biznes yo\'nalishi', 'Oylik byudjet', 'Telefon', 'Holat']);
    sheet.setFrozenRows(1);
  }
  const p = e.parameter;
  sheet.appendRow([new Date(), p.name || '', p.business || '', p.budget || '', p.phone || '', 'Yangi']);
  return ContentService.createTextOutput('ok');
}
