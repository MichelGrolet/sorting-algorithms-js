/**
 * runtime O(n²)
 * memory O(1)
 * In bubble sort, we start at the beginning of the array and swap the first two elements if the first is greater than the second. Then, we go to the next pair, and so on, continuously making sweeps of the array until it is sorted. In doing so, the smaller items slowly "bubble" up to the beginning of the list.
 */
export function bubbleSort(array) {
	let ar = Array.from(array);
	let sorted = false;
	while (!sorted) {
		sorted = true;
		for(let i=0; i<array.length-1; i++) {
			if (ar[i]>ar[i+1]) {
				const temp = ar[i];
				ar[i]=ar[i+1];
				ar[i+1]=temp;
				sorted = false;
			}
		}
	}
	return ar;
}