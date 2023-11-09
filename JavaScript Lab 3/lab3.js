function minDigit(x) {  
    var min_digit = 10 ** 9;
    
    for (var i = 0; i < x.toString().length; i++) {
      min_digit = min_digit < x.toString()[i] ? min_digit : x.toString()[i];
    }
  
    return min_digit;
  }

console.log(minDigit(1482));