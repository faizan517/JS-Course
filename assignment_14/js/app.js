function calaulator(num1, ope ,num2) {
  switch (ope) {
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;
    case "*":
      console.log(num1 * num2);
      break;
    case "/":
      console.log(num1 / num2);
      break;
    default:
        console.log("invalid operator")
      break;
  }
}

calaulator(1 ,"*",4)
