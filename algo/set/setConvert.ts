const array = [1, 2, 3, 4, 5];
const setFromArray = new Set(array);

const arrayFromSet = Array.from(setFromArray); // or [...setFromArray]
console.log(arrayFromSet); // [1, 2, 3, 4, 5]
