// var ol = document.createElement("ol");

// function addItem() {
//   var text = document.getElementById("task").value;
//   var li = document.createElement("li");
//   var liText = document.createTextNode(text);
//   var mainDiv = document.getElementById("list");
//   li.appendChild(liText);
//   ol.appendChild(li);
//   mainDiv.appendChild(ol);

//   document.getElementById("task").value = "";
// }

// Introduction

var container = document.getElementById("container");
var projectTitle = document.createElement("h1");
projectTitle.setAttribute("id", "title");
var titleText = document.createTextNode("Todo App");

projectTitle.appendChild(titleText);
container.appendChild(projectTitle);

// Input

var addContainer = document.getElementById("addContainer");

var input = document.createElement("input");
input.setAttribute("placeholder", "Add Task");
input.setAttribute("type", "text");
input.setAttribute("id", "inpu_id");
addContainer.appendChild(input);

// Button
var button = document.createElement("button");
var buttonText = document.createTextNode("Add");
button.setAttribute("class", "btn btn-info");
button.setAttribute("id", "btn");
button.setAttribute("onClick", "AddText()");

button.appendChild(buttonText);
addContainer.appendChild(button);

var b = document.createElement("b");
b.setAttribute("id", "beforeError");
var bText = document.createTextNode("Please Add Some Item");
function AddText() {
  b.style.display = "block";
  var text = input.value;
  if (!text) {
    var errorContainer = document.getElementById("errorContainer");
    b.appendChild(bText);
    errorContainer.appendChild(b);
    setTimeout(() => {
      b.style.display = "none";
    }, 3000);
  } else {
    var dataBox = document.createElement("div");
    dataBox.setAttribute("id", "dataBox");
    var ul = document.createElement("ul");
    ul.setAttribute("class", "list-group");
    var li = document.createElement("li");
    li.setAttribute("id", text);
    li.setAttribute("class", "list-group-item list-group-item-secondary");
    var item = document.createTextNode(text);
    li.appendChild(item);
    ul.appendChild(li);
    dataBox.appendChild(ul);
    addContainer.appendChild(dataBox);

    // updateButton
    var updateBtn = document.createElement("button");
    var updateBtnText = document.createTextNode("Edit");
    updateBtn.setAttribute("class", "btn btn-success");
    updateBtn.setAttribute("id", "btn_create");
    updateBtn.appendChild(updateBtnText);
    li.appendChild(updateBtn);

    updateBtn.addEventListener("click", function () {
      var edit = prompt("enter value", li.id);
      if (edit) {
        li.innerHTML = edit;
        li.appendChild(updateBtn);
        li.appendChild(btn2);
      }
    });

    // delete
    //  btn for delete
    var btn2 = document.createElement("button");
    var btn2_text = document.createTextNode("Delete");
    btn2.setAttribute("class", "btn btn-danger");
    btn2.setAttribute("id", "btn3");
    btn2.appendChild(btn2_text);
    li.appendChild(btn2);
    btn2.addEventListener("click", function () {
      btn2.parentNode.remove();
    });

    document.getElementById("inpu_id").value = "";
  }
}
