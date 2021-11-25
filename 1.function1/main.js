function reverseString(message){
    var m = message.length - 1;
    var output = '';
    while (m >= 0) {
        output += message[m];
        m--;
    }
    return output;
  }
  console.log(reverseString('hello')); // should return 'olleh'