# js-assignment-shopping-list

This is an assignment in a Javascript course (Web Developer in 2023 with HTML, CSS, Javascript, React, Node.js, Machine Learning & more!). The point of this assignment is to use events to modify the DOM (HTML and CSS). We are asked to 'fix' previous and new entries to have a delete button beside each entry as well as for each entry have the line-through effect on the text when clicked.

The most important part of this assignment is the Javascript code so when doing the assignment I tried to focus on not modifiying the DOM directly and instead using the Javascript to modify the HTML code. I did add a CSS styling but only after adding the class to the delete buttons using Javascript.

### Task one: "If you click on the list item, it toggles the .done  class on and off."

We already have a function that creates the list item, so I modified the function "createListElement". Using classList.add to add the '.done' class and toggle in the same function to ensure both affects are applied at the same time, and then right after that the addEventListner is added to the item to ensure it toggles off and waits for the user to click in order to apply the line-through effect.

### Task two: "Add buttons next to each list item to delete the item when clicked on its corresponding delete button."
At the same time of the creation item the button is being created with the 'delete' class as well as an event listner to delete the item as well as the button when it's clicked.

### Task Three: BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)
This was achieved in Task two!

### Task Four: All previous entries in the HTML didn't have the .done class nor a delete button for each item. The challenge here was to make sure that each item had an event that's listening for when the user clicks on it to have the line-through affect but when using the forEach loop the event was the same for all items so clicking on one item will cross all items, and that's when I learned about forEach callback and was able to create a unique event name for each item. Additionally, insertAdjacentElement made it very easy to add the delete buttons before the end of an item.

### Task five: added some CSS code to the delete button to make it look nicer.

### Task six: added the repo to Github and opened a page for preview.

