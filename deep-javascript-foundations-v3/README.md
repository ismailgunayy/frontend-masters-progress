# [Deep JavaScript Foundations, v3 by Kyle Simpson](https://frontendmasters.com/courses/deep-javascript-v3/)

## Description

Dive into the core pillars of the JavaScript language with Kyle Simpson, author of the popular, You Don't Know JS, book series. You'll learn JavaScript's types, how to convert between them, and compare them with == and ===. You'll also learn lexical scope and closure. As well as the objects oriented system (this, prototypes and classes).

---

## Contents

- [Introduction](#introduction)
- [Types](#types)
- [Coercion](#coercion)
- [Philosophy of Coercion](#philosophy-of-coercion)
- [Equality](#equality)
- [Static Typing](#static-typing)
- [Scope](#scope)
- [Scope & Function Expressions](#scope-function-expressions)
- [Advanced Scope](#advanced-scope)
- [Closure](#closure)
- [Objects](#objects)
- [Prototypes](#prototypes)

---

### <span id="introduction">Introduction</span>

[Back to Contents](#contents)

- Don't blame the language
- Learn the tool that you use
- [Read the specs](https://www.google.com/search?q=ECMAScript+latest+language+specification&oq=ECMAScript+latest+language+specification&aqs=chrome..69i57j0i546l4.4283j0j4&sourceid=chrome&ie=UTF-8)

---

### <span id="types">Types</span>

[Back to Contents](#contents)

- **Primitive Types**

  - `undefined`
  - `string`
  - `number`
  - `bigint`
  - `boolean`
  - `object`
    - Although it has many subtypes, it is primitive type itself
  - `symbol`
  - `null`?
    - `null` is a primitive type according to specification
    - `typeof null === "object"` asserts `true`, actually this is a bug
    - It is suggested to use `undefined` when undefine primitive values and use `null` when undefine an object or a subtype of
  - undeclared?
    - More of a behavior than a type
    - Occurs when a variable hasn't been declared using var, `let` or `const`
    - `ReferenceError`
  - `function`?
    - `typeof myFunc === "function"` asserts `true`
    - Subtype of the `object`, callable, not primitive
  - `array`?
    - Subtype of the `object`
    - Type of arrays can be checked with built-in `Array.isArray` method

- **typeof** operator

  - Returns the type of the value (variables don't have types, values do)
  - Returns the type as `string`
    - e.g. `typeof undefined === "undefined"` asserts `true`
  - Use only for primitive types

- **Special Values**

  - `NaN` & `isNaN` (Not a Number)

    - `NaN` values are not equal to each other
    - `NaN === NaN` asserts `false`
    - `isNaN` method coerces values to numbers before it checks for them to be `NaN`
    - `isNaN("foo")` asserts `true`
    - `Number.isNaN` can be used to determine if the value is definitely `NaN`
    - Type of `NaN` is number because it actually is an _invalid_ number

  - Negative Zero _(-0)_
    - Can be used as a sign in a scenario that when you need to keep track of what direction that a trend is moving, while the number indicates the quantity the sign may indicate the direction

- **Fundamental Objects**

  - Also referred as _Built-In Objects_ or _Native Functions_

  - Use **`new`** with:

    - `Object()`
    - `Array()`
    - `Function()`
    - `Date()`
    - `RegExp()`
    - `Error()`

  - Don't use **`new`** with:
    - `String()`
    - `Number()`
    - `Boolean()`

---

### <span id="coercion">Coercion</span>

[Back to Contents](#contents)

- _The ECMAScript language implicitly performs automatic type conversion as needed. To clarify the semantics of certain constructs it is useful to define a set of conversion abstract operations. The conversion abstract operations are polymorphic; they can accept a value of any ECMAScript language type._ [Ref](https://262.ecma-international.org/13.0/#sec-abstract-operations:~:text=The%20ECMAScript%20language%20implicitly%20performs%20automatic%20type%20conversion%20as%20needed.%20To%20clarify%20the%20semantics%20of%20certain%20constructs%20it%20is%20useful%20to%20define%20a%20set%20of%20conversion%20abstract%20operations.%20The%20conversion%20abstract%20operations%20are%20polymorphic%3B%20they%20can%20accept%20a%20value%20of%20any%20ECMAScript%20language%20type)

  - there are abstract operations in the implementation of JS (which are not a function itself but a set of algorithms) like toPrimitive, toString, toNumeric, toBoolean

- _Coercion_ and _Conversion_ is interchangeable in JS
- _Boxing_ concept creates object instance from primitive values e.g. when you access _length_ property of a string. This is why people says '_everything is object in JS_'

---

### <span id="philosophy-of-coercion">Philosophy of Coercion</span>

[Back to Contents](#contents)

- It is **irresponsible** to knowingly avoid usage of a feature that can improve code
  readability
- We all use coercion, even if not explicitly or by purpose but implicitly.
- Learn the tool that you use!

---

### <span id="equality">Equality</span>

[Back to Contents](#contents)

- **==** vs **===**

  - The argument, '~~Loose equality checks value while strict equality check both value and type~~', is wrong
  - `==` allows coercion when the types are different (cause when the types are the same strict equality runs under the hood)
  - `===` disallows coercion when the types are the same

- If you **know** the types in a comparison

  - `==` is the _more powerful_, _faster_, _cleaner_, and _more sensible_ solution

- If you **don't know** the types in a comparison
  - Not knowing types means not fully understanding the code, It is best to refactor so you can know the types
  - `===` is an obvious signal of not knowing the types to reader. Use it as the safest choice if you don't or can't know the types.

---

### <span id="static-typing">Static Typing</span>

[Back to Contents](#contents)

- **Static Typing** is

  - _'A programming language characteristic in which variable types are explicitly declared and thus are determined at compile time. This lets the compiler decide whether a given variable can perform the actions requested from it or not.'_ [Ref](https://www.techopedia.com/definition/22321/statically-typed#:~:text=Statically%20typed%20is%20a%20programming%20language%20characteristic%20in%20which%20variable%20types%20are%20explicitly%20declared%20and%20thus%20are%20determined%20at%20compile%20time.%20This%20lets%20the%20compiler%20decide%20whether%20a%20given%20variable%20can%20perform%20the%20actions%20requested%20from%20it%20or%20not.)

- _Pros_ of Static Typing

  - They make the types more obvious in code
  - Familiarity, syntax are similar to other statically typed languages (for TypeScript and Flow)
  - Extremely popular (good investment)

- _Cons_ of Static Typing
  - _Non-JS-Standard_ syntax
  - Require build process

---

### <span id="scope">Scope</span>

[Back to Contents](#contents)

- **scope** is where to look for things

  - JavaScript organizes scopes with <u>functions</u> and <u>blocks</u>

- **undefined** vs **undeclared**
  - `undefined` means that there is a variable created but the variable does not have a value right now
  - _undeclared_ means that the variable we try to access to is never formally declared in any scope that we have accessed to. In strict mode it results in `ReferenceError`

---

### <span id="scope-function-expressions">Scope & Function Expressions</span>

[Back to Contents](#contents)

- There are 2 ways of creating a function

  - **Function Declaration**
    ```js
    function test() {
      ...
    }
    ```
  - **Function Expression**

    ```js
    var test = function() {
      ...
    } // Anonymous Function Expression

    var test2 = function named() {
      ...
    } // Named Function Expression

    myObj.method = function testMethod() {
      ...
    }
    ```

- _Kyle Simpson_ recommends using function declaration when it is possible, but if you have to use function expression he recommends always (100%) using named function expressions instead of anonymous function expressions for these 3 reasons:

  - Create a more reliable function self-reference
  - Make stack traces more debuggable
  - Make the code more self-documenting

- Arrow functions are also <u>anonymous functions</u>

---

### <span id="advanced-scope">Advanced Scope</span>

[Back to Contents](#contents)

- **IIFE** (Immediately Invoked Function Expression)

  - They give the ability to create a local scope and avoid name collision, th local scope is deleted right after they are invoked and therefore the global scope happens to be not affected

- **Block Scoping**

  - Blocks are not scopes until they have a `let` or `const` inside of them

- **const** keyword

  - It does not make the variable unchangeable, it makes the variable cannot be reassigned,
  - Since it does not prevent mutating of the non-primitive types it would be better to use `const` with only primitive types.

- **Hoisting**

  - MDN says '_JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. Hoisting allows functions to be safely used in code before they are declared._' [Ref](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting#:~:text=JavaScript%20Hoisting%20refers,they%20are%20declared.)

  - **~~let doesn't hoist~~**

    - When you use `var` keyword, the program knows there is a variable called _teacher_ in the scope and when the scope starts the variable is initialized to **`undefined`**

      ```js
      console.log(teacher); // undefined
      var teacher = 'Kyle';
      ```

    - When you use `let` or `const` keyword, the program still knows there is a variable called _teacher_ in the scope, but the variable remains **uninitialized**

      In this example, we normally expect the string `'Kyle'` in the console. However, what we get is a `ReferenceError` which is a proof that `let` or `const` also hoists, albeit in a different way.

      ```js
      var teacher = 'Kyle';

      {
      	console.log(teacher); // ReferenceError: Cannot access 'teacher' before initialization
      	let teacher;
      }
      ```

---

### <span id="closure">Closure</span>

[Back to Contents](#contents)

- **What is closure?**
  - Closure is when a function <u>remembers</u> its lexical scope even when the function is executed outside that lexical scope

  - Closure is a preservation of the linkage to a variable, not the capturing of the value


---

### <span id="objects">Objects</span>

[Back to Contents](#contents)

- List Item 1

---

### <span id="prototypes">Prototypes</span>

[Back to Contents](#contents)

- List Item 1

---
