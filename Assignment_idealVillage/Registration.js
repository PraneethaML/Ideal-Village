function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
	
    if( document.myForm.email.value == "" )
            {
               alert( "Please provide your Email!" );
               document.myForm.email.focus() ;
               return false;
            }
			
		    var y = document.forms["myForm"]["email"].value;
		       var atpos = y.indexOf("@");
		       var dotpos = y.lastIndexOf(".");
		       if (atpos<1 || dotpos<atpos+2 || dotpos+2>=y.length) {
		           alert("Not a valid e-mail address");
		           return false;
		       }
	          
         
            if( document.myForm.phone.value == "" ||
            isNaN( document.myForm.phone.value ) ||
            document.myForm.phone.value.length != 10 )
            {
               alert( "Please provide a phone in the format ##########." );
               document.myForm.phone.focus() ;
               return false;
            }
}