//Stores the name in a variable so it can be use later
let person = prompt("Please enter your name, friend", "e.g: John Doe");

//Makes it so that a different message is displayed when the user doesn't enter anything
if (person == null || person == "") {
    window.alert("Please enter your name next time, pal.");
}
else {
    window.alert("How is it hanging, " + person + "?");
}