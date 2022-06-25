const firstNumber=parseFloat(prompt('Enter first-number'))
const operator = prompt('Enter operator(+,-,/,*)')
const secondNumber=parseFloat(prompt('Enter second-number'))

let result = 0;
if(isNaN(firstNumber)|| isNaN(secondNumber)) {
alert('This is not a number! Please refresh page and provide correct details')
}
else{
    if(operator=='+'){
    result = firstNumber + secondNumber;
}
    else if(operator=='-'){
    result = firstNumber - secondNumber;
}
    else if(operator=='/'){
    result = firstNumber / secondNumber;
}
    else if(operator=='*'){
    result = firstNumber * secondNumber;
}
alert(firstNumber + operator + secondNumber+'=' +result);
}
