/**
 * runtime O(n log(n))
 * memory depends
 * Merge sort divides the array in half, sorts each of those halves, and then merges them back together. Each of those halves has the same sorting algorithm applied to it. Eventually, you are merging just two single-element arrays. It is the "merge" part that does all the heavy lifting.
 */
export function mergeSort(array) {
	helperAr = Array.from(array);
	sorting(array, helperAr, 0, array.length-1);
}
//https://drive.google.com/open?id=17m3NjRQFnLV3sN-pcUHWy5q_tAHUso08&disco=AAAAZuMe6Gw
function sorting(array, helperAr, low, high) {

}

function merging(array, helperAr, low, middle, high) {

}