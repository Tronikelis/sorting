/**
 * My implementation of the quicksort algorithm,
 */
export default function quicksort(array: number[]): number[] {
    let newArr = [...array];

    sort(newArr, 0, newArr.length - 1);
    // return a new array not the old one, I don't like functions that change the inputs when unnecessary
    return newArr;

    function sort(array: number[], left: number, right: number) {
        // if it is less than one then sorting is useless
        if (array.length <= 1) return;
        
        // partition the array and get the (middle point where the partition stopped)
        const mid = partition(array, left, right);
        
        // sort the left part, without the pivot
        if (left < mid - 1) sort(array, left, mid - 1);
        // sort the right part, with the pivot
        if (right > mid) sort(array, mid, right);
    };

    function swap(array: number[], left: number, right: number) {
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;
    };

    function partition(array: number[], left: number, right: number) {
        // take the pivot of the array chunk
        const pivot = array[Math.floor((left + right) / 2)];
        // console.log({ pivot, left, right });
        let l = left;
        let r = right;
        

        // while left side has bigger numbers than the right side
        while (l <= r) {
            // add one to the left if we do not need to swap it
            while (array[l] < pivot) {
                l++;
            };
            // minus one to the right if we do no need to swap it
            while (array[r] > pivot) {
                r--;
            };
            // if left side currently has a bigger number than the right then swap it
            if (l <= r) {
                swap(array, l, r);
                l++;
                r--;
            };
        };
        // return a new index (middle part usually)
        return l;
    };
};