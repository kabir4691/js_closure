// Challenge 1. Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
let result = arrays.reduce((acc, cv) => {
	return acc.concat(cv);
});

// Your code here.
// → [1, 2, 3, 4, 5, 6]

// Challenge 2. Your own loop
// Your code here.

// Method 1, using existing for loop
function loop(initial, testFunc, updateFunc, bodyFunc) {
	for (let current = initial; testFunc(current); current = updateFunc(current)) {
		bodyFunc(current);
	}
}

// Method 2, using recursion
function loop(value, testFunc, updateFunc, bodyFunc) {
	// If test condition fails, exit loop
	if (!testFunc(value)) {
		return;
	}
	// Else perform body function
	bodyFunc(value);
	// Then recursively call the function, after updating value's value
	return loop(updateFunc(value), testFunc, updateFunc, bodyFunc);
}

loop(
	3,
	n => n > 0,
	n => n - 1,
	console.log
);
// → 3
// → 2
// → 1

// Challenge 3. Everything
function every(array, test) {
	// Loop through the array. If any 1 item doesn't pass the test, return false.
	for (let item of array) {
		if (!test(item)) {
			return false;
		}
	}
	// Else return true after the loop has completed execution (which means all items have passed the tests)
	return true;
}

function every(array, test) {
	// Test if atleast 1 of the items don't pass the test. If so, then it means total result should be false. Hence, we check for the negation of the above scenario
	return !array.some(item => !test(item));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// Challenge 4. Dominant writing direction
function dominantDirection(text) {
  // Your code here.
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
