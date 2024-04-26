const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = [];
const oddNumbers = [];

for (const num of arr) {
    if (num % 2 === 0) {
        evenNumbers.push(num);
    } else {
        oddNumbers.push(num);
    }
}

console.log("EVEN NUMBERS:");
for (const evenNum of evenNumbers) {
    console.log(evenNum);
}

console.log("\nODD NUMBERS:");
for (const oddNum of oddNumbers) {
    console.log(oddNum);
}