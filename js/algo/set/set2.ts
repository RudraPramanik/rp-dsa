const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const union = new Set([...setA, ...setB]);
console.log(union); // Set { 1, 2, 3, 4, 5 }

const intersection = new Set([...setA].filter((x) => setB.has(x)));
console.log(intersection); // Set { 3 }

const difference = new Set([...setA].filter((x) => !setB.has(x)));
console.log(difference); // Set { 1, 2 }

for (const value of set) {
  console.log(value); // logs each value in the set
}

set.forEach((value) => {
  console.log(value); // same as above, logs each value in the set
});
