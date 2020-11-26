// disable submit default action after click , after that clear Pixcel Canvas +  start getData Function() 
const submit = document.getElementsByTagName("INPUT")[2];
const check = submit.addEventListener("click", function (event) {
	event.preventDefault();
	document.querySelector("#pixelCanvas").innerHTML = "";
	getData();
});

// Get the value of Height, Width 
function getData() {
	const input_height = document.querySelector("#inputHeight").value;
	const input_width = document.querySelector("#inputWidth").value;
	let pixcel_table = document.querySelector("#pixelCanvas");

	// Send All Data To makeGrid function
	makeGrid(input_height, input_width, pixcel_table);
}

// makeGrid function ();
function makeGrid(height, width, table) {
	// using for loop to create td -tr based on user inputs
	for (let r = 0; r < height; r++) {
		let tr = document.createElement("tr");
		for (let c = 0; c < width; c++) {
			let td = document.createElement("td");
			tr.appendChild(td);
			table.appendChild(tr);
		}
	}
	// listener to all cells for any clicks and send them to colorAdd function to be filled with background
	var cells = document.querySelectorAll('td');
	for (let t = 0; t < cells.length; t++) {
		cells[t].addEventListener('click', colorAdd, false);
	}
}
// starting to fill cells with selected background color
function colorAdd(input) {
	let color_pick = document.querySelector("#colorPicker").value;
	input.target.style.backgroundColor = color_pick;

}