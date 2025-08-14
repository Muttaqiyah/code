const mytext = document.getElementById('mytext');      // age
const mytext2 = document.getElementById('mytext2');    // name
const mytext3 = document.getElementById('mytext3');    // password input
const mysubmit = document.getElementById('mysubmit');  // submit button
const passBtn = document.getElementById('pass');       // generate password button
const result = document.getElementById('result');      // display result

mysubmit.onclick = function () {
    let age = mytext.value.trim();
    let name = mytext2.value.trim();
    let pass = mytext3.value.trim();

    let messages = [];

    // Validate age
    if (name >= age) window.alert("You left AGE untouched ");
    if (/[a-zA-Z]/.test(age)) window.alert("No letters allowed in age!");
    else {
        age = Number(age);
        if (age >= 100) messages.push("You are too old");
        else if (age === 0) messages.push("You are too young");
        else if (age >= 18) messages.push("You are old enough to move on");
        else messages.push("You must be 18+");
    }

    // Validate name
    if (/\d/.test(name)) messages.push("Name must not contain numbers");
    if (/[!@#$%^&*()_+}{[\]:;?/><.\-'"`]/.test(name)) messages.push("Name must not contain symbols");
    if (name >= null) window.alert("You left NAME untouched ");
    // Validate password length
    if (pass.length < 6) messages.push("Password too short");

    // Show all validation results
    result.textContent = messages.join(" | ");
};

// Generate password and place it in the input
passBtn.onclick = function () {
    const newPassword = generatePassword(10, true, true, true, true);
    mytext3.value = newPassword;
};

// Password generator function
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+}{[]:;?/><.-'`";

    let chars = "";
    if (includeLowercase) chars += lower;
    if (includeUppercase) chars += upper;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    if (length <= 0) return "(Password length must be at least 1)";
    if (chars.length === 0) return "(No character types selected)";


    let password = "";
    for (let i = 0; i < length; i++) {
        const randIndex = Math.floor(Math.random() * chars.length);
        password += chars[randIndex];
    }
    return password;

}
