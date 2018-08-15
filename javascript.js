function ValidateForm() {
  var validName = false; 
  var validEmail = false; 
  var validComment = false; 
  
   if (myContact.name.value===null ||
 myContact.name.value==="")
 errorMessages += "<p>A contact name is required.</p>";
  else
 validName =true;
  
   if (myContact.email.value===null ||
 myContact.email.value==="")
 errorMessages += "<p>An email is required.</p>";
  else
 validEmail =true;
  
   if (myContact.comment.value===null ||
 myContact.comment.value==="")
 errorMessages += "<p>A comment is required.</p>";
  else
 validComment =true;
 
  document.getElementById("errorMessages").innerHTML = errorMessages;
// Make sure you return all the boolean variables that are checking each field
 return (validName && validEmail && validComment);
 }
