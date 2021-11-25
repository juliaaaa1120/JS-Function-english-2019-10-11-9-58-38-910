function alphabetSort(message){
    var arr = message.split('')   
    for (var i = 0; i < message.length; i++) {
        for (var j = i + 1; j < message.length; j++) {
            if (arr[j] < arr[i]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr.join('')
  }
  console.log(alphabetSort('hello')); // should return 'ehllo'