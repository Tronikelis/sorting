
export default function mergesort(array: number[]) {
    // this is just so that it returns a new array, not the input array
    return sort([...array]);

    function sort(array: number[]): any {
        if (array.length <= 1) return array;

        const half = Math.floor(array.length / 2);

        const firstHalf = array.splice(0, half);
        const secondHalf = array.splice(-half);
        
        return merge(sort(firstHalf), sort(secondHalf));
    };

    function merge(left: number[], right: number[]) {
        let sorted = [];

        while (left.length > 0 && right.length > 0) {
            if (left[0] < right[0]) sorted.push(left.shift());
            else sorted.push(right.shift());
        };

        return [...sorted, ...left, ...right];
    };
};


