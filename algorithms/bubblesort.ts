export default function bubblesort(array: number[]) {
    let sorted = [...array];
    sort(sorted);
    return sorted;

    function sort(array: number[]) {
        for (let l = 0; l < array.length - 1; l++) {
            for (let r = 1; r < array.length; r++) {
                if (array[l] > array[l + 1]) swap(array, l, l + 1);
            };
        };
    };

    function swap(array: number[], left: number, right: number) {
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;
    };
};