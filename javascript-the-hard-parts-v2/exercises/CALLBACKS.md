<ul id="instruct">
      <h1>Callbacks and Higher-Order Functions</h1>

<li>
  <h3>Challenge 1</h3>

Create a function <code>addTwo</code> that accepts one input and adds 2 to it.

</li>

<li>
  <h3>Challenge 2</h3>

Create a function <code>addS</code> that accepts one input and adds an "s" to it.

</li>

<li>
  <h3>Challenge 3</h3>
  Create a function called <code>map</code> that takes two inputs:<br>
  <ol>
    <li>an array of numbers (a list of numbers)</li>
    <li>a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')</li>
  </ol>

Have <code>map</code> return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.<br>

  <!--
    map([1,2,3,4,5], multiplyByTwo); //-> [2,4,6,8,10]
    multiplyByTwo(1); //-> 2
    multiplyByTwo(2); //-> 4
  -->
  <pre style="color:#000000;background:#ccc;">map<span style="color:#808030; ">(</span><span style="color:#808030; ">[</span><span style="color:#008c00; ">1</span><span style="color:#808030; ">,</span><span style="color:#008c00; ">2</span><span style="color:#808030; ">,</span><span style="color:#008c00; ">3</span><span style="color:#808030; ">,</span><span style="color:#008c00; ">4</span><span style="color:#808030; ">,</span><span style="color:#008c00; ">5</span><span style="color:#808030; ">]</span><span style="color:#808030; ">,</span> multiplyByTwo<span style="color:#808030; ">)</span><span style="color:#800080; ">;</span> <span style="color:#696969; ">//-&gt; [2,4,6,8,10]</span><br>multiplyByTwo<span style="color:#808030; ">(</span><span style="color:#008c00; ">1</span><span style="color:#808030; ">)</span><span style="color:#800080; ">;</span> <span style="color:#696969; ">//-&gt; 2</span><br>multiplyByTwo<span style="color:#808030; ">(</span><span style="color:#008c00; ">2</span><span style="color:#808030; ">)</span><span style="color:#800080; ">;</span> <span style="color:#696969; ">//-&gt; 4</span>
  </pre>

</li>

<li>
  <h3>Challenge 4</h3>

Create a function called <code>forEach</code> that takes an array and a callback, and runs the callback on each element of the array. <code>forEach</code> does not return anything.

  <!--
    let alphabet = '';
    const letters = ['a', 'b', 'c', 'd'];
    forEach(letters, function(char) {
      alphabet += char;
    });
    console.log(alphabet);   //prints 'abcd'
  -->
  <pre style="color:#000000;background:#ccc;"><span style="color:#800000; font-weight:bold; ">let</span> alphabet <span style="color:#808030; ">=</span> <span style="color:#800000; ">'</span><span style="color:#800000; ">'</span><span style="color:#800080; ">;</span>
<span style="color:#800000; font-weight:bold; ">const</span> letters <span style="color:#808030; ">=</span> <span style="color:#808030; ">[</span><span style="color:#800000; ">'</span><span style="color:#0000e6; ">a</span><span style="color:#800000; ">'</span><span style="color:#808030; ">,</span> <span style="color:#800000; ">'</span><span style="color:#0000e6; ">b</span><span style="color:#800000; ">'</span><span style="color:#808030; ">,</span> <span style="color:#800000; ">'</span><span style="color:#0000e6; ">c</span><span style="color:#800000; ">'</span><span style="color:#808030; ">,</span> <span style="color:#800000; ">'</span><span style="color:#0000e6; ">d</span><span style="color:#800000; ">'</span><span style="color:#808030; ">]</span><span style="color:#800080; ">;</span>
forEach<span style="color:#808030; ">(</span>letters<span style="color:#808030; ">,</span> <span style="color:#800000; font-weight:bold; ">function</span><span style="color:#808030; ">(</span><span style="color:#800000; font-weight:bold; ">char</span><span style="color:#808030; ">)</span> <span style="color:#800080; ">{</span>
  alphabet <span style="color:#808030; ">+=</span> <span style="color:#800000; font-weight:bold; ">char</span><span style="color:#800080; ">;</span>
<span style="color:#800080; ">}</span><span style="color:#808030; ">)</span><span style="color:#800080; ">;</span>
console<span style="color:#808030; ">.</span><span style="color:#800000; font-weight:bold; ">log</span><span style="color:#808030; ">(</span>alphabet<span style="color:#808030; ">)</span><span style="color:#800080; ">;</span>   <span style="color:#696969; ">//prints 'abcd'</span>
</pre>

</li>

<li>
  <h3>Challenge 5</h3>

In challenge 3, you've created a function called <code>map</code>. In this challenge, you're going to rebuild the <code>map</code> function by creating a function called <code>mapWith</code>. This time you're going to use <code>forEach</code> inside of <code>mapWith</code> instead of using a <code>for</code> loop.

</li>

<li>
  <h3>Challenge 6</h3>

Create a function called <code>reduce</code> that takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.

  <!--
    const nums = [4, 1, 3];
    const add = function(a, b) { return a + b; }
    reduce(nums, add, 0);   //-> 8
  -->
  <pre style="color:#000000;background:#ccc;"><span style="color:#800000; font-weight:bold; ">const</span> nums <span style="color:#808030; ">=</span> <span style="color:#808030; ">[</span><span style="color:#008c00; ">4</span><span style="color:#808030; ">,</span> <span style="color:#008c00; ">1</span><span style="color:#808030; ">,</span> <span style="color:#008c00; ">3</span><span style="color:#808030; ">]</span><span style="color:#800080; ">;</span>
<span style="color:#800000; font-weight:bold; ">const</span> add <span style="color:#808030; ">=</span> <span style="color:#800000; font-weight:bold; ">function</span><span style="color:#808030; ">(</span>a<span style="color:#808030; ">,</span> b<span style="color:#808030; ">)</span> <span style="color:#800080; ">{</span> <span style="color:#800000; font-weight:bold; ">return</span> a <span style="color:#808030; ">+</span> b<span style="color:#800080; ">;</span> <span style="color:#800080; ">}</span>
reduce<span style="color:#808030; ">(</span>nums<span style="color:#808030; ">,</span> add<span style="color:#808030; ">,</span> <span style="color:#008c00; ">0</span><span style="color:#808030; ">)</span><span style="color:#800080; ">;</span>   <span style="color:#696969; ">//-&gt; 8</span>
</pre>

Here's how it works. The function has an "accumulator value" which starts as the <code>initialValue</code> and accumulates the output of each loop. The array is iterated over, passing the accumulator and the next array element as arguments to the <code>callback</code>. The callback's return value becomes the new accumulator value. The next loop executes with this new accumulator value. In the example above, the accumulator begins at 0. <code>add(0,4)</code> is called. The accumulator's value is now 4. Then <code>add(4, 1)</code> to make it 5. Finally <code>add(5, 3)</code> brings it to 8, which is returned.

</li>

<li>
  <h3>Challenge 7</h3>

Construct a function <code>intersection</code> that takes in an array of arrays, compares the inner arrays, and returns a new array with elements found in all of them. BONUS: Use reduce!

  <!-- console.log(intersection([[5, 10, 15, 20, 10], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
  should log: [15, 5] -->
</li>

<li>
  <h3>Challenge 8</h3>

Construct a function <code>union</code> that takes in an array of arrays, compares the inner arrays, and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first array. BONUS: Use reduce!

  <!-- console.log(union([[5, 10, 15, 5], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]])); should log: [5, 10, 15, 88, 1, 7, 100] -->
</li>

<li>
  <h3>Challenge 9</h3>

Construct a function <code>objOfMatches</code> that accepts two arrays and a callback. <code>objOfMatches</code> will build an object and return it. To build the object, <code>objOfMatches</code> will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.

  <!-- console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); })); should log: { hi: 'HI', bye: 'BYE', later: 'LATER' } -->
</li>

<li>
  <h3>Challenge 10</h3>

Construct a function <code>multiMap</code> that will accept two arrays: an array of values and an array of callbacks. <code>multiMap</code> will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

  <!-- console.log(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]);
  should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] } -->
</li>

<li>
  <h3>Challenge 11</h3>

Construct a function <code>objectFilter</code> that accepts an object as the first parameter and a callback function as the second parameter. <code>objectFilter</code> will return a new object. The new object will contain only the properties from the input object such that the property's value is equal to the property's key passed into the callback.

</li>

<li>

  <h3>Challenge 12</h3>

Create a function <code>majority</code> that accepts an array and a callback. The callback will return either
<code>true</code> or <code>false</code>. <code>majority</code> will iterate through the array and perform the callback
on each element until it can be determined if the majority of the return values from the callback are
<code>true</code>. If the number of <code>true</code> returns is equal to the number of <code>false</code> returns,
<code>majority</code> should return <code>false</code>.

</li>

<li>

  <h3>Challenge 13</h3>

Create a function <code>prioritize</code> that accepts an array and a callback. The callback will return either
<code>true</code> or <code>false</code>. <code>prioritize</code> will iterate through the array and perform the
callback on each element, and return a new array, where all the elements that yielded a return value of
<code>true</code> come first in the array, and the rest of the elements come second.

</li>

<li>

  <h3>Challenge 14</h3>

Create a function <code>countBy</code> that accepts an array and a callback, and returns an object.
<code>countBy</code> will iterate through the array and perform the callback on each element. Each return value from
the callback will be saved as a key on the object. The value associated with each key will be the number of times that
particular return value was returned.

</li>

<li>

  <h3>Challenge 15</h3>

Create a function <code>groupBy</code> that accepts an array and a callback, and returns an object.
<code>groupBy</code> will iterate through the array and perform the callback on each element. Each return value from
the callback will be saved as a key on the object. The value associated with each key will be an array consisting of
all the elements that resulted in that return value when passed into the callback.

</li>

<li>

  <h3>Challenge 16</h3>

Create a function <code>goodKeys</code> that accepts an object and a callback. The callback will return either
<code>true</code> or <code>false</code>. <code>goodKeys</code> will iterate through the object and perform the
callback on each value. <code>goodKeys</code> will then return an array consisting only the keys whose associated
values yielded a <code>true</code> return value from the callback.

</li>

<li>

  <h3>Challenge 17</h3>

Create a function <code>commutative</code> that accepts two callbacks and a value. <code>commutative</code> will
return a boolean indicating if the passing the value into the first function, and then passing the resulting output
into the second function, yields the same output as the same operation with the order of the functions reversed
(passing the value into the second function, and then passing the output into the first function).

</li>

<li>

  <h3>Challenge 18</h3>

Create a function <code>objFilter</code> that accepts an object and a callback. <code>objFilter</code> should make a
new object, and then iterate through the passed-in object, using each key as input for the callback. If the output
from the callback is equal to the corresponding value, then that key-value pair is copied into the new object.
<code>objFilter</code> will return this new object.

</li>

<li>

  <h3>Challenge 19</h3>

Create a function <code>rating</code> that accepts an array (of functions) and a value. All the functions in the array
will return <code>true</code> or <code>false</code>. <code>rating</code> should return the percentage of functions
from the array that return <code>true</code> when the value is used as input.

</li>

<li>

  <h3>Challenge 20</h3>

Create a function <code>pipe</code> that accepts an array (of functions) and a value. <code>pipe</code> should input
the value into the first function in the array, and then use the output from that function as input for the second
function, and then use the output from that function as input for the third function, and so forth, until we have an
output from the last function in the array. <code>pipe</code> should return the final output.

</li>

<li>

  <h3>Challenge 21</h3>

Create a function <code>highestFunc</code> that accepts an object (which will contain functions) and a subject (which
is any value). <code>highestFunc</code> should return the key of the object whose associated value (which will be a
function) returns the largest number, when the subject is given as input.

</li>

<li>

  <h3>Challenge 22</h3>

Create a function, <code>combineOperations</code>, that takes two parameters: a starting value and an array of functions. <code>combineOperations</code> should pass the starting value into the first function in the array. <code>combineOperations</code> should pass the value returned by the first function into the second function, and so on until every function in the array has been called. <code>combineOperations</code> should return the final value returned by the last function in the array.

</li>

<li>

  <h3>Challenge 23</h3>

Define a function <code>myFunc</code> that takes an array and a callback. <code>myFunc</code> should pass each element from the array (in
order) into the callback. If the callback returns true, <code>myFunc</code> should return the index of the current element. If
the callback never returns true, <code>myFunc</code> should return -1;

</li>

<li>

  <h3>Challenge 24</h3>

Write a function <code>myForEach</code> that accepts an array and a callback function. Your function should pass each element of
the array (in order) into the callback function. The behavior of this function should mirror the functionality of the
native <code>.forEach()</code> JavaScript array method as closely as possible.

</li>
