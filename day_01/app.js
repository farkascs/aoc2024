const fs = require('fs');

const input = fs.readFileSync('input_01.txt', 'utf8');
const lines = input.split('\n');

console.log(lines);

const listA = [];
const listB = [];

lines.forEach(line => {
    if (line.trim()) {  // Skip empty lines
        const [num1, num2] = line.split('   ');
        listA.push(Number(num1));
        listB.push(Number(num2));
    }
});

console.log(listA.sort((a, b) => a - b));
console.log(listB.sort((a, b) => a - b));

console.log(listA.length);
console.log(listB.length);

let diff = (listA, listb) => {
    let similarityScore = 0;

    for (let i = 0; i < listA.length; i++) {
        let instancesInB = 0;
        for (let j = 0; j < listB.length; j++) {
            if (listA[i] === listB[j]) {
                instancesInB++;
            }
        }
        similarityScore += listA[i] * instancesInB;
    }
    return similarityScore;
}

console.log(diff(listA, listB));
