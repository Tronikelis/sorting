import { quicksort, mergesort, bubblesort } from "./algorithms";

// one million length array of random numbers with decimal places
const arr = Array(1000000)
    .fill(0)
    .map(_ => Math.random() * 10000);
/**
 * Benchmarks
*/

console.time("quicksort");
quicksort(arr);
console.timeEnd("quicksort"); // ~ 120ms

console.log("\n");

console.time("js sort");
arr.sort((a, b) => a - b);
console.timeEnd("js sort"); // ~ 560ms

console.log("\n");

console.time("mergesort");
mergesort(arr);
console.timeEnd("mergesort"); // ~ 171ms

console.log("\n");

console.time("bubblesort");
bubblesort(arr);
console.timeEnd("bubblesort"); // ~ Too long, lazy to wait

console.log("\n");
