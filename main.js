//capture user input
var treeHeight = document.getElementById("height").value;
var treeChar = document.getElementById("character").value;

//define button
var button = document.getElementById("grow");

//assign function to button
button.addEventListener("click", buildTree);

function buildTree(){
	//do math on user input
var treeArray = [];
	for (var i = 0; i < treeArray.length; i++) {
		var treeHeightElement = treeHeight - (i +1);
	}
	//build array from math
	treeArray.push(treeHeightElement);
}
console.log(treeArray(i));
// var treeCharElement = treeChar (2*i) + 1;