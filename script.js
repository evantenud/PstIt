const registerButton = document.getElementById("signUpButton");
const signInButton = document.getElementById("signInButton");
const subtitleStarter = document.getElementById("subtitle_starter");
const hiddenForm = document.getElementById("hiddenForm");
const hiddenRegisterForm = document.getElementById("hiddenRegisterForm");
const submitButtonRegister = document.getElementById("submitButtonRegister");
const submitButtonSignIn = document.getElementById("submitButtonSignIn");	
const email = document.getElementById("signInEmail").value;
const password = document.getElementById("signInPassword").value;
const newUserName = document.getElementById("registerName").value;
const newUserUsername = document.getElementById("registerUsername").value;	
const newUserEmail = document.getElementById("registerEmail").value;
const newUserPassword = document.getElementById("registerPassword").value;
const Users = [];
class User {
	constructor(name, username, email, password){
		this.name = name;
		this.username = username; 
		this.email = email;
		this.password = password;
	}
}

const userIndex = Users.lenght - 1;
let newUser = new User(newUserName, newUserUsername, newUserEmail, newUserPassword);

signInButton.addEventListener("click", buttonClicked);
registerButton.addEventListener("click", register);
submitButtonRegister.addEventListener("click", addUser);
submitButtonSignIn.addEventListener("click", checkUser);
	
function hideButtons(){
	subtitleStarter.style.display = "none";
	signInButton.style.display = "none";
	registerButton.style.display = "none";
}
function buttonClicked(){
	hideButtons();
	hiddenForm.style.display = "block";
}
function register(){
	hideButtons();
	hiddenRegisterForm.style.display = "block";
}
function addUser(){
	if(newUserName !== "" && newUserUsername !== "" && newUserEmail !== "" && newUserPassword !== ""){
		Users[userIndex] = newUser;
	}else{
		alert("users", newUser);
	}
}
function checkUser(){
	Users.includes("Tatjana");
}
	