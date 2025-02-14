function divGrid() {
  const grid = document.getElementById("grid");

  for (let i = 0; i < 16 * 16; i++) {
    let cell = document.createElement("div"); // crée div
    cell.classList.add("cell"); // class chaque div
    grid.appendChild(cell); // ajoute a la fin cell
  }
}

divGrid();
console.log(grid.innerHTML);
