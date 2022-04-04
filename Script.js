// Add a To Do item from the text field onto the To Do List
function AddToDo() {
    let li = document.createElement("li"); // Creates list item element
    let NewToDo = document.getElementById("NewToDo"); // Gets the new ToDo item

    // The new list item will have a text value taken from the "NewToDo" text field
    li.appendChild(
        document.createTextNode(NewToDo.value)
    );

    document.getElementById("ToDoList").appendChild(li); // Adds the list item to the "ToDoList"
    NewToDo.value = ""; // Clears the "NewToDo" text field
}