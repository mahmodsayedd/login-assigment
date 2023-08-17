// var signupName = document.getElementById('signupname')
// var signupEmail = document.getElementById('signupemail')
// var signupPassword = document.getElementById('signuppassword')
var signinEmail = document.getElementById('signinemail')
var signinPassword = document.getElementById('signinpassword')
var signUpArray = []
var successLogin = false;


if(localStorage.getItem("users")!=null){
    signUpArray = JSON.parse(localStorage.getItem("users"))
}
function LoginEmpty() {

    if (signinPassword.value == "" || signinEmail.value == "") {
        return false
    } else {
        return true
    }
}
function login() {
    if (LoginEmpty() == false) {
        document.getElementById('signinalert').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    var URL = window.location.origin
    var password = signinPassword.value
    var email = signinEmail.value
    var successLogin = false;
    console.log(signUpArray);
    console.log(password);
    console.log(email);
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == email.toLowerCase() && signUpArray[i].password.toLowerCase() == password.toLowerCase()) {
            successLogin = true;
            // console.log("login Success")
            localStorage.setItem('Username', signUpArray[i].name)
            // if (URL == '/') {
                
            //     location.replace('https://' + location.hostname + '/home.html')
            //     window.location.href="home.html";

            // } else {
            //     location.replace(URL + '/home.html')

            // }
        }
    }

    if(successLogin) {
        alert("Success Login");
        window.location.href="home.html";
    }
    else {
        document.getElementById('signinalert').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
    
    }

}
