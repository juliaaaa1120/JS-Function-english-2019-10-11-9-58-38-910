function reverseString(message){
    var m = message.length - 1;
    var output = '';
    while (m >= 0) {
        output += message[m];
        m--;
    }
    return output;
}

function palindrome(message){
    if (message == reverseString(message)) {
        return true
    } else {
        return false
    }
  }
  console.log(palindrome('hello')); // should return false
  console.log(palindrome('abcba')); // should return true