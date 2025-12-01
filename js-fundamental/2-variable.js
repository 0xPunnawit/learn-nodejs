// Global variable
var variableWithVar = 10;

// let variable can be changed 
let a = 10;
console.log(a);

// const variable cannot be changed
const b = 20;
console.log(b);

const varable1 = 10;
console.log(varable1);

/**
 * Data type
 * 1. Number
 * 2. String
 * 3. Array -> sequence of data
 * 4. Object -> group of fields which represent data
 * 5. Boolean
 */
const numberInteger = 10;
const numberFloat = 10.5;

const text = 'Hello World';

// Array Start from index = 0, Size = 5
const array = [1, 2, 3, 4, 5];
console.log(array);
console.log(`Array Index: ${array.indexOf(1)}`);
console.log(array.length);

const user1 = {
    username: "test01",
    password: "Passw@rd"
};

// Access to property static
console.log(`Username: ${user1.username}`);

// Access to property dynamic
const propertyUserName = "username";
console.log(`Username: ${user1[propertyUserName]}`);

// Boolean
const isOkay = true;
console.log(isOkay);
const isNotOkey = false;
console.log(isNotOkey);
