function add(number1, number2) {
    const sum = number1 + number2
    console.log(sum)
    return sum;
}

add(add(1, 2), multiply(1, 3))

function multiply(number1, number2) {
    const result = number1 * number2
      console.log(result)
      return result;
}