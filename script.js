import {bubbleSort} from "./algorithms/bubbleSort.js";
import {selectionSort} from "./algorithms/selectionSort.js";

const array = Array.from({length: 10000}, () => Math.floor(Math.random() * 10000));

let run = f => {
	console.time('sorting');
	f(array);
	console.timeEnd('sorting');
}

run(bubbleSort);
run(selectionSort);
