var password_to_check = document.getElementById("password");

var result = document.getElementById("result");

document.querySelector("#password").addEventListener("input", strengthChecker);

function strengthChecker() {

  var password_string = password_to_check.value;
  var lowercase = false;
  var uppercase = false;
  var numbers = false;

  for ( let index = 0; index < password_string.length; index++ ) {

    if ( password_string[index] > 96 &&  password_string[index] < 123 ) {
        lowercase = true;
    } else if ( password_string[index] > 64 &&  password_string[index] < 91 ) {
        uppercase = true;
    } else if ( password_string[index] > 47 &&  password_string[index] < 58 ) {
        numbers = true;
    } else if ( password_string[index] == '@' 
            ||  password_string[index] == '#'
            ||  password_string[index] == '$'
            ||  password_string[index] == '%'
            ||  password_string[index] == '^'
            ||  password_string[index] == '&'
            ||  password_string[index] == '*'
            ||  password_string[index] == '('
            ||  password_string[index] == ')'
            ||  password_string[index] == '~'
            ||  password_string[index] == '`'
            ||  password_string[index] == '?'
            ||  password_string[index] == '/'
            ||  password_string[index] == '\\'
            ||  password_string[index] == '.'
            ||  password_string[index] == ','
            ||  password_string[index] == '<'
            ||  password_string[index] == '>'
            ||  password_string[index] == ':'
            ||  password_string[index] == ';'
            ||  password_string[index] == '\''
            ||  password_string[index] == '"'
            ||  password_string[index] == '{'
            ||  password_string[index] == '}'
            ||  password_string[index] == '['
            ||  password_string[index] == ']'
            ||  password_string[index] == '-'
            ||  password_string[index] == '_'
            ||  password_string[index] == '+'
            ||  password_string[index] == '='
            ||  password_string[index] == '|' ) {
            specials = true;
        } else if ( password_string[index] == ' ' ) {
            result.innerHTML = "Invalid!";
            return;
        }
  }

  var points = BigInt(26 * uppercase + 26 * lowercase + 10 * numbers + 31 * specials) ** BigInt(password_string.length);
    
  if ( points > 1000000000 ) {
      result.innerHTML = "STRONG";      
  } else if ( points > 10000000 ) {
      result.innerHTML = "Medium";
  } else {
      result.innerHTML = "weak";
  }
}
