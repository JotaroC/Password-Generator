// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function generatePassword() {
  let passwordLength = prompt("Please Enter Your Password Length (8~128)");
  if(8 <= passwordLength && 128 >= passwordLength) {
    let test = passwordCriteria();
    let long_Password = test[0];
    let short_Password = test[1];
    let r = shuffleString(passwordLength,long_Password,short_Password);
    // alert(r);
  } else {
    alert("Please make sure the number you entered in the range of 8~128");
  }
}

function passwordCriteria() {
  let uppercase = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
  let lowercase ="abcdefghijklmnopqrstuvwxyz";
  let number = "0123456789";
  let specialChar = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
  let password = "";
  let password_1 = ""
  let count = 0; 

  let uppercase_Confirm = confirm("Do you want UpperCase Letters in your password?");
  if(uppercase_Confirm == true) {
    password += uppercase;
    password_1 += uppercase[Math.floor(Math.random()*uppercase.length)];
    count++;
  }

  let lowercase_Confirm = confirm("Do you want LowerCase Letters in your password?");
  if(lowercase_Confirm == true) {
    password += lowercase;
    password_1 += lowercase[Math.floor(Math.random()*lowercase.length)];
    count++;
  }

  let number_Confirm = confirm("Do you want Numbers in your password?");
  if(number_Confirm == true) {
    password += number;
    password_1 += number[Math.floor(Math.random()*number.length)];
    count++;
  }

  let specialChar_Confirm = confirm("Do you want Special Characters in your password?");
  if(specialChar_Confirm == true) {
    password += specialChar;
    password_1 += specialChar[Math.floor(Math.random()*specialChar.length)];
    count++
  }
  
  if(count > 0) {
    return [password, password_1];
  } else {
    alert("Please make sure choose at least one criteria");
    passwordCriteria();
  }
}

function shuffleString(length, long, short) {
  let result = "";
  
  for(let i=0; i<(length-short.length); i++) {
    result += long[Math.floor(Math.random()*long.length)];
  }
  result+=short;

  let shuffled = result.split('').sort(function(){return 0.5-Math.random()}).join('');
  return shuffled;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
