// Array (List)

const sampleArray = []; // Empty Array

sampleArray.push(1);
sampleArray.push(2);
sampleArray.push(3, 4, 5);

console.log(`sampleArray: ${sampleArray}`);

sampleArray.pop();
console.log(`sampleArray: ${sampleArray}`);

// Array on JS -> Stack
console.log(`After Pop: ${sampleArray}`);

sampleArray.shift();
console.log(`sampleArray: ${sampleArray}`);

sampleArray.push({
    message: 'OK',
});
console.log(`sampleArray: ${sampleArray}`); // JS is Dynamic Type

const result = sampleArray.findIndex((e) => e === 1);
console.log(`result: ${result}`);

console.log('==============================');

// String
console.log('Hello World'.length);
const text = "  dfjXashDrf s3df";
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.trim());
console.log('==============================');

// Object
const ball = {
    id: 1,
    name: 'Ball',
    description: 'A Ball',
}
console.log(`Name: ${ball.name}`);
console.log(`Name: ${ball['name']}`);
console.log(Object.keys(ball));
console.log(Object.values(ball));
console.log(Object.entries(ball));
console.log('==============================');
const jsonString = JSON.stringify(ball);
console.log(jsonString);
console.log({
    jsonString
});
console.log('==============================');

// Map => HashTable
// Use-Case: Key-Value
const hashTable = new Map();
const employeeList = [
    {name: 'John', lastname: 'Doe', },
    {name: 'Jane', lastname: 'Dee', },
    {name: 'Jack', lastname: 'Daq'},
]
for (const emp of employeeList) {
    if (hashTable.has(emp.lastname)) {
        hashTable.get(emp.lastname).name = emp.name;
    } else {
        hashTable.set(emp.lastname, emp);
    }
}
console.log(hashTable);
console.log('==============================');

// Set
const sets = new Set();
const numbers = [1, 2, 1, 2, 3, 3, 5, 4, 2, 1, 3];
for (const n of numbers) {
    sets.add(n);
}
console.log(sets);
console.log(`Has ${2}: ${sets.has(2)}`);
console.log('==============================');