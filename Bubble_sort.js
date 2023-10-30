const faker = require('faker');
const nameArray = [];
for (let i = 0; i < 10; i++) {
    nameArray.push(faker.name.findName());
}

console.log("Початковий масив імен:");
console.log(nameArray);

function bubbleSortNames(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}


bubbleSortNames(nameArray);

console.log("Відсортований масив імен:");
console.log(nameArray);
