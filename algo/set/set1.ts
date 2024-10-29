const set = new Set<number>();
set.add(1);
set.add(2);
set.add(3);

set.add(4);
set.delete(2); // removes 2 from the set

console.log(set.has(3)); // true
console.log(set.has(2)); // false
