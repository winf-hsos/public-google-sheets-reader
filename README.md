# Get your spreadsheet's data as JSON
---

A simple library to get data from a published Google Spreadsheet. All you need to do is publish the sheet on the web, copy the workbook's ID, and run the following code:

```js
const reader = require('public-google-sheets-reader');

let workbookId = "[YOUR WORKBOOK ID]";
let sheetNumber = "1"; // Change to whatever sheet you want to get

test();

async function test() {
    let data = await reader.readSheetData(workbookId, sheetNumber);
    console.dir(data);
}
```

**NOTE:** All underscores or spaces in the column's names you specified in your Google Sheet will be replaced by the Google API with nothing. So names in the JSON result will slightly differ. 