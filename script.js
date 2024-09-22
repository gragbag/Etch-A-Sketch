const container = document.querySelector("#container");
const start = document.querySelector("#start");
let gridLength;



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

	getGridSize();
	setGrid(gridLength);
	const grids = document.querySelectorAll(".grid");
	grids.forEach((grid) => {
		grid.addEventListener("mouseover", (e) => {setRandomColor(e.target)});
		grid.addEventListener("mouseleave", (e) => {e.target.style.backgroundColor = ""});
	});
}

const getGridSize = () => {
	do {
		gridLength = prompt("Enter the length for the grid (Must Be Under 100):", "16");
	} while (isNaN(gridLength) || gridLength > 100 || gridLength <= 0)

	gridLength = Math.floor(gridLength);

	
}

const setRandomColor = (grid) => {
	const randomColor = Math.floor(Math.random()*16777215).toString(16);
	grid.style.backgroundColor = "#" + randomColor;
}

start.addEventListener("click", resetGrid);