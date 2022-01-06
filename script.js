const gridEl = document.querySelector(".grid");
const newGridBtnEl = document.querySelector(".new-grid-btn");

function generateGrid(height = 16, width = 16) {
  if (height < 1 || width < 1) {
    return;
  }

  height = height > 100 ? 100 : height;
  width = width > 100 ? 100 : width;

  // make a row for each height
  for (let row = 0; row < height; row++) {
    const rowEl = document.createElement("div");
    rowEl.classList.add("row");
    // each individual row should have ${width} amount of square divs
    for (let square = 0; square < width; square++) {
      const squareEl = document.createElement("div");
      squareEl.dataset.darkness = 100;
      // squareEl.textContent = square + 1;
      squareEl.classList.add("square");

      // Add a hover event listener
      squareEl.addEventListener("mouseover", (e) => {
        // update darkness data attribute
        const darkness = Number.parseInt(e.target.dataset.darkness) - 20;
        e.target.dataset.darkness = darkness;
        const randomColor = generateRandomColor(darkness);
        console.log("Random color: ", randomColor);
        e.target.style.backgroundColor = randomColor;
        console.log("BG: ", e.target.style.backgroundColor);
      });
      // when a square is hovered, change the background to black

      rowEl.appendChild(squareEl);
    }
    //append the row to the grid container as a child
    gridEl.appendChild(rowEl);
  }
}

function generateRandomColor(darkness = Math.floor(Math.random() * 100 - 1)) {
  // return Math.floor(Math.random() * (max - min + 1)) + min;
  const hue = Math.floor(Math.random() * 360 + 1);
  const saturation = Math.floor(Math.random() * 100 + 1);

  return `hsl(${hue}, ${saturation}%, ${darkness}%)`;
}

newGridBtnEl.addEventListener("click", (e) => {
  const gridSize = Number.parseInt(prompt("Enter grid size number: "));

  gridEl.innerHTML = "";
  generateGrid(gridSize, gridSize);
});

generateGrid();
