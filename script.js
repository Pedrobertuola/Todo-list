var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
  
//var li = document.querySelector("li")
var i=3,UL=document.querySelector('#listUl');

function inputLength() {
    return input.value.length;
}

ul.addEventListener("click", handleUlClick)


function handleUlClick (element) {
	doneTask(element);
	deleteListElement(element);
}

function deleteListElement(ev) {
    //   ev.target                       - this element was clicked on
    if (ev.target.classList.contains('remove'))
      // ev.target.parentNode            - this must be the <li> element
      // ev.target.parentNode.parentNode - and this is the <ul> element 
      ev.target.parentNode.parentNode.removeChild(ev.target.parentNode);
}

function doneTask(task) {
	if (task.target.tagName === "LI"){
		task.target.classList.toggle("done");
	}
}


function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    const btn = document.createElement("span");
    btn.innerHTML = " (X)";
    btn.classList.add("remove");
    li.appendChild(btn);  
    
    ul.appendChild(li)
    input.value = "";
}
function addListAfterClick(){
    if (inputLength() > 0) {
        createListElement();
    } 
}




function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode ===13) {
        createListElement();
    }
}








button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);
