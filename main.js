//capture user input
var treeChar = document.getElementById("character").value;
var treeHeight = document.getElementById("height").value;


//get a reference to the button element in the DOM
var button = document.getElementById("grow");

//capture keypress 
window.addEventListener("keydown", checkKeyPressed);
	
function checkKeyPressed(e){
	if (e.keyCode === 13) {
		verifyInput();
	}
}

//call build fuction when button clicked
button.addEventListener("click", verifyInput);


var treeArray = {
  height: treeHeight.value,
  character: treeChar.value
};

function verifyInput() {
  if (treeArray.height === "") {
    alert("Please enter height");
  		} else if (treeArray.character === "") {
    alert("Please enter character");
  	} 
  buildTree(treeArray);
}



function buildTree(treeArray) {
	treeArray.character = document.getElementById("character").value;
	treeArray.height = document.getElementById("height").value;
  var tree = "";
  var treeString = "";
  console.log(treeArray);
  console.log(treeArray.height);
  //do math on user input
  for (var i = 0; i < treeArray.height; i++) {
    var char = 2 * i + 1;
    var space = treeArray.height - (i + 1);
  	//add spaces to space variable
  	for (var j = 0; j < space; j++) {
  		treeString += " ";
  	}
  	  	for (var k = 0; k < char; k++) {
  			treeString += treeArray.character;
  		}
  console.log(treeString);
  //clear treeString after each loop
  treeString = "";
  }
}