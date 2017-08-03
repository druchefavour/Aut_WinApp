function validateForm() {
  var validation = true;
  if(!validateEmail(document.sendInvoiceForm.emailFrom.value))
  {
    alert( "invalide sender email!" );
     $("#emailFrom").css("border-color", "red");
     validation=false;
  }
  if(!validateEmail(document.sendInvoiceForm.emailTo.value))
  {
    alert( "invalide recipient email" );
     $("#emailTo").css("border-color", "red");
     validation=false;
  }
  return validation;
}
function validateEmail(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
}