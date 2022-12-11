"use strict";
//Allows the setup to run while the window is loading
window.onload=(event) =>{ 
    setup()
};
//This is to allow the courses to be added to the table when the user clicks on the image
var favoritecourses=[]
function setup() {
    var buttons = document.querySelectorAll("input")
    buttons.forEach(button =>{
     button.addEventListener("click", event =>{
            addClass(event);
        })
    })
}

//Function to add the courses into the table
function addClass(e) {
        if (!(favoritecourses.includes(e.target.id))){
            favoritecourses.push(e.target.id);
            document.getElementById("AnniesCoursesTable").innerHTML += document.getElementById("class" + e.target.id).outerHTML;
        }
    }

//Recommendation List, This is my extra feature that allows users to add any courses that they recommend me taking//

//This is another extra feature I added, allowing users to print their favorite courses

var printButton = document.getElementById("printable");
printButton.addEventListener("click", printView);
    
    var addButton = document.getElementById("addIt");
    addButton.addEventListener("click", addTheThing);
    
    
    var myList = [];
    var myListArea = document.getElementById("List");
    
    
//Allows a recommendation to be added to the list
    function addTheThing() {
    
        var theThing = document.getElementById("iWant");
    
        addToTheList(theThing);
        resetInput(theThing);
    
    }
    
    function addToTheList(thingToAdd) {
        myList.push(thingToAdd.value);
        var newListItem = document.createElement("li");
        newListItem.innerHTML = myList[myList.length - 1];
    
        myListArea.appendChild(newListItem);
    
    }
    
    function resetInput(inputToReset) {
        inputToReset.value = "";
    }
    //Allows the page to be prinited
    function printView() {
        var listPage = document.getElementById("listPage");
        var formArea = document.getElementById("formArea");
    
        formArea.style.display = "none";
        listPage.className = "print";
        myListArea.innerHTML = "";
        myList.sort();
    
        for (var i = 0; i < myList.length; i++) {
            List.innerHTML += "<li>" + myList[i] + "</li>";
        }
        //window.print();
    }