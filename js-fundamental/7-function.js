// Function

// 1. Function Declaration

// 2. Function Expression => 


// Function Declaration
function helloWorld() {
    console.log('Hello World');
}

// <= Parameters
function functionWithParameters(name, skills, role) {
    const character = {
        name,
        skills,
        role,
    };

    return character;
}

helloWorld();
const character = functionWithParameters("Ing", "Programming", "Backend");
console.log(character);

console.log('==============================');

// Function Expression
const helloExpression = function (by) {
    console.log(`hello: ${by}`);
};

helloExpression("World");

// Arrow Function
const combinedString = (text1, text2) => {
    return `${text1}${text2}`;
}

const arrowShortForm = (text1, text2) => `${text1}${text2}`;

console.log(combinedString("PB", "RU"));
console.log(arrowShortForm("AB", "CD"));
