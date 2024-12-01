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

console.log(listA);
console.log(listB);

console.log(listA.length);
console.log(listB.length);