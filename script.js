const container = document.querySelector("#container");
const start = document.querySelector("#start");
let gridLength;
let opacity = 0;



const setGrid = (length) => {
	for (let r = 0; r < length; r++) {
		const row = document.createElement("div")
		row.classList.add("row");
		for (let c = 0; c < length; c++) {
			const grid = document.createElement("div")
			grid.classList.add("grid");
			row.appendChild(grid);
		}
		container.appendChild(row);
	}
}

const resetGrid = () => {
	while (container.firstChild) {
		container.removeChild(container.lastChild);
	}
	opacity = 0;

	getGridSize();
	setGrid(gridLength);
	const grids = document.querySelectorAll(".grid");
	grids.forEach((grid) => {
		grid.addEventListener("mouseover", (e) => {setRandomColorAndOpacity(e.target)});
	});
}

const getGridSize = () => {
	do {
		gridLength = prompt("Enter the length for the grid (Must Be Under 100):", "16");
	} while (isNaN(gridLength) || gridLength > 100 || gridLength <= 0)

	gridLength = Math.floor(gridLength);

}

const setRandomColorAndOpacity = (grid) => {
	const randomColor = Math.floor(Math.random()*16777215).toString(16);
	grid.style.backgroundColor = "#" + randomColor;
	grid.style.opacity = opacity / 100;

	if (opacity < 100) {
		opacity += 10;
	}
}

start.addEventListener("click", resetGrid);