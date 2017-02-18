//capture user input
var treeChar = document.getElementById("character");
var treeHeight = document.getElementById("height");


//get a reference to the button element in the DOM
var button = document.getElementById("grow");

//capture keypress 
window.addEventListener("keydown", checkKeyPressed);
	
function checkKeyPressed(e){
	if (e.keyCode === 13) {
		verifyInput();
	}
}

//call verify fuction when button clicked
button.addEventListener("click", verifyInput);



function verifyInput() {
  var treeArray = {
    height: treeHeight.value,
    character: treeChar.value
  };

  if (treeArray.height === "" || treeArray.character === "") {
    alert("Please enter requested information.");
  } 
  else {
    buildTree(treeArray);
  }
}



function buildTree(treeArray) {
	treeArray.character = document.getElementById("character").value;
	treeArray.height = document.getElementById("height").value;
  
  var treeString = "";
  
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