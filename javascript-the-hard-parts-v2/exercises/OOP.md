<ul id="instruct">
      <h1>Object-Oriented JavaScript</h1>

<li>
  <h3>Working with Object Literals</h3>
	<h5>Challenge 1</h5>
  Create a function that has two parameters (<code>name</code> and <code>age</code>) and returns an object. Let's call this function <code>makePerson</code>. This function will:

  <ol>
    <li>Create an empty object</li>
    <li>Add a <code>name</code> property to the newly created object with its value being the 'name' argument passed into the function</li>
    <li>Add an <code>age</code> property to the newly created object with its value being the 'age' argument passed into the function</li>
    <li>Return the object</li>
  </ol>
</li>
<br>
<hr>

<li>
  <h3>Using Object.create</h3>
	<h5>Challenge 2</h5>
  Inside <code>personStore</code> object, create a property <code>greet</code> where the value is a function that logs "hello".
</li>

<li>
  <h5>Challenge 3</h5>
  Create a function <code>personFromPersonStore</code> that takes as input a <code>name</code> and an <code>age</code>. When called, the function will create person objects using the <code>Object.create</code> method on the <code>personStore</code> object.
</li>

<li>
  <h5>Challenge 4</h5>
  Without editing the code you've already written, add an <code>introduce</code> method to the <code>personStore</code> object that logs "Hi, my name is [name]".
</li>
<br>
<hr>

<li>
  <h3>Using the NEW keyword</h3>
	<h5>Challenge 5</h5>
  Create a function <code>PersonConstructor</code> that uses the <code>this</code> keyword to save a single property onto its scope called <code>greet</code>. <code>greet</code> should be a function that logs the string 'hello'.
</li>

<li>
	<h5>Challenge 6</h5>
  Create a function <code>personFromConstructor</code> that takes as input a <code>name</code> and an <code>age</code>. When called, the function will create person objects using the <code>new</code> keyword instead of the Object.create method.
</li>

<li>
	<h5>Challenge 7</h5>
  Without editing the code you've already written, add an <code>introduce</code> method to the <code>PersonConstructor</code> function that logs "Hi, my name is [name]".
</li>
<br>
<hr>

<li>
  <h3>Using ES6 Classes</h3>
	<h5>Challenge 8</h5>
  Create a class <code>PersonClass</code>. <code>PersonClass</code> should have a constructor that is passed an input of <code>name</code> and saves it to a property by the same name. <code>PersonClass</code> should also have a method called <code>greet</code> that logs the string 'hello'.
</li>

<li>
	<h5>Challenge 9</h5>
  Create a class <code>DeveloperClass</code> that creates objects by extending the <code>PersonClass</code> class. In addition to having a <code>name</code> property and <code>greet</code> method, <code>DeveloperClass</code> should have an <code>introduce</code> method. When called, <code>introduce</code> should log the string 'Hello World, my name is [name]'.
</li>

<li>
  <h3>EXTENSION: Subclassing</h3>
  Classes in JavaScript can also inherit properties from other classes - this phenomena is known as subclassing. If you've finished all the main challenges, we encourage you to do some research on this concept and complete the challenges below!
</li>

<li>
  <h5>Challenge 10</h5>
  Create an object <code>adminFunctionStore</code> that has access to all methods in the <code>userFunctionStore</code> object, without copying them over individually.
</li>

<li>
  <h5>Challenge 11</h5>
  Create an <code>adminFactory</code> function that creates an object with all the same data fields (and default values) as objects of the <code>userFactory</code> class, but without copying each data field individually.
</li>

<li>
  <h5>Challenge 12</h5>
  Then make sure the value of the 'type' field for <code>adminFactory</code> objects is 'Admin' instead of 'User'.
</li>

<li>
  <h5>Challenge 13</h5>
  Make sure that <code>adminFactory</code> objects have access to <code>adminFunctionStore</code> methods, without copying them over.
</li>

<li>
  <h5>Challenge 14</h5>
  Created a method called <code>sharePublicMessage</code> that logs 'Welcome users!' and will be available to <code>adminFactory</code> objects, but not <code>userFactory</code> objects. Do not add this method directly in the <code>adminFactory</code> function.
</li>

<li>
  <h3>EXTENSION: Mixins</h3>
</li>

<li>
  Mixins are a tool in object-oriented programming that allows objects to be given methods and properties beyond those provided by their inheritance.

For this challenge, complete the missing code, giving all of the <code>robotMixin</code> properties to <code>robotFido</code>. Do this in a single line of code, without adding the properties individually.

</li>
