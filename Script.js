// Add a To Do item from the text field onto the To Do List
function AddToDo() {
    let li = document.createElement("li"); // Creates a list item element
    let NewToDo = document.getElementById("NewToDo"); // Gets the new ToDo item

    // The new list item will have a text value taken from the "NewToDo" text field
    li.appendChild(
        document.createTextNode(NewToDo.value + " (")
    );

    // Adds a remove button to take the ToDo item off the list
    let Remove = document.createElement("a");
    Remove.innerText = "remove";
    Remove.setAttribute("onclick", "RemoveItem(this.parentElement)"); // When "remove" is clicked it will run the "RemoveItem" function
    Remove.setAttribute("href", "javascript:void(0)"); // Functionally unnecessary, but gives "remove" the characteristics of a link (e.g. blue, changes the mouse pointer when it's hovering over it)
    li.appendChild(Remove);
    li.appendChild(
        document.createTextNode(")")
    );

    document.getElementById("ToDoList").appendChild(li); // Adds the list item to the "ToDoList"
    NewToDo.value = ""; // Clears the "NewToDo" text field
}

// Removes the ToDo list item "remove" is attached to
function RemoveItem(ListItem) {
    ListItem.parentElement.removeChild(ListItem);
}