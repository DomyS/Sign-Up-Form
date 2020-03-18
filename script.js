function validateEmail() {
  // define variables
  let email = document.getElementById("email");
  let error = document.getElementById("errorText");
  let firstName = document.getElementById("firstText");
  let firstError = document.getElementById("firstError");
  let lastName = document.getElementById("lastText");
  let lastError = document.getElementById("lastError");
  let password = document.getElementById("password");
  let passError = document.getElementById("passError");
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  //checking name is not empty
  if (firstName.value == "") {
    firstError.innerHTML = "First Name cannot be empty";
    firstName.style.borderColor = "hsl(354, 100%, 66%)";
    firstName.style.color = "hsl(354, 100%, 66%)";
  } else {
    firstError.innerHTML = "";
    firstName.style.borderColor = "hsl(136, 55%, 53%)";
    firstName.style.color = "hsl(136, 55%, 53%)";
  }
  //checking last name
  if (lastName.value == "") {
    lastError.innerHTML = "Last Name cannot be empty";
    lastName.style.borderColor = "hsl(354, 100%, 66%)";
    lastName.style.color = "hsl(354, 100%, 66%)";
  } else {
    lastError.innerHTML = "";
    lastName.style.borderColor = "hsl(136, 55%, 53%)";
    lastName.style.color = "hsl(136, 55%, 53%)";
  }
  //checking password
  if (password.value == "") {
    passError.innerHTML = "Password cannot be empty";
    password.style.borderColor = "hsl(354, 100%, 66%)";
    password.style.color = "hsl(354, 100%, 66%)";
  } else {
    passError.innerHTML = "";
    password.style.borderColor = "hsl(136, 55%, 53%)";
    password.style.color = "hsl(136, 55%, 53%)";
  }
  // checking email
  if (reg.test(email.value) == false) {
    error.innerHTML = "Please provide a valid email address";
    email.style.borderColor = "hsl(354, 100%, 66%)";
    error.style.color = "hsl(354, 100%, 66%)";
  } else {
    error.innerHTML = "";
    email.style.borderColor = "hsl(136, 55%, 53%)";
    error.style.color = "hsl(136, 55%, 53%)";
  }
}
