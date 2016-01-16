/**
 * This script declares all the necessary constants and function
 */

var libraryName = "Common AppScript"


/**
 * Logger function to log the start of a function - For debugging purposes
 * @param nameOfFunction Include the name of the function to be declared in the logs
 */
function logFunctionStart(nameOfFunction){
  Logger.log("[" + libraryName + "] " + nameOfFunction + " started.");
}

/**
 * Logger function to log the stopping of a function - For debugging purposes
 * @param nameOfFunction Include the name of the function to be declared in the logs
 */
function logFunctionStop(nameOfFunction){
  Logger.log("[" + libraryName + "] " + nameOfFunction + " stopped.")
}

/**
 * Logger function to log the intemediate results within a function
 * For debugging purposes
 * @param nameOfFunction
 * @param description
 * @param value Value to be printed
 */
function logVariable(nameOfFunction, description, value){
  Logger.log("[" + libraryName + "] " + description + ": " + value)
}