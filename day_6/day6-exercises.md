# Day 6 questions  


**1.  If we have a function defined as `function sayHello(){console.log("Hello!")}`, what is the difference between entering `sayHello` and `sayHello()` in the console?**  

The difference between them is that sayHello() is a function, and sayHello is just a reference to the function. You have to have parenthesis when you are calling a function.

**2.  What is the difference between function parameters and arguments?**  

Parameters act like variables and are used within the function, they are called in the first line. Arguments are passed into the code (like real numbers or strings, etc..) and are used to perform the calculation, method, etc...

**3.  What is the keyword `return` used for?**  

The return keyword is used to return a value to the code that called the function.

**4.  How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?**  

Local variables take up less memory than global variables and decreases the risk of naming conflicts. Global variables should be used over local ones when the values of the variable remain the same.


## Exercises
**1. The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?**

* Write a function named tellFortune that:
   * takes 4 arguments: number of children, partner's name, geographic location, job title.
   * outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
* Call that function 3 times with 3 different values for the arguments.

Answer:

```javascript
function tellFortune(numChildren, partnerName, location, jobTitle) {
  var future = "You will be a " + jobTitle + " in " + location + ", and married to " + partnerName + " with " + numChildren + " kids."
  console.log(future);
}

tellFortune(5, "Selwyn", "Denver", "CSM");
tellFortune(2, "Selwyn", "NYC", "DJ");
tellFortune(3, "Selwyn", "LA", "Model");
```
**2. The Age Calculator
Forgot how old you are? Calculate it!**

* Write a function named calculateAge that:
* takes 2 arguments: birth year, current year.
* calculates the 2 possible ages based on those years.
* outputs the result to the screen like so: "You are either NN or NN"
* Call the function three times with different sets of values.
* Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

Answer:
```javascript
function calculateAge (birthYear, currentYear) {
  var currentAge = currentYear - birthYear
  var result = "You are either " + currentAge + " or " + (currentAge - 1)
  console.log(result);
}

calculateAge(1990, 2020);
calculateAge(1955, 2020);
calculateAge(1980, 2020);
```
**3. The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!**

* Write a function named calculateSupply that:
* takes 2 arguments: age, amount per day.
* calculates the amount consumed for rest of the life (based on a constant max age).
* outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
( Call that function three times, passing in different values each time.
* Bonus: Accept floating point values for amount per day, and round the result to a round number.

Answer:
```javascript
function calculateSupply(age, amountPerDay) {
  var maxAge = 100;
  var lifetimeSnacks = (amountPerDay * 365) * (maxAge - age)
  console.log("You will need " + lifetimeSnacks + " to last you until the ripe old age of " + maxAge)
}

calculateSupply(5, 1);
calculateSupply(30, 2.5);
calculateSupply(40, 3);
```
