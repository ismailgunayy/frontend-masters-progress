# [TypeScript Fundamentals, v3 by Mike North](https://frontendmasters.com/courses/typescript-v3/)

## Description

Use TypeScript to add strong typing to large JavaScript apps helps reduce bugs and keeps code performant and maintainable. Learn key Typescript features such as typing variables and function signatures, abstract classes, interfaces, enums, and more – these features increase your ability to fix errors fast. Learn how to migrate your codebase to TypeScript the smart way and improve productivity while building large-scale TypeScript applications with ease!

## Notes

null

## Resources

- [Website](https://www.typescript-training.com/course/fundamentals-v3)
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

- null

---

### <span id="functions">Functions</span>

[Back to Contents](#contents)

- null

---

### <span id="types-values">Types & Values</span>

[Back to Contents](#contents)

- null

---

### <span id="generics">Generics</span>

[Back to Contents](#contents)

- null

---
