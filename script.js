function validateForm() {
    let pass = document.forms["myForm"]["pass"].value;
    let cnfPass = document.forms["myForm"]["cnfPass"].value;
    if (pass !== cnfPass) {
      alert("Passwords don't match!");
      document.forms["myForm"]["cnfPass"].focus();
      return false;
    }
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!document.forms["myForm"]["email"].value.match(validRegex)) {
      alert("Invalid email address!");
      document.forms["myForm"]["email"].focus();
      return false;
    }
}