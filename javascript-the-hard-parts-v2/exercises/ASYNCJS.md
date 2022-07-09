<ul id="instruct">
      <h1>Asynchronicity</h1>

<li>

Note: We recommend that after you complete a challenge, you re-comment out the test case for that challenge so the console output is not confusing when working on subsequent challenges.

</li>

<li>

  <h3>Challenge 1</h3>

Thinking point (no writing code necessary for this challenge): Inspect the code given to you in Challenge 1. In what order should the console logs come out? <code>Howdy</code> first or <code>Partnah</code> first?

</li>

<li>

  <h3>Challenge 2</h3>

Create a function <code>delayedGreet</code> that console logs <code>welcome</code> after 3 seconds.

</li>

<li>

  <h3>Challenge 3</h3>

Create a function <code>helloGoodbye</code> that console logs <code>hello</code> right away, and <code>good bye</code> after 2 seconds.

</li>

<li>

  <h3>Challenge 4</h3>

Create a function <code>brokenRecord</code> that console logs <code>hi again</code> every second. Use the <code>End Code</code> button to stop the console logs when you are satisfied that it is working.

</li>

<li>

  <h3>Challenge 5</h3>

Create a function <code>limitedRepeat</code> that console logs <code>hi for now</code> every second, but only for 5 seconds. Research how to use <code>clearInterval</code> if you are not sure how to do this.

</li>

<li>

  <h3>Challenge 6</h3>

  <p>Write a function called <code>everyXsecsForYsecs</code> that will accept three arguments: a function <code>func</code>, a number <code>interval</code>, and another number <code>duration</code>.</p>
  <p><code>everyXsecsForYsecs</code> will execute the given function every <code>interval</code> number of milliseconds, but then automatically stop after <code>duration</code> milliseconds.</p>
  <p>Then pass the below <code>sayHi</code> function into an invocation of <code>everyXsecsForYsecs</code> with 1000 interval time an 5000 duration time.<br>What do you expect to happen?</p>

</li>

<li>

  <h3>Challenge 7</h3>

    <p>Write a function <code>delayCounter</code> that accepts a number (called 'target') as the first argument and a number of
    milliseconds (called 'wait') as the second argument, and returns a function.</p>
    <p>When the returned function is invoked, it
    should log to the console all of the numbers between 1 and the target number, spaced apart by 'wait' milliseconds.</p>

</li>

<li>

  <h3>Challenge 8</h3>

  <p>Write a function, <code>promised</code>, that takes in a value. This function will return a promise that will resolve after 2 seconds.</p>
  <p><b>Hint</b>: take a look at the Promise object docs on MDN.</p>

</li>

<li>

  <h3>Challenge 9</h3>

Write a <code>SecondClock</code> class, with two methods: <code>start</code> and <code>reset</code>.
​

  <p><b>start</b>: upon invocation, invokes a callback (this.cb, defined in the constructor)
  on an argument every second, with the argument to the callback being the current seconds "value".</p>

  <p>In other words, the callback gets invoked every second on the "seconds hand" of
  the clock. Always start with 1 and don't utilize the seconds value of the current
  computer clock time.</p>

    <ul>
      <li>The first "tick" with value 1 occurs 1 second after the initial "secondClock" invocation.</li>
      <li>The second "tick" with value 2 occurs 2 seconds after the initial "secondClock" invocation.</li>
      <li>...</li>
      <li>The sixtieth "tick" with value 60 occurs 60 seconds after the initial "secondClock" invocation.</li>
      <li>The sixty-first "tick" with value 1 occurs 61 seconds after the initial "secondClock" invocation.</li>
      <li>The sixty-second "tick" with value 2 occurs 62 seconds after the initial "secondClock" invocation.</li>
      <li>etc.</li>
    </ul>

  <p><b>reset</b>: upon invocation, completely stops the "clock".<br>
  Also resets the time back to the beginning.<br>
  ​<br><b>Hint</b>: look up <code>setInterval</code> and <code>clearInterval</code>.</p>
</li>

<li>

  <h3>Challenge 10</h3>

  <p>Write a function called <code>debounce</code> that accepts a function and returns a new function that only allows invocation of the given function after <code>interval</code> milliseconds have passed since the last time the returned function ran.</p>
  <p>Additional calls to the returned function within the <code>interval</code> time should not be invoked or queued, but the timer should still get reset.</p>
  <p><b>For examples of debouncing</b>, check out https://css-tricks.com/debouncing-throttling-explained-examples/</p>

</li>
