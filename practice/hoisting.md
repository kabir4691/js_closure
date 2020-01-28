## Hoisting Exercises

1. If the code is `valid` what will be the output and if `invalid` what will be the error. Write the error message.

```js
console.log(animal);
var animal = "monkey";
// Output or Error Message
undefined;
```

```js
console.log(animal);
let animal = "monkey";
// Output or Error Message
Error: cannot access animal before initialization
```

```js
console.log(animal);
const animal = "monkey";
// Output or Error Message
Error: cannot access animal before initialization
```

```js
function sayHello(msg) {
	alert(msg);
}
sayHello("Hey Everyone");
// Output or Error Message
Will alert 'Hey Everyone'
```

```js
sayHello("Hey Everyone");
function sayHello(msg) {
	alert(msg);
}
// Output or Error Message
Will alert 'Hey Everyone'
```

```js
sayHello("Hey Everyone");
var sayHello = msg => {
	alert(msg);
};
// Output or Error Message
Error sayHello is not a function;
```

```js
sayHello("Hey Everyone");
let sayHello = msg => {
	alert(msg);
};
// Output or Error Message
Error: cannot access sayHello before initialization
```
