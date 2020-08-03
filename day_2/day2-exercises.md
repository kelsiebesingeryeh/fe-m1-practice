# Day 2 Questions

1.  **There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?**  

* Ordered lists are lists that are numbered and need to be in order (recipe, instructions, etc...) They don't use bullet points.
* Unordered lists are lists that are in a bullet point and don't necessarily need to be in order. They don't use numbers.
* Definition lists are used to define terminology. These lists don't have numbers or bullet points like the lists above.  

2.  **What is the basic structure of an element used to link to another website?**  

```html
<a></a>
<a href="INSERT URL HERE">TEXT USER CLICKS ON</a>
```

3.  **What attribute should you include in a link to open a new tab when the link is clicked?**  

You should use the target attribute to open a link in a new window. the value of the attribute should be "underscore blank"

```html
<a href="INSERT URL HERE" target="_blank">TEXT HERE</a>
```

4.  **How do you link to a specific part of the same page?**

You can use a relative URL. instead of using the external URL, you can use the file name as the "HREF" attribute.
```html
<a href="index.html">Home</a>
```

## Day 2 Questions

1. **What is the purpose of CSS?**  

To allow the user to create rules that specify how the content of an element should look. You can add a lot more creativity and color around your elements by using CSS.  

2.  **What does CSS stand for? What does cascading mean in this case?**  

CSS stands for Cascading Style Sheets. Cascading means that the browser is going to read the sheet from top down (cascading).

3.  **What is the basic structure of a CSS rule?**  

CSS works by associating rules with HTML elements. A CSS rule contains two parts: a selector and a declaration. Selectors indicate which element the rule applies to. Declarations indicate how the elements referred to in the selector should be styled.

```CSS
p {font-family: Arial;}
```

4.  **How do you link a CSS stylesheet to your HTML document?**  

By using the link element in the HTML document, it can tell the browser where to find the CSS file to style the page. It needs three attributes: HREF - this is the path the CSS is located in, TYPE - the type of document being linked (text/css), and the REL - which is the relationship between HTML page and the file it should link to. the value should always be "stylesheet" when referring to a CSS file.

5.  **When is it useful to use external stylesheets as opposed to using interal CSS?**  

When your website has more than one page. It can help keep things clean rather than having content and style on each page. It is also good practice to keep the content of the site separated from the rules that determine how it appears.

6.  **Describe what a color hex code is.**  

A color hex code is a 6 digit code made up by the amount of red, green and blue in a color. There is a hash # sign that precedes the color code.

7.  **What are the three parts of an HSL color property?**  

* Hue
* Saturation
* Lightness  

8.  **In the world of typeface, what are the three main categories of fonts? What are the differences between them?**  

* Serif - These fonts have extra details on the ends of the main strokes of the letters.
* Sans-Serif - These fonts have straight ends to letters and have a cleaner design.
* Monospace - Every letter in a monospace font has a fixed width.  

9.  **When specifiying font-size, what are the main three units used?**  
* Pixels
* Percentages
* EMS

## Codepen Link: https://codepen.io/kbesingeryeh/pen/qBberPY
