var password_to_check = document.getElementById("password");

var result = document.getElementById("result");

document.querySelector("#password").addEventListener("input", strengthChecker);

var specialChars = '!@#$%^&*()-_=+[{}]\\|,.<>/?;:\'"';

function strengthChecker() {

  let password_string = password_to_check.value;
  let lowercase = false;
  let uppercase = false;
  let numbers = false;
  let specials = false;

  for ( let index = 0; index < password_string.length; index++ ) {

    if ( password_string.charCodeAt(index) > 96 &&  password_string.charCodeAt(index) < 123 ) {
        lowercase = true;
    } else if ( password_string.charCodeAt(index) > 64 &&  password_string.charCodeAt(index) < 91 ) {
        uppercase = true;
    } else if ( password_string.charCodeAt(index) > 47 &&  password_string.charCodeAt(index) < 58 ) {
        numbers = true;
    } else if ( specialChars.includes(password_string[index]) ) {
        specials = true;
    } else if ( password_string[index] == ' ' ) {
        result.innerHTML = "Invalid!";
        return;
    }
  }

  let points = BigInt(26 * uppercase + 26 * lowercase + 10 * numbers + 31 * specials) ** BigInt(password_string.length);
    
  if ( points > 10000000000000000000000n ) {
      result.innerHTML = "STRONG";      
  } else if ( points > 1000000000000n ) {
      result.innerHTML = "Medium";
  } else {
      result.innerHTML = "weak";
  }
}

setInterval(tips, 5000);

function tips() {

    let hints = ["Sometimes, it's better to use longer passwords than short complex ones!",
                 "Strong passwords have a mix of different types of characters!",
                 "Avoid using characters that are located next to each other in the keyboard!"
    ];

    document.getElementById("tips").innerHTML = hints[ Math.floor( Math.random() * hints.length ) ];

}
