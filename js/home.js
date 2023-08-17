// var signupName = document.getElementById('signupname')
// var signupEmail = document.getElementById('signupemail')
// var signupPassword = document.getElementById('signuppassword')
// var signinEmail = document.getElementById('signinemail')
// var signinPassword = document.getElementById('signinpassword')
var signUpArray = []
var username = localStorage.getItem('Username')
if (username) {
    document.getElementById('username').innerHTML = "Welcome " + username
}
var CurrentUser = []
if (localStorage.getItem('users') == null) {
    CurrentUser = []
} else {
    CurrentUser = JSON.parse(localStorage.getItem('users'))
}


function logout() {
    localStorage.removeItem('Username')
    window.location.href="signin.html";
}