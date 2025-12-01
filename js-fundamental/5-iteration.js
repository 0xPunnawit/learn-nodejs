const sampleArray = [1, 2, 3, 4, 5];

// For Loop
console.log("========== Normal For Loop ==========");
for (let i = 0; i < sampleArray.length; i++) {
    console.log(sampleArray[i]);
}

console.log("========== Enhanced For Loop ==========");
for (let value of sampleArray) {
    console.log(value);
}

// While Loop
console.log("========== While Loop ==========");
let i = 0;
while (i < sampleArray.length) {
    console.log(sampleArray[i]);
    i++;
}

// Do While Loop
console.log("========== Do While Loop ==========");
let j = 0;
do {
    console.log(sampleArray[j]);
    j++;
} while (j < sampleArray.length);