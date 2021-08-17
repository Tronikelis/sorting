import { quicksort, mergesort, bubblesort } from "./algorithms";

// one 100k length array of random numbers with decimal places
const arr = Array(100000)
    .fill(0)
    .map((x) => Math.random() * 10000);
/**
 * Benchmarks
*/

console.time("quicksort");
quicksort(arr);
console.timeEnd("quicksort"); // ~ 16ms

console.log("\n");

console.time("js sort");
arr.sort((a, b) => a - b);
console.timeEnd("js sort"); // ~ 46ms

console.log("\n");

console.time("mergesort");
mergesort(arr);
console.timeEnd("mergesort"); // ~ 128ms

console.log("\n");

console.time("bubblesort");
bubblesort(arr);
console.timeEnd("bubblesort"); // ~ 7s

console.log("\n");
