var userNameInput = document.getElementById("userName");
var emailInput = document.getElementById("SignInEmail");
var passwordInput = document.getElementById("SignInPassword");
var email = document.getElementById("SignInEmails");
var password = document.getElementById("SignInPasswords");
var login = document.getElementById("login")
var firstPage = document.getElementById("Firstpage");
var middlePage = document.getElementById("Middlepage");
var secondPage = document.getElementById("Secondpage");
var logOut = document.getElementById("logOut");
var signUpLetter = document.querySelector("#signUpLetter");
var signUpButton = document.querySelector("#signUpButton");
var signInL = document.querySelector("#signIn");
var successfully = document.querySelector("#successfully");
var websitesList=[];
var updatedWebsiteIndex;



function resetInputs()
{
  bookMarkName.value = null ;
  bookMarkURL.value = null ;
  bookMarkName.classList.remove("is-valid");
  bookMarkURL.classList.remove("is-valid");
}




var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

email.addEventListener("input", function(){
  isValidInput(emailRegex,this)
  console.log("works");
})
password.addEventListener("input", function(){
  isValidInput(passwordRegex,this)
  console.log("works");
})
login.addEventListener("click", function(){

  entryValidation();
  


  
})
signUpLetter.addEventListener("click", function(){
  firstPage.classList.replace("d-block", "d-none")
  middlePage.classList.replace("d-none", "d-block")
})
signUpButton.addEventListener("click", function(){
  addData();
  rest();
});
signIn.addEventListener("click", function(){
  middlePage.classList.replace("d-block", "d-none")
  firstPage.classList.replace("d-none", "d-block")
  successfully.classList.replace("d-block", "d-none");
})
userNameInput.addEventListener("input", function(){
  successfully.classList.replace("d-block", "d-none");
})
logOut.addEventListener("click", function(){
  secondPage.classList.replace("d-flex", "d-none")
  firstPage.classList.replace("d-none", "d-block")
})
function isValidInput(regex, element)
{
  if(regex.test(element.value))
  {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    return true;
  }
  else
  {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    return false;
  }
}

var emailsList = [];
function addData()
{ 

  if(isValidInput(emailRegex,email) &&
    isValidInput(passwordRegex,password))
  {    
    var userData =
    {
      userName : userName.value,
      email : email.value,
      password : password.value,
    }

    var emailsList = JSON.parse(localStorage.getItem("ourData"));
    // console.log(emailsList)
    var x = false;
    for(var i=0 ; i<emailsList.length ; i++)
    {
      if (email.value == emailsList[i].email)
      { 
        x = true;
        // console.log("Already exist")
        document.querySelector(".error").classList.replace("d-none", "d-block");
        successfully.classList.replace("d-block", "d-none");
      }
    }
    if(!x)
    {
        document.querySelector(".error").classList.replace("d-block", "d-none");
        emailsList.push(userData);
        localStorage.setItem("ourData", JSON.stringify(emailsList));
        successfully.classList.replace("d-none", "d-block");
      }
    console.log(emailsList);


  }
  else
  {
    alert("Please enter valid inputs")
  }

}

var userRealName;
function entryValidation()
{
  email = emailInput;
  password = passwordInput;
  var emailsList = JSON.parse(localStorage.getItem("ourData"));
  var x = false;
  for(var i=0 ; i<emailsList.length ; i++)
  {
    if (emailInput.value == emailsList[i].email &&
        passwordInput.value == emailsList[i].password)
    {
      firstPage.classList.replace("d-block", "d-none")
      secondPage.classList.replace("d-none", "d-flex")
      emailInput.value = null;
      passwordInput.value = null;
      userRealName = emailsList[i].userName;
      x = true;
      document.querySelector(".text-danger").classList.replace("d-block", "d-none");
      document.querySelector(".size").innerHTML = ("Welcome To Home Page" + " " + userRealName);
    }
  }
  if (!x)
  {
    document.querySelector(".text-danger").classList.replace("d-none", "d-block");
  }
}
function rest()
{
  userNameInput.value = null;
  email.value = null;
  email.classList.remove("is-valid");
  password.value  = null;
  password.classList.remove("is-valid");
 
}