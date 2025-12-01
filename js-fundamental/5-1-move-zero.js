const input = [9, 3, 7, 0, 1, 2, 0, 8, 9, 3];
// expected = [9, 3, 7, 1, 2, 8, 9, 3, 0, 0]
console.log(input);

let readIndex = 0;
let writeIndex = 0;

while (readIndex < input.length) {
    const current = input[readIndex];
    if (current !== 0) {
        input[writeIndex] = current;
        writeIndex++;
    }
    readIndex++;
}

while (writeIndex < input.length) {
    input[writeIndex] = 0;
    writeIndex++;
}

console.log(input);