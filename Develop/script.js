// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// This function will ask user to enter the password length (minimum 8 up to maximum 128),
// If the length in this range, then it will call the "passwordCriteria()" otherwise it will show the 
// alert message. At last, it will shuffle the generated password and show it in the text area
function generatePassword() {
  let passwordLength = prompt("Please Enter Your Password Length (8~128)");
  if(8 <= passwordLength && 128 >= passwordLength) {
    //password_Object stores the returned object of passwordCriteria()
    let password_Object = passwordCriteria();
    //long_Password stores all the possible characters strings that match the criteria
    let long_Password = password_Object[0]; 
    //short_Password picks one random character from each string that matches the criteria and store them
    let short_Password = password_Object[1];
    let result_Password = shuffleString(passwordLength,long_Password,short_Password);
    return result_Password;
  } else {
    alert("Please make sure the number you entered in the range of 8~128");
  }
}

// This function lists all the possible characters, it will ask users to confirm 
// whether or not to include lowercase, uppercase, numeric, and/or special characters in the password.
// For each case, it will randomly pick one character from the corresponding string, to make sure the generated
// password is contained at least one character from that type string.
function passwordCriteria() {
  let uppercase = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let number = "0123456789";
  let specialChar = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";

  // password stores all the possible characters
  let password_0 = "";
  // password_1 stores one character from each chosen string
  let password_1 = "";
  // count is to make sure user chooses at least one criteria
  let count = 0; 

  confirm("Please select at least one criteria.\nIf not, the password will only contain lowercase letter");

  let uppercase_Confirm = confirm("Do you want UpperCase Letters in your password?");
  if(uppercase_Confirm == true) {
    password_0 += uppercase;
    //  Using Math.random() to randomly pick one character
    password_1 += uppercase[Math.floor(Math.random()*uppercase.length)];  
    count++;
  }

  let lowercase_Confirm = confirm("Do you want LowerCase Letters in your password?");
  if(lowercase_Confirm == true) {
    password_0 += lowercase;
    password_1 += lowercase[Math.floor(Math.random()*lowercase.length)];
    count++;
  }

  let number_Confirm = confirm("Do you want Numbers in your password?");
  if(number_Confirm == true) {
    password_0 += number;
    password_1 += number[Math.floor(Math.random()*number.length)];
    count++;
  }

  let specialChar_Confirm = confirm("Do you want Special Characters in your password?");
  if(specialChar_Confirm == true) {
    password_0 += specialChar;
    password_1 += specialChar[Math.floor(Math.random()*specialChar.length)];
    count++
  }

  console.log(password_0);
  // If user doesn't choose any criteria, the password will only contain lowercase letters.
  if(count > 0) {
    return [password_0, password_1];
  } else {
    
    password_0 += lowercase;
    password_1 = "a";
    return [password_0, password_1];
  }
}

// According to the length and type of character, this function will generate the random password that meets the criteria
// To make sure the password contain every selected type characters, it shuffles long_password and short_password
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
