# My try at implementing Mergesort & Quicksort

```typescript
import { quicksort, mergesort } from "./algorithms";

// one million length array of random numbers with .xxxxx decimal places
const arr = Array(1000000).fill(0).map(x => Number((Math.random() * 1000).toFixed(5)))

/**
 * Benchmarks 
*/

console.time("quicksort");
quicksort(arr);
console.timeEnd("quicksort"); // ~ 120ms

console.log("\n");

console.time("js sort");
arr.sort((a, b) => a - b);
console.timeEnd("js sort"); // ~ 500ms

console.log("\n");

console.time("mergesort");
mergesort(arr);
console.timeEnd("mergesort"); // ~ 13s the implementation is really bad lol
```

The mergesort implementation is really bad lmao