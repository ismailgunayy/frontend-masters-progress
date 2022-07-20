# [JavaScript: The Hard Parts v2 by Will Sentence](https://frontendmasters.com/courses/javascript-hard-parts-v2/)

## Description

Go under the hood of some of the most important aspects of JavaScript! You'll learn what you need to know to become a sought-after, versatile, problem-solving developer. Combining mental models of JavaScript's inner workings and hands-on programming challenges, this course will give you a solid understanding of callbacks and higher-order functions, closure, asynchronous JavaScript, and object-oriented JavaScript! This course is for developers with a basic to intermediate knowledge of JavaScript who wants to deepen their understanding of the fundamentals to the next level.

---

## Contents

- [JavaScript Principles](#js-principles)
- [Functions & Callbacks](#functions-callbacks)
- [Closures](#closures)
- [Asynchronous JavaScript & _the event loop_](#async-js)
- [Promises _(ES6+)_](#promises)
- [Classes & Prototypes](#classes-prototypes)

---

### <span id="js-principles">JavaScript Principles</span>

[Back to Contents](#contents)

- JavaScript goes through the code line by line and executes each line. This is known as **thread of execution**
  Body of the functions are saved into memory when they are defined. <span id="local-memory">When they are invoked/called they create their own **execution context** which has a **local memory/variable environment/state** belongs to them.</span>

- JavaScript keeps track of what function is currently running and what functions are called from within that function. This is called **Call Stack**. At the bottom of this stack, there is always the **main/global** function call.

  ![call stack in js](./assets/images/call_stack.jpg 'Call Stack in JS')

---

### <span id="functions-callbacks">Functions & Callbacks</span>

[Back to Contents](#contents)

- **Callback Function** is a function which passed as an argument to another function.

  For example:

  ```js
  function multiply(a, b) {
    return a * b;
  }

  function calculate(a, b, op) {
    return op(a, b);
  }

  const result calculate(3, 5, multiply);
  console.log(result); // 15

  result = calculate(10, 2, (a, b) => a/b);
  console.log(result); // 5
  ```

  Another example:

  ```js
  function checkButtonClicked() {
  	console.log('Clicked');
  }

  const button = document.getElementById('button');
  button.addEventListener('click', checkButtonClicked);
  ```

<br/>

- Functions in JavaScript are **objects**.
  - They can assigned to variables or properties of other objects (these functions are called **methods**).
  - They can passed as arguments into functions.
  - They can returned as values from functions.

<br/>

- **Higher Order Functions** are the functions that take in a function or return a function or both.
  - Supports the **DRY Principle** (Don't Repeat Yourself).
  - Allows us to create more **generalized** functions.
  - Makes our code more **declarative** and **readable**.

---

### <span id="closures">Closures</span>

[Back to Contents](#contents)

- **Closure** is the definition a function with memory in short terms. When the functions get invoked, JavaScript create a [store of data](#local-memory) for that function's execution context. Also, functions keep all the data in their scope in a hidden property known as _[\[scope]]_ which persists. As a result, we have a function bundled with references to its surrounding state. In other words, a closure gives you access to an outer function's scope from an inner function even when the inner function is invoked from the outside of the outer function.

  For example:

  ```js
  function outer() {
  	let counter = 0;
  	function inner() {
  		counter++;
  		return counter;
  	}
  	return inner;
  }

  let inner = outer();

  let result = inner();
  console.log(result); // 1

  result = inner();
  result = inner();
  console.log(result); // 3
  ```

- The outer function may be the **global/main**. So that we can even use this concept between files. Do not forget this concept does not make functions save the surrounding state to its local memory but reference to its surrounding state.

  ```js
  //file1.js

  export let value = 23;

  export function test() {
  	value++;
  	console.log(value);
  }
  ```

  ```js
  // file2.js
  import test from './file1.js';

  console.log(value); // 0
  test(); // 1 - The function will log the value because it is told to
  test(); // 2
  test(); // 3

  console.log(value); //3
  ```

---

### <span id="async-js">Asynchronous JavaScript & _the event loop_</span>

[Back to Contents](#contents)

- **Asynchronous programming** is defined as "A technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result." in [_MDN_](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing#:~:text=Asynchronous%20programming%20is%20a,presented%20with%20the%20result.).

  - Callback functions, event handlers, interacting with APIs are the examples of Asynchronous JavaScript.

- Normally, JavaScript is a synchronous language. However, with the power of the concepts above we can run our code asynchronously. But how is it working?

- There is a built-in mechanism called the **Event Loop**, which handles the execution of multiple chunks of your program over time, each time invoking the JS Engine.

  - There is also **Callback Queue** or **Macrotask Queue** where your asynchronous code gets pushed to, and waits for the execution. [_Ref_](https://medium.com/@Rahulx1/understanding-event-loop-call-stack-event-job-queue-in-javascript-63dcd2c71ecd)

  - The Event Loop has one simple job — to monitor the **Call Stack** and the **Callback Queue**. If the Call Stack is empty, the Event Loop will take the first event from the queue and will push it to the Call Stack, which effectively runs it. Such an iteration is called a tick in the Event Loop. Each event is just a function callback. [_Ref_](https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5)

  ```js
  function greet() {
    return 'Hello';
  }

  function yell() {
    return 'HEY!';
  }

  setTimeout(yell, 0);
  greet();

  // 'Hello'
  // 'HEY!'
  // This is because of the working principle of 'callback queue'
  ```

- The visualization of the **Event Loop**

  ![event loop in js](./assets/images/event_loop.png 'Event Loop in JS')

---

### <span id="promises">Promises _(ES6+)_</span>

[Back to Contents](#contents)

- With ES6, **Promises** came into our lives. It is the ideal choice compared to callbacks or event handlers for handling asynchronous operations.

- Promises are special objects built into JavaScript that get returned immediately when we make a call to a Web API _(e.g. fetch)_. They act like a placeholder for the data we expect to get from the browser. Also has a feature that allows us to run any code we want to run when the returned data saved on the promise object: `.then(myFunction)`. The promise object automatically triggers the `myFunction` when the data is fetched for example.

- We should point out that exactly when the function that passed in to promise is going to run. We talked about the **Event Loop**, **Call Stack** and **Callback Queue/Macrotask Queue**. There is one more queue that we need to understand: **Microtask Queue**.

- We know that the asynchronous codes get pushed to Callback Queue. Just like that, JavaScript Promises get pushed into the Microtask Queue and the event loop always prioritize the Microtask Queue. It does not start the tasks in Callback Queue until every task in the Microtask Queue is ran.

  ```js
  function display(data) {
  	console.log(data);
  }
  function printHello() {
  	console.log('Hello');
  }
  function blockFor300ms() {
  	/* console.log('block!') for 300ms */
  }

  setTimeout(printHello, 0); // Pushed into Callback Queue

  const futureData = fetch('https://twitter.com/will/tweets/1'); // Created a placeholder in the memory
  futureData.then(display); // Passed the 'display' function to run when the data returns
  // The key here is that
  // the function does not get pushed into microtask queue when it is passed in to promise
  // but when the data returned from the API

  blockFor300ms(); // Blocks the thread for 300 milliseconds.
  console.log('Me first!');

  // EXECUTION ORDER

  // blockFor300ms() logs 'block' for 300ms.
  // 'block' |
  // 'block' | => 300ms
  // 'block' |
  //
  // console.log("Me first!") logs 'Me first!'

  // Displays the tweet 'Hi' because the event loop checks microtask queue first.
  // printHello() logs 'Hello' to the console.
  ```

- Visualization of the **Callback/Macrotask Queue** and **Microtask Queue**

  ![callback queue and microtask queue in js](./assets/images/queues_in_depth.gif 'Queues in event loop in JS')

---

### <span id="classes-prototypes">Classes & Prototypes</span>

[Back to Contents](#contents)

- **Class** keyword is just a syntactic sugar in JavaScript. There is no difference under the hood between the function and the class below.

  ```js
  function UserCreatorFunc(name) {
  	this.name = name;

  	this.introduce = function () {
  		console.log(`My name is ${this.name}`);
  	};
  }

  const user1 = new UserCreatorFunc('Jack');
  user1.introduce(); // "My name is Jack"

  class UserClass {
  	constructor(name) {
  		this.name = name;
  	}

  	introduce() {
  		console.log(`My name is ${this.name}`);
  	}
  }

  const user2 = new UserClass('Jack');
  user2.introduce(); // "My name is Jack"
  ```

- **`new`** keyword in JavaScript is used to create an instance of an object that has a constructor function. On calling the constructor function with ‘new’ operator, the following actions are taken:
  - A new empty object is created.
  - The new object’s internal `prototype` property (`__proto__`) is set the same as the prototype of the constructing function.
  - The `this` variable is made to point to the newly created object. It binds the property which is declared with `this` keyword to the new object.
  - A newly created object is returned when the constructor function returns a non-primitive value (custom JavaScript object). If the constructor function returns a primitive value, it will be ignored. At the end of the function, `this` is returned if there is no return statement in the function body. [_Ref_](https://www.geeksforgeeks.org/javascript-new-keyword/#:~:text=New%20keyword%20in,the%20function%20body.)

---
