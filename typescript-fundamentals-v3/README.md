# [TypeScript Fundamentals, v3 by Mike North](https://frontendmasters.com/courses/typescript-v3/)

## Description

Use TypeScript to add strong typing to large JavaScript apps helps reduce bugs and keeps code performant and maintainable. Learn key Typescript features such as typing variables and function signatures, abstract classes, interfaces, enums, and more – these features increase your ability to fix errors fast. Learn how to migrate your codebase to TypeScript the smart way and improve productivity while building large-scale TypeScript applications with ease!

## Notes

null

## Resources

- [Course Website](https://www.typescript-training.com/course/fundamentals-v3)
- [Course Repository](https://github.com/mike-north/ts-fundamentals-v3)

## Contents

- [Introduction](#introduction)
- [Setup](#setup)
- [Type Categories](#type-categories)
- [Functions](#functions)
- [Types & Values](#types-values)
- [Generics](#generics)

---

### <span id="introduction">Introduction</span>

[Back to Contents](#contents)

- Superset of JS and also compiles to readable JS
- Potential to move some kinds of errors from runtime to compile time, early spotting bugs-
- Popular

---

### <span id="setup">Setup</span>

[Back to Contents](#contents)

- TS variables are **born** with their types

  ```ts
  const a = 5; // a: number
  const b = 5; // b: 5 (Literal Types)
  ```

- Literal Types

  ```ts
  let a = 6;
  a; // a: number

  const b = 6;
  b; // b: 6
  ```

- **any** is a flexible type just like the variables in JavaScript. However, we aim for type safety int TS. That's why, we add a _type annotation_

  ```ts
  let startTime = new Date();
  let endTime: // any

  let startTime = new Date();
  let endTime: Date
  ```

  ```ts
  function add(a, b) {
  	return a + b; // are these numbers or strings or booleans?
  }

  function add(a: number, b: number): number {
  	return a + b;
  }

  add(3, "5"); // Argument of type 'string' is not assignable to parameter of type 'number'
  ```

---

### <span id="type-categories">Type Categories</span>

[Back to Contents](#contents)

- Annotating the types of parameters or return values of functions. In brief, we can type functions

  ```ts
  function addNumbers(a: number, b: number): number {
  	return a + b;
  }
  ```

- Typing objects

  ```ts
  function printCar(car: { make: string; model: string; year: number }) {
  	console.log(`${car.make} ${car.model} (${car.year})`);
  }
  ```

  - Optional properties on objects

    ```ts
    function printCar(car: {
    	make: string;
    	model: string;
    	year: number;
    	chargeVoltage?: number;
    }) {
    	let str = `${car.make} ${car.model} (${car.year})`;
    	car.chargeVoltage;

    	// Type Guard
    	if (typeof car.chargeVoltage !== "undefined")
    		str += `// ${car.chargeVoltage}v`;

    	console.log(str);
    }
    ```

- Index Signatures

  - Sometimes we need to represent a type for _dictionaries_, where values of a consistent type are retrievable by keys.

    ```ts
    const phones: {
    	[k: string]: {
    		country: string;
    		area: string;
    		number: string;
    	};
    } = {
    	home: { country: "+1", area: "211", number: "652-4515" },
    	work: { country: "+1", area: "670", number: "752-5856" },
    	fax: { country: "+1", area: "322", number: "525-4357" },
    };
    ```

- Arrays and Tuples

  - Arrays

    ```ts
    const fileExtensions = ["js", "ts"]; // fileExtensions: string[]
    ```

  - Tuples

    ```ts
    let myCar: [number, string, string] = [2002, "Toyota", "Corolla"];

    myCar = ["Honda", 2017, "Accord"];
    // Type 'string' is not assignable to type 'number'.
    // Type 'number' is not assignable to type 'string'.
    ```

    - Limitations

      ```ts
      const numPair: [number, number] = [4, 5];
      numPair.push(6); // [4, 5, 6]
      numPair.pop(); // [4, 5]
      numPair.pop(); // [4]
      numPair.pop(); // []
      ```

- **Structural vs Nominal Types**

  - What is type checking?

    - Type checking can be thought of as a task that attempts to evaluate the question of compatibility or type equivalence

      ```ts
      function foo(x) {
      	...
      }

      // Type checking...
      // Is `myValue` type-equivalent to
      // what `foo` wants to receive?
      foo(myValue);


      // is the value y holds type equivalent to what 'x' allows?
      x = y

      ..I
      ```

  - Static vs Dynamic Type System

    - Categorizing type systems as either static or dynamic depending on whether type checking is performed at compile time or runtime.

      - Static Type System: Type checking is performed at compile time
      - Dynamic Type System: Type checking is performed at runtime

  - Nominal type system is all about names

    - Most of the other programming languages use nominal type system which is all about names. If a function needs an object with the class 'Car' as a parameter then you can only pass the 'Car' objects to the function

  - Structural type system is all about shape

    - Even though the function is defined as expecting a 'Car' object, you can pass different objects which shape is exactly the same as 'Car' objects.

      ```ts
      const vehicle = {
      	make: "Honda",
      	model: "Accord",
      	year: 2017,
      };

      function printCar(car: { make: string; model: string; year: number }) {
      	console.log(`${car.make} ${car.model} (${car.year})`);
      }
      printCar(vehicle); // Totally fine
      ```

- Union and Intersection Types

  - Union types

    ```ts
    function flipCoin(): "heads" | "tails" {
    	return Math.random() > 0.5 ? "heads" : "tails";
    }

    const outcome = flipCoin(); // outcome: "heads" | "tails"
    ```

  - Intersection Types
    ```ts
    function test(): Date & { name: string } {
    	let today = new Date();
    	return { ...today, name: "today" };
    }
    ```

- **Type Aliases** and **Interfaces**

  - Type Aliases

    ```ts
    type Point = {
    	x: number;
    	y: number;
    };

    function isOnOrigin(point: Point): boolean {
    	if (point.x == 0 && point.y == 0) return true;
    	return false;
    }
    // Because of structural type system
    // only thing that matters is shape
    isOnOrigin({ x: 0, y: 1 });
    ```

    - Type Inheritance

      ```ts
      type SpecialDate = Date & { getReason(): string };

      const newYearsEve: SpecialDate = {
      	...new Date(`01-01-2023`),
      	getReason: () => "Last day of the year",
      };
      ```

  - Interfaces

    ```ts
    interface Animal {
    	legs: number;
    }

    // Interfaces are 'open'
    // It means they can be declared multiple times in the same scope
    // These scopes are merged together
    // Therefore, there are 2 property (legs and tail) in the 'Animal' now
    interface Animal {
    	tail: boolean;
    }

    // Interface inheritance
    interface DogLike extends Animal {
    	bark: Function;
    }

    // All properties and methods in the interface
    // must be implemented in the class
    class Dog implements DogLike {
    	legs = 4;
    	tail = true;
    	bark() {
    		console.log("Woof!");
    	}
    }
    ```

- Recursive Types

  ```ts
  type NestedNumbers = number | NestedNumbers[];

  let a: NestedNumbers = [1, 2, 3, [[4, 5], 6], 7];
  ```

---

### <span id="functions">Functions</span>

[Back to Contents](#contents)

- Callable Types (Call Signatures)

  - We can define callable interfaces or types. The interface and the type in the following example are exactly same.

    ```ts
    interface TwoNumberCalculation {
    	(x: number, y: number): number;
    }

    type TwoNumberCalc = (x: number, y: number) => number;

    const add: TwoNumberCalculation = (a, b) => a + b;
    const subtract: TwoNumberCalc = (x, y) => x - y;
    ```

- **void**

  - In JavaScript, if a function is not implemented to return a value it returns `undefined` by default. TypeScript has `void` type for the functions that basically says 'ignore my return value'

    Example:

    ```ts
    function pushSomething(cb: () => undefined) {
    	cb();
    }

    function unshiftSomething(cb: () => void) {
    	cb();
    }

    let values: number[] = [];

    pushSomething(() => values.push(4)); // TS expects that the function returns 'undefined'
    unshiftSomething(() => values.unshift(4)); // TS ignores the return value because of 'void'
    ```

- Construct Signatures

  ```ts
  interface DateConstructor {
  	new (value: number): Date;
  }

  let MyDateConstructor: DateConstructor = Date;
  const d = new MyDateConstructor();
  ```

- Function Overloads

  ```ts
  function makeDate(timestamp: number): Date;
  function makeDate(m: number, d: number, y: number): Date;
  function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  	if (d !== undefined && y !== undefined) {
  		return new Date(y, mOrTimestamp, d);
  	} else {
  		return new Date(mOrTimestamp);
  	}
  }
  const d1 = makeDate(12345678);
  const d2 = makeDate(5, 5, 5);
  ```

- Classes

  - Access modifiers are available in TS (_public_, _protected_ and _private_)
  - The shorthand that can be used only with access modifiers

    ```ts
    // Verbose
    class Car {
    	make: string;
    	constructor(make: string) {
    		this.make = make;
    	}
    }

    // Succinct
    class Car {
    	constructor(make: string) {}
    }
    ```

---

### <span id="types-values">Types & Values</span>

[Back to Contents](#contents)

- Types describe sets of allowed values

- **Top Types**

  - A top type is a type that describes any possible value allowed by the system
  - **any**
    - Basically, values in JavaScript has type of `any`. It gives maximal flexibility
  - **unknown**
    - It takes any value just like `any`. However, values with an `unknown` type cannot be accessed without narrowing

- **Bottom Types**

  - A bottom type is a type that describes no possible value allowed by the system
  - **never**

    - Exhaustive conditionals - `never` is used for checking that if all the conditions are handled

      ```ts
      class Car {
      	drive() {
      		console.log("vroom");
      	}
      }
      class Truck {
      	tow() {
      		console.log("dragging something");
      	}
      }
      type Vehicle = Truck | Car;

      let myVehicle: Vehicle = obtainRandomVehicle();

      // The exhaustive conditional
      if (myVehicle instanceof Truck) {
      	myVehicle.tow(); // Truck
      } else if (myVehicle instanceof Car) {
      	myVehicle.drive(); // Car
      } else {
      	const neverValue: never = myVehicle;
      }
      ```

- Type Guards & Narrowing

  - Built-in type guards are basically if conditions that checked the type of variable and _narrows_ the variable inside of that block scope. That means if the type of the variable checked and narrowed, methods or properties specific to that type are suggested by autocompletion

    ```ts
    let value: number | string | { dateRange: [Date, Date] };

    if (typeof value == "number") {
    	value; // value: number
    }

    elseif (typeof value == "string") {
    	value; // value: string
    }

    else if ("dateRange" in value) {
      value; // value: { dateRange: [Date, Date]; }
    }
    ```

  - User-defined type guards

    - Using `is` keyword

      ```ts
      interface Person {
      	name: string;
      }

      let maybePerson;

      function isPerson(valueToTest: any): valueToTest is Person {
      	return (
      		valueToTest &&
      		typeof valueToTest == "object" &&
      		"name" in valueToTest &&
      		typeof valueToTest["name"] == "string"
      	);
      }

      if (isPerson(maybePerson)) {
      	maybePerson;
      }
      ```

    - Using assertion

      ```ts
      interface Person {
      	name: string;
      }

      let maybePerson;

      function assertIsPerson(valueToTest: any): asserts valueToTest is Person {
      	if (
      		!(
      			valueToTest &&
      			typeof valueToTest == "object" &&
      			"name" in valueToTest &&
      			typeof valueToTest["name"] == "string"
      		)
      	) {
      		throw new Error("Value does not appear to be a Person");
      	}
      }

      assertIsPerson(maybePerson); // Will throw an error
      ```

- Nullish Values

  - Non-null assertion operator `!`

    - This operator only makes TypeScript to ignore the possibility of value to be `null` or `undefined`. However, the value may still be `null` or `undefined`

      ```ts
      type GroceryCart = {
      	fruits?: string[];
      	vegetables?: string[];
      };

      const cart: GroceryCart = {};

      cart.fruits.push("apple"); // Object is possibly 'undefined'
      cart.fruits!.push("banana"); // TS will assume the object is not 'undefined'
      ```

  - Definite assignment operator `!`

    - This operator used to suppress TS's objections about a class field that is not initialized

      ```ts
      class Car {
      	make: string;
      	electricPower: number;
      	// Property 'electricPower' has no initializer
      	// and is not definitely assigned in the constructor.

      	// Instead of above
      	electricPower!: number;

      	constructor(make: string, electricPower: number = 0) {
      		this.make = make;
      		if (electricPower != 0) {
      			this.electricPower = electricPower;
      		}
      	}
      }
      ```

---

### <span id="generics">Generics</span>

[Back to Contents](#contents)

- null

---
