function validate_form() {
	var name, email, phone, message;
	name=document.forms["contact_form"]["name"].value;
	email=document.forms["contact_form"]["email"].value;
	phone=document.forms["contact_form"]["phone"].value;
	message=document.forms["contact_form"]["message"].value;

	var atpos=email.indexOf("@");
	var dotpos=email.lastIndexOf(".");


	if (name==null || name=="") {
		alert("Name must be filled out");
		return false;
	} else if(email==null || email=="") {
		alert("Email must be filled out");
		return false;
	} else if(phone==null || phone=="") {
		alert("Phone must be filled out");
		return false;
	} else if(message==null || message=="") {
		alert("Message must be filled out");
		return false;
	} else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
	  alert("Not a valid e-mail address");
	  return false;
	}
}