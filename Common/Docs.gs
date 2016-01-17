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
 * Replace the table tag in a google docs
 * The table tag should follow the following schema: {{table1}}
 * @param {string} tag The tag is to be replaced in google docs
 * @param (Array<string>} array2D The array that is to be put into the table
 */
function template_replace_tableTag(tag, array2D){
}

/**
 * Replace the unordered list tag in a google docs
 * The unordered tag should follow the following schema: {{unordered1}}
 * @param {string} tag The tag is to be replaced in google docs
 * @param {Array<string>} array A single list array that is to be put into the list
 */
function template_replace_tableUnordered(tag, array){
}

/**
 * Replace the ordered list tag in a google docs
 * The ordered tag should follow the following schema: {{ordered1}}
 * @param {string} tag The tag is to be replaced in google docs
 * @param {Array<string>} array A single list array that is to be put into the list
 */
function template_replace_tableOrdered(tag, array){
}

/**
 * Replace the paragraph list tag in a google docs
 * The paragraph tag should follow the following schema: {{paragraph1}}
 * @param {string} tag The tag is to be replaced in google docs
 * @param {string} text The text that is to be used to replace the tag
 */
function template_replace_paragraph(tag, text){
}

/**
 * Replace the image tag in a google docs
 * The image tag should follow the following schema {{image}}
 * @param {string} tag The tag is to be replaced in google docs
 * @param {string} imageID The image id that is to be used to be replace the tag
 */
function template_replace_image(tag, imageID){
}