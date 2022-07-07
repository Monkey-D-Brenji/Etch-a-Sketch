const container = document.getElementById("container");
const rows = document.getElementsByClassName("gridrow");
const btn = document.querySelector("button");

// Create a default grid sized 16x16

// Functions to make Grid
// Row Function
function gridRow(num) {
  for (i = 0; i < num; i++) {
    const row = document.createElement("div");
    row.classList.add("gridrow");
    container.appendChild(row);
  }
}

// Column Function
function gridColumn(num) {
  for (i = 0; i < num; i++) {
    for (j = 0; j < rows.length; j++) {
      const column = document.createElement("div");
      column.classList.add("cell");
      rows[j].appendChild(column);
    }
  }
}

function clearGrid() {
  const gridRows = document.querySelectorAll(".gridrow");
  gridRows.forEach((element) => {
    element.remove();
  });
}

function makeGrid(row, cell) {
  clearGrid();
  gridRow(row);
  gridColumn(cell);
}

btn.addEventListener("click", () => {
  let gridNum = prompt("Enter a Number");
  gridNum = parseInt(gridNum);
  if (gridNum > 100 || gridNum === NaN) {
    while (gridNum > 100 || gridNum === NaN) {
      gridNum = prompt("Enter a Number less than 100");
    }
  }
  makeGrid(gridNum, gridNum);
  const cells = document.querySelectorAll(".cell");

  cells.forEach(function (element) {
    element.addEventListener("mouseover", () => {
      element.classList.add("hover");
    });
  });
});
