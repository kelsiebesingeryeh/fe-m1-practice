# Day 5 Questions

**1.  How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?**  

You need to give the variable a name in order to declare it. The equal sign is saying that you are assigning a value to the variable. The equal sign is called  an "assignment operator".

ex:  VAR (is the variable keyword we use to create the variable), QUANTITY (is the variable name or identifier), = (is the assignment operator assigning a value on the right to the variable name on the left), and 5 (is the variable value).
```javascript
var quantity = 5;  
```
**2.  There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.**  

* numbers: Numbers are numeric data types (can be integers or floats). They are used for calculations, sizes, positions, etc...
* strings: Strings are a data type consisting of letters and other characters. They are used to add new content into a page and can have HTML markup.
* booleans: Boolean data types only have one of two values - true or false. They are useful for determining which part of a script should run.

**3.  What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?**  

* Name must begin with a letter, dollar sign ($), or an underscore ( _ ). It cannot start with a number.
* Name can contain letters, numbers, dollar signs, or an underscore. It cannot contain a dash (-) or a period (.).
* You cannot use keywords or reserved words. Ex: var is a keyword used to declare a variable.
* All variables are case sensitive. It is bad practice to create two variables that have the same name using different cases.
* Use a name that describes the kind of information that the variable stores.
* If your variable is made up of more than one word, use a capital letter for the first letter of every word after the first word.

Examples of JavaScript reserverd words are: boolean, class, else, function, return, while.  

**4.  How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?**    

It is useful because you don't have to create multiple variables, you can just create one array and keep adding to it. To access items in an array, you need to specify the array name along with the index number in square brackets. You can change the value of an item in an array by selecting it and assigning it a new value.

ex:
```javascript
var animals = ["Dogs", "Cats", "Goats"];
animals[0];
animals[2] = "Pig";
```  

**5.  What is the difference between an expression and a statement?**  

An expression evaluates into a single value. Expressions can do two different things. They can just assign a value to have a variable or they can use two or more values to return a single value.


**6.  What are three types of operators and how are they used?**  

* Assignment Operators - these are used to assign a value to a variable. Ex: animal = "dog";
* Comparison Operators - these are used to compare two values and return true or false. Ex: number = 2 > 5; (false)
* Logical Operators - these are used to combine expressions and return true or false. Ex: number = (5 > 3) && (2 < 5) (true)

## Exercises: Variables

**1. The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?**

* Store the following into variables: number of children, partner's name, geographic location, job title.
* Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

Answer:  

```javascript
var numChildren = 0
var partnerName = "Selwyn"
var geoLocation = "Denver"
var jobTitle = "Event Director"

var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ', and married to ' + partnerName + 'with' + numChildren +'kids.';
console.log(future);
```

**2. The Age Calculator
Forgot how old you are? Calculate it!**

* Store the current year in a variable.
* Store your birth year in a variable.
* Calculate your 2 possible ages based on the stored values.
* Output them to the screen like so: "You are either NN or NN", substituting the values.

Answer:  

```javascript
currentYear = 2020
birthYear = 1990
currentAge = currentYear - birthYear;
console.log("You are either" + currentAge + "or" + (currentAge - 1));
```

**3. The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!**

* Store your current age into a variable.
* Store a maximum age into a variable.
* Store an estimated amount per day (as a number).
* Calculate how many you would eat total for the rest of your life.
* Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

Answer:
```javascript
currentAge = 30
maxAge = 100
dailySnack = 5
totalLifeSnack = (dailySnack * 365) * (maxAge - currentAge)
console.log("You will need" + totalLifeSnack + "to last you until the ripe old age of" + maxAge)
