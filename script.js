var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

var fixPreviousEnteries= () => {
	/*
	In the assignment, the previous list enteries didn't have delete buttons and line-through won't be applied
	when clicked so rather than modifing the HTML, each item is given a delete button and added the done class
	*/
	var items = () =>
	{
		document.querySelectorAll("li").forEach(item => item.classList.add("done"));
		document.querySelectorAll("li").forEach(item => item.classList.toggle("done"));
		document.querySelectorAll("li").forEach(function callback(c,d){c.addEventListener("click", d => {c.classList.toggle("done")})});
		document.querySelectorAll("li").forEach(function callback(c,d)
		{
		const newBtn = document.createElement("button");
		const txtBtn = document.createTextNode("X");
		newBtn.appendChild(txtBtn);
		newBtn.setAttribute("class","delete");
		c.insertAdjacentElement("beforeend",newBtn);
		newBtn.addEventListener("click", d => {
				c.outerHTML = "";
				newBtn.outerHTML ="";
			});
		});
	}; items();
};
fixPreviousEnteries();




/*function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}*/
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	//Adding the delete button at the same time of the creation of the list time
	const newBtn = document.createElement("button");
	const txtBtn = document.createTextNode("X");
	newBtn.appendChild(txtBtn);
	newBtn.setAttribute("class","delete");
	newBtn.addEventListener("click",deleteListItem => {
		li.outerHTML = "";
		newBtn.outerHTML ="";
	});
	// Adding the "done" class to the item at the same time of the creation of the list time
	var toggleDone = () => {li.classList.add("done");
	li.classList.toggle("done");}
	toggleDone();
	//Making sure that clicking the item apply the line-through affect
	li.addEventListener("click", toggleDone => {
		li.classList.toggle("done");
	});
	ul.appendChild(li);
	// Adding the delete button right after the list
	li.insertAdjacentElement("beforeend",newBtn);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);