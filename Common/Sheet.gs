/**
 * This script involves the Spreadsheet Service
 * Certain functions which cannot be used in generic app scripts: Refer to bound scripts
 * Hence, due to that limitation, every function within the script has a spreadsheet id requirement
 */

/**
 * Get a table of data from single reference point
 * Single reference point is on the top left hand side
 * @param {string} The ID of the spreadsheet to grab the data from
 * @param {string} The name of sheet to take the data from 
 * @param {string} The reference point from where to take the data from
 * @return {object} Returns a 2D array of data
 * @examples
 * var dataTable = getDataTable("0000", "A5")
 */
function getDataTable(spreadsheetID, sheetName, referencePoint){
  // Log start of function
  nameOfFunction = "getDataTable";
  logFunctionStart(nameOfFunction);
  
  // Initialize spreadsheet
  var spreadsheet = SpreadsheetApp.openById(spreadsheetID);
  var sheet = spreadsheet.getSheetByName(sheetName);
  
  // Grab current row and column
  var range = sheet.getRange(referencePoint);
  var currentRow = range.getRow();
  var currentColumn = range.getColumn();
  
  // Grab max column
  var i = 1;
  while(sheet.getRange(currentRow, currentColumn + i).getValue() != ""){
    i = i + 1;
  }
  var noOfColumns = i;
  logVariable(nameOfFunction, "Number of columns", noOfColumns);
  
  // Grab max row
  var j =1
  while(sheet.getRange(currentRow + j, currentColumn).getValue() != ""){
    j = j + 1;
  }
  var noOfRows = j;
  logVariable(nameOfFunction, "Number of rows", noOfRows);
  
  // Grab the full dataset
  data = sheet.getSheetValues(currentRow, currentColumn, noOfRows, noOfColumns);
  
  // Stop logging
  logFunctionStop(nameOfFunction);
  
  // Return values
  return(data)
}



/**
 * Get a single column of data from single reference point
 * Single reference point is on the top
 * @param {string} The ID of the spreadsheet to grab the data from
 * @param {string} The reference point from where to take the data from
 * @return {Array<string>} Returns an array of data
 */
function getDataList(spreadsheetID, sheetName, referencePoint){
  // Log start of function
  nameOfFunction = "getDataList";
  logFunctionStart(nameOfFunction);
  
  // Initialize spreadsheet
  var spreadsheet = SpreadsheetApp.openById(spreadsheetID);
  var sheet = spreadsheet.getSheetByName(sheetName);
  
  // Grab current row and column
  var range = sheet.getRange(referencePoint);
  var currentRow = range.getRow();
  var currentColumn = range.getColumn();
  
  // Grab max row
  var j =1
  while(sheet.getRange(currentRow + j, currentColumn).getValue() != ""){
    j = j + 1;
  }
  var noOfRows = j;
  logVariable(nameOfFunction, "Number of rows", noOfRows);
  
  // Grab the full dataset
  data = sheet.getSheetValues(currentRow, currentColumn, noOfRows, 1);
  
  // Stop logging
  logFunctionStop(nameOfFunction);
  
  // Return values
  return(data)
}

/**
 * Set a 2D array to a spreadsheet
 * Single reference point is on the left top hand corner
 * @param {string} The ID of the spreadsheet to grab the data from
 * @param {string} The name of sheet to put the data into
 * @param {object} The 2D array to be put into the sheet
 * @param {string} The reference point from where to take the data from
 */
function setDataTable(spreadsheetID, sheetName, array2D, referencePoint){
  // Log start of function
  nameOfFunction = "setDataTable";
  logFunctionStart(nameOfFunction);
  
  // Initialize spreadsheet
  var spreadsheet = SpreadsheetApp.openById(spreadsheetID);
  var sheet = spreadsheet.getSheetByName(sheetName);
  
  // Grab current row and column
  var range = sheet.getRange(referencePoint);
  var currentRow = range.getRow();
  var currentColumn = range.getColumn();
  
  // Get the max rows and columns of the 2D array
  var maxRow = array2D.length;
  var maxColumn =array2D[0].length;
  logVariable(nameOfFunction, "Number of rows in array", maxRow);
  logVariable(nameOfFunction, "Number of columns in array", maxColumn);
  
  // Print data to sheet
  var printRow = 0;
  var printColumn = 0;
  while(printRow < maxRow){
    while(printColumn < maxColumn){
      sheet.getRange(currentRow + printRow, currentColumn + printColumn).setValue(array2D[printRow][printColumn])
      printColumn = printColumn + 1;
    }
    printRow = printRow + 1;
    printColumn = 0;
  }
  
  // Stop logging
  logFunctionStop(nameOfFunction);
}

/**
 * Set an array to a spreadsheet
 * Single reference point is on the top
 * @param {string} The ID of the spreadsheet to grab the data from
 * @param {string} The name of sheet to put the data into
 * @param {Array<string>} The array to be put into the sheet
 * @param {string} The reference point from where to take the data from
 */
function setDataList(spreadsheetID, sheetName, array, referencePoint){
  // Log start of function
  nameOfFunction = "setDataList";
  logFunctionStart(nameOfFunction);
  
  // Initialize spreadsheet
  var spreadsheet = SpreadsheetApp.openById(spreadsheetID);
  var sheet = spreadsheet.getSheetByName(sheetName);
  
  // Grab current row and column
  var range = sheet.getRange(referencePoint);
  var currentRow = range.getRow();
  var currentColumn = range.getColumn();
  
  // Get the max rows and columns of the array
  var maxRow = array.length;
  logVariable(nameOfFunction, "Number of rows in array", maxRow);
  
  // Print data to sheet
  var printRow = 0;
  while(printRow < maxRow){
    sheet.getRange(currentRow + printRow, currentColumn).setValue(array[printRow])
    printRow = printRow + 1;
  }
  
  // Stop logging
  logFunctionStop(nameOfFunction);
}

/**
 * Set headers to array values for easier manipulation
 * @param {string} spreadsheetID ID of spreadsheet to grab the data from
 * @param {string} sheetname Name of sheet in the spreadsheet ID to grab teh data from
 * @param {string} referencePoint Reference Point e.g. "A1"
 */
function getDataTable_namedArray(spreadsheetID, sheetName, referencePoint){
  // Log start of function
  nameOfFunction = "getDataTable_namedArray";
  logFunctionStart(nameOfFunction);
  
  // Initialize spreadsheet
  var spreadsheet = SpreadsheetApp.openById(spreadsheetID);
  var sheet = spreadsheet.getSheetByName(sheetName);
  
  // Grab current row and column
  var range = sheet.getRange(referencePoint);
  var currentRow = range.getRow();
  var currentColumn = range.getColumn();
  
  // Grab max column
  var i = 1;
  while(sheet.getRange(currentRow, currentColumn + i).getValue() != ""){
    i = i + 1;
  }
  var noOfColumns = i;
  logVariable(nameOfFunction, "Number of columns", noOfColumns);
  
  // Grab max row
  var j =1
  while(sheet.getRange(currentRow + j, currentColumn).getValue() != ""){
    j = j + 1;
  }
  var noOfRows = j - 1; // Take into account of header row
  logVariable(nameOfFunction, "Number of rows", noOfRows);
  
  // Grab the full dataset
  // Added 1 to current row to take into account of the header row
  var dataRaw = sheet.getSheetValues(currentRow + 1, currentColumn, noOfRows, noOfColumns);
  
  // Grab the header row
  var dataHeader = sheet.getSheetValues(currentRow, currentColumn, 1, noOfColumns)
  
  // Assign the data to appropiate header key
  var data = []
  var k = 0
  var m = 0
  while(k < dataRaw.length){
    data.push({})
    while(m < dataHeader[0].length){
      data[k][dataHeader[0][m]] = dataRaw[k][m]
      m = m + 1
    }
    m = 0
    k = k + 1
  }
  
  Logger.log("SampleData")
  Logger.log(data[0]);
  
  logVariable(nameOfFunction, "List of keys in this array", Object.keys(data[0]))
  
  // Stop logging
  logFunctionStop(nameOfFunction);
  
  // Return values
  return(data)
}

