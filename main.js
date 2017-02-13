// //capture user input
// var treeHeight = document.getElementById("height").value;
// var treeChar = document.getElementById("character").value;

// //define button
// var button = document.getElementById("grow");

// //assign function to button
// button.addEventListener("click", buildTree);

// function buildTree(){
// 	//do math on user input
// var treeArray = [];
// 	for (var i = 0; i < treeArray.length; i++) {
// 		var treeHeightElement = treeHeight - (i +1);
// 	}
// 	//build array from math
// 	treeArray.push(treeHeightElement);
// }
// console.log(treeArray(i));
// // var treeCharElement = treeChar (2*i) + 1;

	//capture user input
	var treeChar = document.getElementById("character").value;
	var treeHeight = document.getElementById("height").value;


//define button
var button = document.getElementById("grow");

//call build fuction when button clicked
button.addEventListener("click", verifyInput);

//capture keypress 
function clickEvent(keypress){
	if (keypress.keyCode === 13) {
		buildTree();
	}
}

var treeArray = {
  height: treeHeight.value,
  character: treeChar.value
};

function verifyInput() {
	alert("We made it here");
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
  console.log(treeArray);
  console.log(treeArray.height);
  //do math on user input
  for (var i = 0; i < treeArray.height; i++) {
    var char = 2 * i + 1;
    var space = treeArray.height - (i + 1);
    console.log(''.repeat(space) + treeArray.character.repeat(tree));
  }
}