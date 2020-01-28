// Challenge 1
function addTwo(num) {
	return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
	return word + "s";
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
	let result = [];
	array.forEach(item => result.push(callback(item)));
	return result;
}

// console.log(map([1, 2, 3], addTwo));

// Challenge 4

function logValue(value) {
	console.log(value);
}

function forEach(array, callback) {
	array.forEach(item => callback(item));
}

forEach([1, 2, 3], logValue);

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
	array.forEach(item => {
		item = callback(item);
	});
}

//Extension 2
function reduce(array, callback, initialValue) {
	let result = initialValue;
	array.forEach(item => {
		result = callback(result, item);
	});
	return result;
}

//Extension 3

let intersectionReducer = (acc, cv) => {
	// If we are at first iteration, add the distinct elements of the first array
	if (acc.length == 0) {
		return cv.filter((value, index, arr) => arr.indexOf(value) === index);
	}
	// Else filter accumulator's items to return only those items that are present in next array as well
	return acc.filter(item => cv.includes(item));
};

function intersection(...arrays) {
	// Use empty array as initial value.
	return arrays.reduce(intersectionReducer, []);
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
let unionReducer = (acc, cv) => {
	// Iterate through the cv array and check if an item is present in acc array. If not, then add item to acc array
	cv.forEach(item => {
		if (!acc.includes(item)) {
			acc.push(item);
		}
	});
	return acc;
};

function union(...arrays) {
	return arrays.reduce(unionReducer);
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
	let object = {};
	// Iterate through first array and check if callback function applied to it equals the item of second array at same index. If so, then add item to result object
	array1.forEach((item, index) => {
		if (callback(item) == array2[index]) {
			object[item] = array2[index];
		}
	});
	return object;
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
	let object = {};
	arrVals.forEach((value, index) => {
		let array = [];
		arrCallbacks.forEach(callback => {
			array.push(callback(value));
		});
		object[value] = array;
	});
	return object;
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
