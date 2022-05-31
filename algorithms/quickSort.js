/**
 * It picks an element as pivot and partitions the given array around the picked pivot.
 * @param {*} array array to sort
 * @returns array sorted
 */
export function quickSort(array) {
	let sorted = new Array(array.length);
	let pivot = Math.floor(Math.random() * array.length);

	partition(array, pivot);
	return sorted;
}

/**
 * Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.
 * @param {*} array 
 * @param {*} pivot 
 */
function partition(array, pivot) {
	for(i=0; i<pivot; i++) {
		if(array[i]>array[pivot]) [array];
	}
	console.log(pivot);
}

function swap(array)