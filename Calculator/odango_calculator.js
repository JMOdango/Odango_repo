//Joan Marie S. Odango

let result;
const op = Number(prompt(`Please choose between 1-4. \n(1 - Addition, 2 - Subtraction, 3 - Multiplication, 4 - Division)`));

if(op > 4 || op < 1){
    alert("Input is invalid.");
}
else{
    const num1 = Number(prompt(`Enter first number.`));
    const num2 = Number(prompt(`Enter second number.`));

    switch(op) {
        case 1:
            result = num1 + num2;
            break;
    
        case 2:
            result = num1 - num2;
            break;
    
        case 3:
            result = num1 * num2;
            break;
    
        case 4:
            result = num1 / num2;
            break;
    }
    alert(result);
}
