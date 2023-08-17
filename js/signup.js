var signupName = document.getElementById('signupname')
var signupEmail = document.getElementById('signupemail')
var signupPassword = document.getElementById('signuppassword')
var signUpArray = []
// var signinEmail = document.getElementById('signinemail')
// var signinPassword = document.getElementById('signinpassword')

function validation() {
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log(signupEmail.value)
    if (regex.test(signupEmail.value)) {
        return true;

    }
    else {
        return alert("invalid")
    }
}
function Empty() {

    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        return false
    } else {
        return true
    }
}
function EmailExist() {
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
            return false
        }
    }
}
function signUp() {
    if (validation()) {


        if (Empty() == false) {
            document.getElementById('signupalert').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
            return false
        }

        var signUp = {
            name: signupName.value,
            email: signupEmail.value,
            password: signupPassword.value,
        }
        if (signUpArray.length == 0) {
            signUpArray.push(signUp)
            localStorage.setItem('users', JSON.stringify(signUpArray))
            document.getElementById('signupalert').innerHTML = '<span class="text-success m-3">Success</span>'
            // window.location.replace("http://127.0.0.1:5501/signin.html");
            window.location.href="signin.html";
            return true
        }
        if (EmailExist() == false) {
            document.getElementById('signupalert').innerHTML = '<span class="text-danger m-3">email already exists</span>'

        } else {
            signUpArray.push(signUp)
            localStorage.setItem('users', JSON.stringify(signUpArray))
            document.getElementById('signupalert').innerHTML = '<span class="text-success m-3">Success</span>'
            window.location.href="signin.html";
            // window.location.replace("http://127.0.0.1:5501/signin.html");
        }

    }

}

// let list=[]
// if(){
//     list= localStorage.getItem JSON.parse('userlist')
// } 
// let signUP=document.getElementById("singuP")
// if(){
//     signUP?.addEventListener("click",function(){
//         let objUser ={
//             name:signupName.value,
//             email:signupEmail.value,
//             password:signupPassword.value,
//         }
//         list.push(objUser)
//         localStorage.setItem('userlist',)
//         window.location.href="signin.html";
//         // let index =list.findIndex((el)=>){
//         //     return el.name == nammeInput.value && el.email == emailInput.value
//         // }
//     })
//     else{
//         alert("already Exist")
//     }
// }
