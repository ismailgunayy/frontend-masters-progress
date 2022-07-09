<ul id="instruct">
      <h1>Closures, Scope, and Execution Context</h1>

<li>

  <h3>Challenge 1</h3>

Create a function <code>createFunction</code> that creates and returns a function. When that created function is called, it should print "hello".

When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.

</li>

<li>

  <h3>Challenge 2</h3>

Create a function <code>createFunctionPrinter</code> that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.

</li>

<li>

  <h3>Challenge 3</h3>

Examine the code for the <code>outer</code> function. Notice that we are returning a function and that function is using variables that are outside of its scope.<br>
Uncomment those lines of code. Try to deduce the output before executing.

Now we are going to create a function <code>addByX</code> that returns a function that will add an input by <code>x</code>.

</li>

<li>

  <h3>Challenge 4</h3>

Write a function <code>once</code> that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.

</li>

<li>

  <h3>Challenge 5</h3>

Write a function <code>after</code> that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.

</li>

<li>

  <h3>Challenge 6</h3>

Write a function <code>delay</code> that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();

</li>

<li>

  <h3>Challenge 7</h3>

Write a function <code>rollCall</code> that accepts an array of names and returns a function. The first time the returned function is invoked, it should log the first name to the console. The second time it is invoked, it should log the second name to the console, and so on, until all names have been called. Once all names have been called, it should log 'Everyone accounted for'.

</li>

<li>

  <h3>Challenge 8</h3>

Create a function <code>saveOutput</code> that accepts a function (that will accept one argument), and a string (that will act as a password). <code>saveOutput</code> will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values.

</li>

<li>

  <h3>Challenge 9</h3>

Create a function <code>cycleIterator</code> that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.

</li>

<li>

  <h3>Challenge 10</h3>

Create a function <code>defineFirstArg</code> that accepts a function and an argument. Also, the function being passed in will accept at least one argument. <code>defineFirstArg</code> will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. Additional arguments needed by the passed-in function will need to be passed into the returned function.

</li>

<li>

  <h3>Challenge 11</h3>

Create a function <code>dateStamp</code> that accepts a function and returns a function. The returned function will accept however many arguments the passed-in function accepts, and return an object with a <code>date</code> key that contains a timestamp with the time of invocation, and an <code>output</code> key that contains the result from invoking the passed-in function. HINT: You may need to research how to access information on Date objects.

</li>

<li>

  <h3>Challenge  12</h3>

Create a function <code>censor</code> that accepts no arguments. <code>censor</code> will return a function that will accept either two strings, or one string. When two strings are given, the returned function will hold onto the two strings as a pair, for future use. When one string is given, the returned function will return the same string, except all instances of first strings (of saved pairs) will be replaced with their corresponding second strings (of those saved pairs).

</li>

<li>

  <h3>Challenge 13</h3>
  There's no such thing as private properties on a JavaScript object! But, maybe there are?
  Implement a function <code>createSecretHolder(secret)</code> which accepts any value as secret and returns an object with ONLY two methods.

<code>getSecret()</code> which returns the secret
<code>setSecret()</code> which sets the secret

</li>

<li>

  <h3>Challenge 14</h3>

Write a function, <code>callTimes</code>, that returns a new function. The new function should return the number of times it’s been called.

</li>

<li>

  <h3>Challenge 15</h3>

Create a function <code>roulette</code> that accepts a number (let us call it <code>n</code>), and returns a function. The returned function will take
no arguments, and will return the string 'spin' the first <code>n - 1</code> number of times it is invoked. On the very next invocation (the <code>nth</code>
invocation), the returned function will return the string 'win'. On every invocation after that, the returned function returns the string 'pick a number to play again'.

</li>

<li>

  <h3>Challenge 16</h3>

Create a function <code>average</code> that accepts no arguments, and returns a function (that will accept either a number as its lone argument, or no arguments
at all). When the returned function is invoked with a number, the output should be average of all the numbers have ever been passed into that function (duplicate
numbers count just like any other number). When the returned function is invoked with no arguments, the current average is outputted. If the returned function is
invoked with no arguments before any numbers are passed in, then it should return 0.

</li>

<li>

  <h3>Challenge 17</h3>

Create a function <code>makeFuncTester</code> that accepts an array (of two-element sub-arrays), and returns a function (that will accept a callback). The returned
function should return <code>true</code> if the first elements (of each sub-array) being passed into the callback all yield the corresponding second elements (of the
same sub-array). Otherwise, the returned function should return <code>false</code>.

</li>

<li>

  <h3>Challenge 18</h3>

Create a function <code>makeHistory</code> that accepts a number (which will serve as a limit), and returns a function (that will accept a string). The returned
function will save a history of the most recent "limit" number of strings passed into the returned function (one per invocation only). Every time a string is passed into the function, the function should return that same string with the word 'done' after it (separated by a space). However, if the string 'undo' is passed into the function, then the function should delete the last action saved in the history, and return that deleted string with the word 'undone' after (separated by a space). If 'undo' is passed into the function and the function's history is empty, then the function should return the string 'nothing to undo'.

</li>

<li>

  <h3>Challenge 19</h3>

  <p><b>Inspect the commented out test cases carefully if you need help to understand these instructions.</b></p>
  Create a function <code>blackjack</code> that accepts an array (which will contain numbers ranging from 1 through 11), and returns a DEALER function.
  The DEALER function will take two arguments (both numbers), and then return yet ANOTHER function, which we will call the PLAYER function.
  <p>On the FIRST invocation of the PLAYER function, it will return the sum of the two numbers passed into the DEALER function.</p>
  <p>On the SECOND invocation of the PLAYER function, it will return either:</p>
  <ol>
  <li>
  the first number in the array that was passed into <code>blackjack</code> PLUS the sum of the two numbers passed in as arguments into the DEALER
  function, IF that sum is 21 or below, OR
  </li>
  <li>
  the string 'bust' if that sum is over 21.
  </li>
  </ol>
  <br>
  If it is 'bust', then every invocation of the PLAYER function AFTER THAT will return the string 'you are
  done!' (but unlike 'bust', the 'you are done!' output will NOT use a number in the array).
  If it is NOT 'bust', then the next invocation of the PLAYER function will return either:
  <br><br>
  <ol>
  <li>
  the most recent sum plus the next number in the array (a new sum) if that new sum is 21 or less, OR
  </li>
  <li>
  the string 'bust' if the new sum is over 21.
  </li>
  </ol>
  <br>
  And again, if it is 'bust', then every subsequent invocation of the PLAYER function will return the string 'you
  are done!'. Otherwise, it can continue on to give the next sum with the next number in the array, and so forth.
  <p>You may assume that the given array is long enough to give a 'bust' before running out of numbers.</p>
  <p>BONUS: Implement <code>blackjack</code> so the DEALER function can return more PLAYER functions that will each
  continue to take the next number in the array after the previous PLAYER function left off. You will just need to
  make sure the array has enough numbers for all the PLAYER functions.</p>

</li>

