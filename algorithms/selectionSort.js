/**
 * runtime O(n²)
 * memory O(1)
 * Selection sort is the child's algorithm: simple, but inefficient. Find the smallest element using a linear scan and move it to the front (swapping it with the front element). Then, find the second smallest and move it, again doing a linear scan. Continue doing this until all the elements are in place.
 */
export function selectionSort(array) {
	for(let i=0; i<array.length; i++) {
		let idxOfSmallest = i;
		for(let j=i+1; j<array.length; j++)
			if(array[j]<array[idxOfSmallest]) idxOfSmallest = j;
		const temp = array[i];
		array[i] = array[idxOfSmallest];
		array[idxOfSmallest] = temp;
	}
}