/**
 * This script involves the Google Docs Service
 * Certain functions which cannot be used in generic app scripts: Refer to bound scripts
 * Hence, due to that limitation, every function within the script has a google documents id requirement
 */

/**
 * Creates prettified JSON which can be used to documents
 * @param {object} The array to be converted to the pretty form
 * @return {string} The JSON in its pretty form
 */
function getPrettyJSON(object){
  Logger.log(JSON.stringify(object, null, '    '));
  return(JSON.stringify(object, null, '    '));
}

/**
 * Replace the table tag in a google docs body
 * The table tag should follow the following schema: {{table1}}
 * @param {string} documentID The document ID that is to be manipulated
 * @param {string} tag The tag is to be replaced in google docs
 * @param (Array<string>} array2D The array that is to be put into the table
 */
function template_replace_tableTag(documentID, tag, array2D){
}

/**
 * Replace the unordered list tag in a google docs body
 * The unordered tag should follow the following schema: {{unordered1}}
 * @param {string} documentID The document ID that is to be manipulated
 * @param {string} tag The tag is to be replaced in google docs
 * @param {Array<string>} array A single list array that is to be put into the list
 */
function template_replace_listUnordered(documentID, tag, array){
}

/**
 * Replace the ordered list tag in a google docs body
 * The ordered tag should follow the following schema: {{ordered1}}
 * @param {string} documentID The document ID that is to be manipulated
 * @param {string} tag The tag is to be replaced in google docs
 * @param {Array<string>} array A single list array that is to be put into the list
 */
function template_replace_listOrdered(documentID, tag, array){
}

/**
 * Replace the paragraph list tag in a google docs body
 * The paragraph tag should follow the following schema: {{text1}}
 * @param {string} documentID The document ID that is to be manipulated
 * @param {string} tag The tag is to be replaced in google docs
 * @param {string} text The text that is to be used to replace the tag
 */
function template_replace_text(documentID, tag, text){
  // Log start of function
  nameOfFunction = "template_replace_text";
  logFunctionStart(nameOfFunction);
  
  // Get document body for editing
  var document = DocumentApp.openById(documentID);
  var documentBody = document.getBody();
  
  // Replace tag with text
  documentBody.replaceText(tag, text);
  
  logFunctionStart(nameOfFunction);
}

/**
 * Replace the image tag in a google docs body
 * The image tag should follow the following schema {{image}}
 * The image to be added has to be inside google drive for this to be usable
 * Only the first instance will be replaced. The tags that have the same name would be erased at the end of this function.
 * @param {string} documentID The dcoument ID that is to be manipulated
 * @param {string} tag The tag is to be replaced in google docs
 * @param {string} imageID The image id that is to be used to be replace the tag
 * @param {integer} imageDivisor The divisor value that is used to resize the image. Set to null if not used.
 * @param {integer} minWidth The minimum width the image need to be. Set to null if its not used. However, there are special parameters 
 * @param {integer} minHeight The minimum height the image needs to be. Set to null if its not used.
 */
function template_replace_image(documentID, tag, imageID, imageDivisor, minWidth, minHeight){
  // Log start of function
  nameOfFunction = "template_replace_image";
  logFunctionStart(nameOfFunction);
  
  // Get document body for editing
  var document = DocumentApp.openById(documentID);
  var documentBody = document.getBody();
  
  // Get image blob
  var image = DriveApp.getFileById(imageID);
  var imageBlob = image.getBlob();
  
  // Get position of the tag that is to be replaced
  var documentElement = documentBody.findText(tag).getElement();
  
  // Replace the tag with the image
  var imageElement = documentBody.insertImage(documentBody.getChildIndex(documentElement.getParent()), imageBlob);
  
  // Remove image tag
  documentBody.replaceText(tag, "");
  
  // Getting the special image for a document
  var documentWidth = documentBody.getPageWidth();
  var documentHeight = documentBody.getPageHeight();
  var pageWidth = documentWidth;
  var halfPageWidth = documentWidth/2;
  
  // Resize using image divisor
  if(imageDivisor != null){
    imageElement.setWidth(imageElement.getWidth()/imageDivisor);
    imageElement.setHeight(imageElement.getHeight()/imageDivisor);
  } else if(minWidth != null){
    // Special variable. Use 'page' string to invoke
    if(minWidth == "page"){
      imageDivisor = imageElement.getWidth()/pageWidth;
      imageElement.setWidth(imageElement.getWidth()/imageDivisor);
      imageElement.setHeight(imageElement.getHeight()/imageDivisor);
    } 
    // Special variable. Use 'halfPage' string to invoke
    else if (minWidth == "halfPage"){
      imageDivisor = imageElement.getWidth()/halfPageWidth;
      imageElement.setWidth(imageElement.getWidth()/imageDivisor);
      imageElement.setHeight(imageElement.getHeight()/imageDivisor);
    } 
    else {
      imageDivisor = imageElement.getWidth()/minWidth;
      imageElement.setWidth(imageElement.getWidth()/imageDivisor);
      imageElement.setHeight(imageElement.getHeight()/imageDivisor);
    }
  } else if(minHeight != null){
    imageDivisor = imageElement.getHeight()/minHeight;
    imageElement.setWidth(imageElement.getWidth()/imageDivisor);
    imageElement.setHeight(imageElement.getWidth()/imageDivisor);
  }
  
  
  logFunctionStop(nameOfFunction);
}

/**
 * Replace the header text tag in a google docs header
 * The text tag should follow the following schema {{headerText1}}
 * @param {string} documentID The dcoument ID that is to be manipulated
 * @param {string} tag The tag is to be replaced in google docs
 * @param {string} imageID The image id that is to be used to be replace the tag
 */
function headerTemplate_replace_text(documentID, tag, text){
  // Log start of function
  nameOfFunction = "headerTemplace_replace_text";
  logFunctionStart(nameOfFunction);
  
  // Get document body for editing
  var document = DocumentApp.openById(documentID);
  var documentHeader = document.getHeader();
  
  // Replace tag with text
  documentHeader.replaceText(tag, text);
  
  logFunctionStop(nameOfFunction);
}