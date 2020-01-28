## Scope (Where to look for things)

1. Guess the output:

```js
let firstName = "Arya";
const lastName = "Stark";
var knownAs = "no one";

console.log(window.firstName, window.lastName, window.knownAs);
```

Output:
undefined, undefined, "no one";

2. Guess the output:

```js
let firstName = "Arya";
const lastName = "Stark";
var knownAs = "no one";

function fullName(a, b) {
  return a + b;
}

console.log(window.fullName(firstName, lastName));
```

Output:
AryaStark;

3. Make a Execution Context Diagram for the following JS and write the output.

```js
fucntion addOne(num){
  return num + 1;
}
var one = addOne(0);
var two = addOne(1);
console.log(one, two);
```

Output:
1 2

4. Make a Execution Context Diagram for the following JS and write the output.

```js
var one = addOne(0);
fucntion addOne(num){
  return num + 1;
}
var two = addOne(1);
console.log(one, two);
```

Output:
1 2

5. Make a Execution Context Diagram for the following JS and write the output.

```js
console.log(addOne(0));
fucntion addOne(num){
  return num + 1;
}
var two = addOne(1);
console.log(two);
```

Output:
1
2

6. Make a Execution Context Diagram for the following JS and write the output.

```js
var one = addOne(0);
const addOne = num => {
	return num + 1;
};
var two = addOne(1);
console.log(two);
```

Output:
Cannot access 'addOne' before initialization

7. Make a Execution Context Diagram for the following JS and write the output.

```js
console.log(addOne(0));
const addOne = num => {
	return num + 1;
};
var two = addOne(1);
console.log(two);
```

Output:
Cannot access 'addOne' before initialization

8. What will be the output of the following

```js
function isAwesome() {
	var awesome;
	if (false) {
		awesome = true;
	}
	console.log(awesome);
}
isAwesome();
```

Output:
undefined

1. What will be the output of the following

```js
function isAwesome() {
	let awesome;
	if (true) {
		awesome = true;
	}
	console.log(awesome);
}
isAwesome();
```

Output:
true

10. What will be the output of the following

```js
function isAwesome() {
	let awesome;
	if (false) {
		awesome = true;
	}
	console.log(awesome);
}
isAwesome();
```

Output:
undefined

11. What will be the output of the following

```js
let firstName = "Arya";
const lastName = "Stark";
var knownAs = "no one";

function fullName(a, b) {
	return a + b;
}
const name = fullName(firstName, lastName);
console.log(name);
```

Output:
AryaStark

12. What will be the output of the following

```js
let firstName = "Arya";
const lastName = "Stark";
var knownAs = "no one";

function fullName(a, b) {
	return a + b;
}
const name = fullName(firstName, lastName);
console.log(name);
```

Output:
AryaStark

13. Guess the output of the code below with a reason.

```js
function sayHello() {
	let name = "Arya Stark";
}
sayHello();

console.log(name);
```

Output:
empty string. This is because the 'name' that is being logged in the console is that of the global variable called name (i.e. window.name)

14. Guess the output of the code below with a reason.

```js
if (true) {
	var name = "Arya Stark";
}
console.log(name);
```

Output:
AryaStark. Because var has global context and is both updated and retrieved irrespective of scope

15. Guess the output of the code below with a reason.

```js
if (true) {
	let name = "Arya Stark";
}
console.log(name);
```

Output:
AryaStark. Because var has global context and is both updated and retrieved irrespective of scope

16. Guess the output of the code below with a reason.

```js
for (var i = 0; i < 20; i++) {
	//
}
console.log(i);
```

Output:
20 because var has function scope, which in this case is the same scope in which the console statement resides. Hence, console statement has access to the var variable

17. Guess the output of the code below with a reason.

```js
for (let i = 0; i < 20; i++) {
	//
}
console.log(i);
```

Output:
Error saying is in not defined/initializied, because let has only block scope. Hence, the i cannot be accessed outside the for loop

1.  Guess the output of the code below with a reason.

```js
for (var i = 0; i < 20; i++) {
	setTimeout(() => console.log(i, "first"), 100);
}
console.log(i, "second");
```

Output:
20 second
20 first (repeated 20 times)
This is because the for loop overwrites the var i for 20 times. And this var i is passed to the timeout function. So, when the body of the timeout function is called after delay, it's i variable points to the var i that is function scoped, whose value is now 20 after the end of for loop.

1.  Guess the output of the code below with a reason.

```js
for (let i = 0; i < 20; i++) {
	setTimeout(() => console.log(i, "first"), 100);
}
console.log(i, "second");
```

Output:
Will throw error saying i is not defined/initialized (this is because the let is block scoped and exists only in the for loop)
0 first
1 first
2 first
...
19 first
This is because in the for loop, since let is block scoped, the new value of let is being passed to setTimeout function during each iteration of the loop.

20. Guess the output and the reason behind that.

```js
function sample() {
	if (true) {
		var username = "John Snow";
	}
	console.log(username);
}
```

Output:
No output since the function was not called. But if it had been called, then output would be "John Snow". Since var is function scoped and not block scoped.

21. Guess the output and the reason behind that.

```js
function sample() {
	if (true) {
		let username = "John Snow";
	}
	console.log(username);
}
```

Output:
No output since the function was not called. But if it had been called, then output would be error saying i had not been defined, since let is block scoped and exists only inside the if condition

22. Guess the output and the reason behind that.

```js
function sample() {
	var username = "Arya Stark";
	if (true) {
		var username = "John Snow";
		console.log(username);
	}
	console.log(username, "second");
}
```

Output:
No output since the function was not called. But if it had been called, then output would be
John Snow
John Snow second
This is because initializing a var inside a function multiple times points to the same var variable.

23. Guess the output and the reason behind that.

```js
function sample() {
	let username = "Arya Stark";
	if (true) {
		let username = "John Snow";
		console.log(username, "first");
	}
	console.log(username, "second");
}
```

Output:
No output since the function was not called. But if it had been called, then output would be
John Snow first
Arya Stark second
This is because initializing a let inside a scope creates another instance of that let variable that exists only inside that scope and takes preference due to lexical scoping.

24. Guess the output and the reason behind that.

```js
function sample(...args) {
	for (let i = 0; i < args.length; i++) {
		let message = `Hello I am ${args[i]}`;
		console.log(message);
	}
}

sample("First", "Second", "Third");
```

Output:
Hello I am First
Hello I am Second
Hello I am Third
The for loop loops over the array of arguments and prints hello statements for each of them

25. Guess the output and the reason behind that.

```js
function sample(...args) {
	for (let i = 0; i < args.length; i++) {
		const message = `Hello I am ${args[i]}`;
		console.log(message);
	}
}

sample("First", "Second", "Third");
```

Output:
Hello I am First
Hello I am Second
Hello I am Third
The for loop loops over the array of arguments and prints hello statements for each of them

26. Guess the output and the reason behind that.

```js
if (true) {
	const myFunc = function() {
		console.log(username, "Second");
	};
	console.log(username, "First");
	let username = "Hello World!";
	myFunc();
}
```

Output:
Will throw error saying i cannot be accessed before initialization. This is because we are calling console.log(username, "First") before the let statement initializing i.

27. Guess the output and the reason behind that.

```js
function outer() {
	let movie = "Mad Max: Fury Road";
	function inner() {
		console.log("I love this movie called ${movie.toUpperCase()}");
	}
	inner();
}

outer();
```

Output:
I love this movie called MAD MAX: FURY ROAD (if the string was a template string)
This is because of the inner function is a closure function that can access the variables of the lexical environment it was created in. Hence, it has access to the movie variable

28. Guess the output and the reason behind that.

```js
function outer() {
	let movie = "Mad Max: Fury Road";
	function inner() {
		let movie = "Before Sunrise";
		console.log("I love this movie called ${movie.toUpperCase()}");
	}
	inner();
}

outer();
```

Output:
I love this movie called BEFORE SUNRISE (if the string was a template string)
This is because of the inner function has another let variable called movie, that is directly used by the console statement.

1.  Guess the output and the reason behind that.

```js
function outer() {
	let movie = "Mad Max: Fury Road";
	function inner() {
		let movie = "Before Sunrise";
		function extraInner() {
			let movie = "Gone Girl";
			console.log("I love this movie called ${movie.toUpperCase()}");
		}
		extraInner();
	}
	inner();
}

outer();
```

Output:
I love this movie called GONE GIRL (if the string was a template string)
This is because of the extraInner function has another let variable called movie, that is directly used by the console statement.

30. Execute all the functions inside `allFunctions` variable using any loop. (Hint: use for of loop functions are object)

```js
const add = (a, b) => {
	return a + b;
};
const sub = (a, b) => {
	return a - b;
};
const multiply = (a, b) => {
	return a + b;
};
const divide = (a, b) => {
	return a / b;
};

let allFunctions = [add, sub, multiply, divide];

for (func of allFunctions) {
	console.log(func(1, 2));
}
```

31. You have to pass 10 and 12 as initial value and find the final output when you pass the return value of one function as an input to the next function in the array `allFunctions`.

```js
const add = (a, b) => {
	return a + b;
};
const sub = (a, b) => {
	return a - b;
};
const multiply = (a, b) => {
	return a + b;
};
const divide = (a, b) => {
	return a / b;
};

let allFunctions = [add, add, add, add, add, sub, sub, multiply, divide];

let result = allFunctions.reduce((acc, cv) => {
	console.log(acc);
	return cv(acc, 12);
}, 10);
console.log(result);
```
