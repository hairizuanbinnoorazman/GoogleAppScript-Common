/**
 * This script involves the Gmail service
 * 
 * 
 */

function sendSimpleEmail(){
  MailApp.sendEmail({
     to: "hairizuan@sparkline.com, hairizuanbinnoorazman@gmail.com",
     subject: "Logos",
     htmlBody: "LOL"
   });
}


