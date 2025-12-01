const { getRandomNumber } = require('./utility');
const { add, subtract, multiply, divide } = require('./calculator');

function main() {
    console.log("Get Random number: ");
    console.log(`Number: ${getRandomNumber(1000)}`);

    console.log("Calculator: ");
    console.log(`Add: ${add(4, 24)}`);
    console.log(`Subtract: ${subtract(8, 2)}`);
    console.log(`Multiply: ${multiply(3, 2)}`);
    console.log(`Divide: ${divide(4, 2)}`);

    // Bug if operand 2 is zero
    try {
        console.log(`Divide: ${divide(4, 0)}`);
        return operand1 / operand2;
    } catch (error) {
        console.log(error);
        return 0;
    }

}


main();