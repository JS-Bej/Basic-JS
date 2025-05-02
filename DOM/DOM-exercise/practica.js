// 1. Log the element associated with the id "description" to the console. Use the getElementById() method.
var description = document.getElementById("description");
console.log(description);

// 2. Log the element associated with the id "description" to the console. Use the querySelector() method.
var descriptionQuery = document.querySelector("#description");
console.log(descriptionQuery);

// 3. Log all "li" elements as a list to the console. Use the querySelectorAll() method.
var liElements = document.querySelectorAll("li");
console.log(liElements);

// 4. Log the number of "li" elements with the following message.
console.log(`There are ${liElements.length} items in the list.`);

// 5. Generate a list of all "li" elements and iterate through the list using a loop.
liElements.forEach((li, index) => {
    console.log(`Item ${index + 1}: ${li.textContent}`);
});

// Create a new paragraph element
var newParagraph = document.createElement("p");

// Add text to the paragraph
newParagraph.textContent = "In 2008, the competition was held in the United Kingdom at the University of Reading, where 13 candidates participated, and 6 finalist programs were selected: Alice, Brother Jerome, Elbot, Eugene Goostman, Jabberwacky, and Ultra Hal. The six programs had to interact with 12 judges, maintaining a conversation via a computer for five minutes, during which a series of questions were asked to determine whether the participant was a computer or a human. In the 2008 edition, none managed to pass the Turing Test, although the bronze medal winner was the Elbot program, which came very close to passing the test as it convinced 3 out of the 12 judges, meaning 25% of the judges thought they were conversing with a human.";

// Add the new paragraph to the end of the document body
document.body.appendChild(newParagraph);

// Create a new link element
var newLink = document.createElement("a");
newLink.href = "#";
newLink.innerHTML = "Main Link";

// Add the new link to the end of the document body
document.body.appendChild(newLink);

// Create a new title element
var title = document.createElement("h2");
title.innerHTML = "Months of the Year";

// Add the title to the end of the document body
document.body.appendChild(title);

// Create a new unordered list element
var list = document.createElement("ul");

// Create an array with the months of the year
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Iterate through the array and add each month to the list
months.forEach(function (month) {
    var li = document.createElement("li");
    li.innerHTML = month;
    list.appendChild(li);
});

// Add the list to the end of the document body
document.body.appendChild(list);