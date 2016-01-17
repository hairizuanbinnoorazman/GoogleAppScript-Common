/**
 * This script involves file manipulation in Google Drive
 * 
 * 
 */

/**
 * Move File To Folder when provided the name of the file.
 * This method takes the first of the files that has that name and sends 
 * it to the respective folder.
 * @param nameOfFile Name of the file to be moved to the folder
 * @param idOfFolder ID of the folder that is to be moved to
 * @return success True of False condition whether the operation is successful.
 */
function moveToFolder_byName(nameOfFile, idOfFolder){
  // Logging functionality
  nameOfFunction = "moveToFolder_byName"
  logFunctionStart(nameOfFunction)
  
  // Get files with the name of file provided
  var files = DriveApp.getFilesByName(nameOfFile);
  
  // Get the target folder
  var targetFolder = DriveApp.getFolderById(idOfFolder);
  
  // Grab the first file in the list
  var file;
  if (files.hasNext()) {
    file = files.next();
    
    // Remove all folders
    currentParentFolders = file.getParents();
    while(currentParentFolders.hasNext()){
      currentParentFolder = currentParentFolders.next();
      logVariable(nameOfFunction, "ID of folder to be removed from current file", currentParentFolder.getId());
      logVariable(nameOfFunction, "Name of folder to be removed from current file", currentParentFolder.getName());
      currentParentFolder.removeFile(file);
    }
    
    // Add it to folder declared in the function
    targetFolder.addFile(file);
    logVariable(nameOfFunction, "ID of folder which the file would be added to", targetFolder.getId());
    logVariable(nameOfFunction, "Name of folder which the file would be added to", targetFolder.getName());
    
    // Return True
    logFunctionStop(nameOfFunction);
    return true;
  } else {
    // Return False
    logFunctionStop(nameOfFunction);
    return false;
  }
}

/**
 * Move File To Folder when provided the id of the file.
 * This method takes the first of the files that has that name and sends 
 * it to the respective folder.
 * @param nameOfFile ID of the file to be moved to the folder
 * @param idOfFolder ID of the folder that is to be moved to
 * @return success True of False condition whether the operation is successful.
 */
function moveToFolder_byID(idOfFile, idOfFolder){
  // Logging functionality
  nameOfFunction = "moveToFolder_byID"
  logFunctionStart(nameOfFunction)
  
  // Get files with the name of file provided
  var file = DriveApp.getFileById(idOfFile);
  
  // Get the target folder
  var targetFolder = DriveApp.getFolderById(idOfFolder);
  
  if (file.getId() != null) {
    file = files.next();
    
    // Remove all folders
    currentParentFolders = file.getParents();
    while(currentParentFolders.hasNext()){
      currentParentFolder = currentParentFolders.next();
      logVariable(nameOfFunction, "ID of folder to be removed from current file", currentParentFolder.getId());
      logVariable(nameOfFunction, "Name of folder to be removed from current file", currentParentFolder.getName());
      currentParentFolder.removeFile(file);
    }
    
    // Add it to folder declared in the function
    targetFolder.addFile(file);
    logVariable(nameOfFunction, "ID of folder which the file would be added to", targetFolder.getId());
    logVariable(nameOfFunction, "Name of folder which the file would be added to", targetFolder.getName());
    
    // Return True
    logFunctionStop(nameOfFunction);
    return true;
  } else {
    // Return False
    logFunctionStop(nameOfFunction);
    return false;
  }
}

/**
 * Copy folder to another destination folder
 * @param idOfFolder ID of the folder that is to be copied
 * @param idOfDestFolder ID of the destination folder that is to be copied to
 * @return success True of False condition whether the operation is successful.
 */
function copyFolder(idOfFolder, idOfDestFolder){
}

/**
 * Get list of files in a folder
 * @param idOfFolder ID of the folder that is be analyzed
 * @return arrayOfFileID Return an array of file IDs
 */
function getListOfFiles(idOfFolder){
}
