# [Intermediate TypeScript by Mike North](https://frontendmasters.com/courses/intermediate-typescript/)

> **Completed**

## Description

Learn to type some of the more tricky TypeScript challenges found in large codebases, such as declaration files, generics, and transforming types. You’ll learn to keep yourself and your team unblocked by learning to diagnose common problems quickly. By taking this course, you'll grow from being a contributor to a TypeScript codebase to being on the path to becoming "the TypeScript expert" for your team.

## Notes

null

## Resources

- [Course Website](https://www.typescript-training.com/course/intermediate-v1)

## Contents

- [Introduction](#introduction)
- [Code Infrastructure](#code-infrastructure)
- [Conditional Types](#conditional-types)
- [Mapped Types](#mapped-types)

---

### <span id="introduction">Introduction</span>

[Back to Contents](#contents)

- null

---

### <span id="code-infrastructure">Code Infrastructure</span>

[Back to Contents](#contents)

- null

---

### <span id="conditional-types">Conditional Types</span>

[Back to Contents](#contents)

- Type Queries

  - `keyof` operator

    - The keyof type query allows us to obtain type representing all property keys on a given interface or type

      ```ts
      type User = {
      	name: string;
      	age: number;
      	from: string;
      };

      type UserPropertyNames = keyof User;

      type UserStringPropertyNames = UserPropertyNames & string;
      // type UserStringPropertyNames = "name" | "age" | "from"
      ```

  - `typeof` operator

    - The typeof type query allows you to extract a type from a value.

      ```ts
      const values = [42, "foo"];

      type ValuesType = typeof values;
      // type ValuesType = (string | number)[]
      ```

- Conditional Types

  - Conditional types allow for types to be expressed using a very similar (basically, the same) syntax

    ```ts
    type Dog = {
    	bark: Function;
    };

    type Cat = {
    	mew: Function;
    };

    type Animal<T> = T extends Dog ? Dog : Cat;

    let animal1: Animal<Dog>; // let animal1: Dog

    let animal2: Animal<Cat>; // let animal2: Cat
    ```

- Utility Types

  - TypeScript provides several utility types to facilitate common type transformations. These utilities are available globally. They are used to obtain some sub part of of a type, either through specifying what you're looking for or what you're not looking for

  - `Extract`

    - Extract is about obtaining the _sub-type_ through specifying what you're looking for

      ```ts
      type Colors =
      	| "aqua"
      	| "orchid"
      	| "papayawhip"
      	| [number, number, number]
      	| { red: number; green: number; blue: number }
      	| { r: number; g: number; b: number };

      type StringColors = Exclude<
      	Colors,
      	[number, number, number] | { red: number }
      >;
      // type StringColors = "aqua" | "orchid" | "papayawhip"

      type TupleColors = Extract<Colors, number[]>;
      // type TupleColors = [number, number, number]

      type ObjectColors = Extract<Colors, { [k: string]: number }>; // Almost like a query
      // type ObjectColors =
      // 	| {
      // 			red: number;
      // 			green: number;
      // 			blue: number;
      // 	  }
      // 	| {
      // 			r: number;
      // 			g: number;
      // 			b: number;
      // 	  };
      ```

  - `Exclude`

    - Exclude is about defining the _sub-type_ through specifying what you're not looking for and want to leave behind

      ```ts
      type Colors =
      	| "aqua"
      	| "orchid"
      	| "papayawhip"
      	| [number, number, number]
      	| { red: number; green: number; blue: number };

      type StringColors = Exclude<
      	Colors,
      	[number, number, number] | { red: number }
      >;
      // type StringColors = "aqua" | "orchid" | "papayawhip"

      type TupleColors = Exclude<Colors, string | { red: number }>;
      // type TupleColors = [number, number, number]

      type ObjectColors = Exclude<Colors, string | [number, number, number]>;
      // type ObjectColors = {
      //     red: number;
      //     green: number;
      //     blue: number;
      // }
      ```

  - How do these work?

    - They’re just conditional types, and the only difference between them is the reversal of the “if true” and “if false” expressions (`never : T` vs `T : never`).

      ```ts
      /**
       * Extract from T those types that are assignable to U
       */
      type Extract<T, U> = T extends U ? T : never;
      /**
       * Exclude from T those types that are assignable to U
       */
      type Exclude<T, U> = T extends U ? never : T;
      ```

  - [For the rest of types](https://www.typescriptlang.org/docs/handbook/utility-types.html)

---

### <span id="mapped-types">Mapped Types</span>

[Back to Contents](#contents)

- Mapped allow types to be defined in other types through a much more flexible version of an index signature.

  ```ts
  type Fruit = {
  	name: string;
  	mass: number;
  };

  let record: {
  	[k: string]: Fruit; // Index Signatures
  };

  let record2: {
  	[Key in "apple" | "cherry"]: Fruit; // Mapped Types
  };
  ```

- Utility types are mapped types

- Filtering Properties out

  ```ts
  type DocKeys = Extract<keyof Document, `query${string}`>;
  type KeyFilteredDoc = {
  	[K in DocKeys]: Document[K];
  };

  // type KeyFilteredDoc = {
  //     queryCommandEnabled: (commandId: string) => boolean;
  //     queryCommandIndeterm: (commandId: string) => boolean;
  //     queryCommandState: (commandId: string) => boolean;
  //     queryCommandSupported: (commandId: string) => boolean;
  //     queryCommandValue: (commandId: string) => string;
  //     querySelector: {
  //         ...;
  //     };
  //     querySelectorAll: {
  //         ...;
  //     };
  ```

---
