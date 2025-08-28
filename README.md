###1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

A.`getElementById()` :
It's returns a single element with the specified ID and is the fastest selector.

B.`getElementsByClassName()`:
It's returns a HTMLCollection of elements with the given className and is works like array.

C.`querySelector()` :
It's returns the first element that matches a CSS selector.

D.`querySelectorAll()` :
It's returns a static NodeList of all elements matching a CSS selector and supports forEach().

###2.How do you create and insert a new element into the DOM?

To create and insert a new element into the DOM using JavaScript, first use `document.createElement()` to create the element. Then, set its content or attributes like textContent, className, or id. Finally, insert it into the DOM using methods like `appendChild()` or `insertBefore()` or `prepend()` on a parent element. These are allows us to dynamically add content to a web page.

###3.What is Event Bubbling and how does it work?

Event Bubbling is when an event on a child element automatically propagates upward to its parent elements in the DOM. For example, checking a button triggers the event on the button first, then its parent, and so on up to the document root. This is the default event behavior unless stopped with `event.stopPropagation()`.

###4.What is Event Delegation in JavaScript? Why is it useful?

Event Delegation in JavaScript is adding one event listener to a parent element instead of adding many listeners to each child. When a child element is clicked, the event bubbles up to the parent, and the handles it.

Why is it useful?

Improves performance by using fewer event listeners. Simplifies and organizes code. Works with dynamically added elements. Makes easier and faster.

###5.What is the difference between preventDefault() and stopPropagation() methods?

-Use`preventDefault() `stop the browser’s default action.
–Use `preventDefault()` to block default behavior.

-Use`stopPropagation()` stops the event from bubbling up to parent elements.
–Use `stopPropagation()`  to block event flow.


