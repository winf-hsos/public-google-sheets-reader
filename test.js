const reader = require('./index');

let workbookId = "1swfLPnEMXuUB0s9y3YM21RE34h--K6W7ppeYSPwZYWw";
let sheetNumber = "2";

test();

async function test() {
    let data = await reader.readSheetData(workbookId, sheetNumber);
    console.dir(data);
}
