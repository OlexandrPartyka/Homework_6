function generateRandomArray(length, minValue, maxValue) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        randomArray.push(Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
    }
    return randomArray;
}

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

const arrayLength = parseInt(prompt("Введіть довжину масиву:"));
const minValue = parseInt(prompt("Введіть мінімальне значення в масиві:"));
const maxValue = parseInt(prompt("Введіть максимальне значення в масиві:"));
const targetNumber = parseInt(prompt("Введіть число для пошуку:"));

if (
    isNaN(arrayLength) ||
    isNaN(minValue) ||
    isNaN(maxValue) ||
    isNaN(targetNumber) ||
    arrayLength <= 0 ||
    minValue >= maxValue
) {
    console.log("Введіть коректні дані.");
} else {

    const randomArray = generateRandomArray(arrayLength, minValue, maxValue);
    randomArray.sort((a, b) => a - b);


    const resultIndex = binarySearch(randomArray, targetNumber);
    if (resultIndex !== -1) {
        console.log(`Число ${targetNumber} знайдено на позиції ${resultIndex} в масиві.`);
    } else {
        console.log(`Число ${targetNumber} не знайдено в масиві.`);
    }
}
