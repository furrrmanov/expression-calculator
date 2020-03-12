function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let num1 = expr.match(/\d{1,}/).join('')
    let num2 = expr.match(/\d{1,}$/g).join('')
    let br = expr.match(/\((.*)\)/g)
    let op = expr.match(/[+-/*\/]/g).join('')

    if(num1==0||num2==0&&op=="/"){
        throw "TypeError: Division by zero."
    }
    
    res = 0
    
    switch(op){
    case "+":  
        res += +num1 + +num2
        break;
    case "-":  
        res += +num1 - +num2
        break;
    case "*":  
        res += +num1 * +num2
        break;
    case "/":  
        res += +num1 / +num2
        break;
        
    }
    return res
}

module.exports = {
    expressionCalculator
}