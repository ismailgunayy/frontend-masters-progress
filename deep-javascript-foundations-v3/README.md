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

#### <span id="introduction">Introduction</span>

[Back to Contents](#contents)

- Don't blame the language
- Learn the tool that you use
- [Read the specs](https://www.google.com/search?q=ECMAScript+latest+language+specification&oq=ECMAScript+latest+language+specification&aqs=chrome..69i57j0i546l4.4283j0j4&sourceid=chrome&ie=UTF-8)

---

#### <span id="types">Types</span>

[Back to Contents](#contents)

- **Primitive Types**

  - undefined
  - string
  - number
  - bigint
  - boolean
  - object
    - although it has many subtypes, it is primitive type itself
  - symbol
  - null?
    - _null_ is a primitive type according to specification
    - `typeof null === "object"` asserts _true_, actually this is a bug
    - it is suggested to use _undefined_ when undefine primitive values and use _null_ when undefine an object or a subtype of
  - undeclared?
    - more of a behavior than a type
    - occurs when a variable hasn't been declared using var, let or const
    - ReferenceError
  - function?
    - `typeof myFunc === "function"` asserts _true_
    - subtype of the object, callable, not primitive
  - array?
    - subtype of the object
    - type of arrays can be checked with built-in `Array.isArray` method

- **typeof** operator

  - returns the type of the value (variables don't have types, values do)
  - returns the type as string
    - e.g. `typeof undefined === "undefined"` asserts _true_
  - use only for primitive types

- **Special Values**

  - NaN & isNaN (Not a Number)

    - _NaN_ values are not equal to each other
    - `NaN === NaN` asserts _false_
    - `isNaN` method coerces values to numbers before it checks for them to be _NaN_
    - `isNaN("foo")` asserts _true_
    - `Number.isNaN` can be used to determine if the value is definitely _NaN_
    - Type of _NaN_ is number because it actually is an _invalid_ number

  - Negative Zero _(-0)_
    - can be used as a sign, for example when you need to keep track of what direction that a trend is moving, while the number indicates the quantity the sign may indicate the direction

- **Fundamental Objects**

  - also referred as _Built-In Objects_ or _Native Functions_

  - use **new** with:

    - Object()
    - Array()
    - Function()
    - Date()
    - RegExp()
    - Error()

  - don't use **new** with:
    - String()
    - Number()
    - Boolean()

---

#### <span id="coercion">Coercion</span>

[Back to Contents](#contents)

- _The ECMAScript language implicitly performs automatic type conversion as needed. To clarify the semantics of certain constructs it is useful to define a set of conversion abstract operations. The conversion abstract operations are polymorphic; they can accept a value of any ECMAScript language type._ [Ref](https://262.ecma-international.org/13.0/#sec-abstract-operations:~:text=The%20ECMAScript%20language%20implicitly%20performs%20automatic%20type%20conversion%20as%20needed.%20To%20clarify%20the%20semantics%20of%20certain%20constructs%20it%20is%20useful%20to%20define%20a%20set%20of%20conversion%20abstract%20operations.%20The%20conversion%20abstract%20operations%20are%20polymorphic%3B%20they%20can%20accept%20a%20value%20of%20any%20ECMAScript%20language%20type)
  - there are abstract operations in the implementation of JS (which are not a function itself but a set of algorithms) like toPrimitive, toString, toNumeric, toBoolean
    <br>
- _coercion_ and _conversion_ is interchangeable in JS
- _boxing_ concept creates object instance from primitive values e.g. when you access _length_ property of a string. this is why people says '_everything is object in JS_'

---

#### <span id="philosophy-of-coercion">Philosophy of Coercion</span>

[Back to Contents](#contents)

- it is **irresponsible** to knowingly avoid usage of a feature that can improve code
  readability
- we all use coercion, even if not explicitly or by purpose but implicitly. so learn the tool that you use, period.

---

#### <span id="equality">Equality</span>

[Back to Contents](#contents)

- **==** vs **==**

  - the argument, '~~Loose equality checks value while strict equality check both value and type~~', is wrong
  - **==** allows coercion when the types are different (cause when the types are the same strict equality runs under the hood)kj
  - **===** disallows coercion when the types are the same

- If you **know** the types in a comparison

  - **==** is the _more powerful_, _faster_, _cleaner_, and _more sensible_ solution

- If you **don't know** the types in a comparison
  - not knowing types means not fully understanding the code, best to refactor so you can know the types
  - **===** is an obvious signal of not knowing the types to reader, use it as the safest choice if you don't or can't know the types.

---

#### <span id="static-typing">Static Typing</span>

[Back to Contents](#contents)

- **Static Typing** is

  - _'A programming language characteristic in which variable types are explicitly declared and thus are determined at compile time. This lets the compiler decide whether a given variable can perform the actions requested from it or not.'_ [Ref](https://www.techopedia.com/definition/22321/statically-typed#:~:text=Statically%20typed%20is%20a%20programming%20language%20characteristic%20in%20which%20variable%20types%20are%20explicitly%20declared%20and%20thus%20are%20determined%20at%20compile%20time.%20This%20lets%20the%20compiler%20decide%20whether%20a%20given%20variable%20can%20perform%20the%20actions%20requested%20from%20it%20or%20not.)

- _Pros_ of Static Typing

  - they make the types more obvious in code
  - familiarity, syntax are similar to other statically typed languages (for TypeScript and Flow)
  - extremely popular (good investment)

- _Cons_ of Static Typing
  - _non-js-standard_ syntax
  - require build process

---

#### <span id="scope">Scope</span>

[Back to Contents](#contents)

- List Item 1

---

#### <span id="scope-function-expressions">Scope & Function Expressions</span>

[Back to Contents](#contents)

- List Item 1

---

#### <span id="advanced-scope">Advanced Scope</span>

[Back to Contents](#contents)

- List Item 1

---

#### <span id="closure">Closure</span>

[Back to Contents](#contents)

- List Item 1

---

#### <span id="objects">Objects</span>

[Back to Contents](#contents)

- List Item 1

---

#### <span id="prototypes">Prototypes</span>

[Back to Contents](#contents)

- List Item 1

---
