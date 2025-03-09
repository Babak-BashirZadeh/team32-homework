function squareDigits(num){
    let string = String(num);
    let output = "";
    for (let i = 0; i < string.length; i++) {
      output += string[i] ** 2;
      }
    return Number(output);
  }
