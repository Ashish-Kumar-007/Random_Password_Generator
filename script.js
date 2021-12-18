const empty  = "";
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const spChar = "!@#$%^&*-?_";

const pLength = document.getElementById('p-length');
const upperCase = document.getElementById('p-uppercase');
const lowerCase = document.getElementById('p-lowercase');
const pNumber = document.getElementById('p-number');
const sp_char = document.getElementById('p-spChar');
const password = document.getElementById('password');
const generate = document.getElementById('generate');

generate.addEventListener("click", ()=>{
    var initialPassword = empty;
    (upperCase.checked) ? initialPassword += uCase : "";
    (lowerCase.checked) ? initialPassword += lCase : "";
    (pNumber.checked) ? initialPassword += numbers : "";
    (sp_char.checked) ? initialPassword += spChar : "";

    password.value = generatePassword(pLength.value, initialPassword);
});

function generatePassword(length, initialPassword){
    var pass ="";
    for(var i =0; i<length; i++){
        pass += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length));
    }
    return pass;
}

const copy = document.getElementById('copy');
copy.addEventListener("click", () => {
    if(password === "")
        alert("Please generate password first!!!");
    else{
        password.select();
        document.execCommand("copy");
        alert("Password has copied successfully.")
    }
});