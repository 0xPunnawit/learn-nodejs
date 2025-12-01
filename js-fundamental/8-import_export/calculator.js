function add(operand1, operand2) {
    return operand1 + operand2;
}

function subtract(operand1, operand2) {
    return operand1 - operand2;
}

function multiply(operand1, operand2) {
    return operand1 * operand2;
}

function divide(operand1, operand2) {
    if (operand2 === 0) {
        throw new Error('Cannot divide by zero');
    }
    return operand1 / operand2;
}

module.exports = {

    add,
    subtract,
    multiply,
    divide
}