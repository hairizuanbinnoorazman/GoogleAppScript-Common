/**
 * This script involves the Gmail service
 * 
 * 
 */

/**
 * Wrapper function to send simple email with only receipient email To, Subject and the body of email
 * @param {string} receipient Who it is supposed to be sent to
 * @param {string} subject Topic of email.
 * @param {string} body Body of email. The message portion of the email
 */
function sendSimpleEmail(receipient, subject, body){
  // Function to log function starting and ending
  nameOfFunction = "sendSimpleEmail";
  logFunctionStart(nameOfFunction);
    
  MailApp.sendEmail({
     to: receipient,
     subject: subject,
     htmlBody: body
   });
  logFunctionStop(nameOfFunction);
}

/**
 * Wrapper function to send simple email with only receipient email To, Subject and the body of email
 * @param {Array<string>} A 2D array that contains data in the following order:
 * Row 1: Receipient
 * Row 2: Subject of the email that is to be sent to them
 * Row 3: Body of the email that is to be sent to them
 * It is assumed that the array does not contain the headers of the data
 */
function sendSimpleEmail_array(array){
  // Obtain number of emails to be sent
  var maxEmails = array.length;
  
  // Loop to send email
  // Start with i = 1 to skip the header
  var i = 1;
  while(i < maxEmails){
    MailApp.sendEmail({
     to: array[i][0],
     subject: array[i][1],
     htmlBody: array[i][2]
    });
    i = i + 1
  }
}


