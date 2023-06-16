const sketchPad = document.querySelector("#sketch-container");
createGrid(16);

function createGrid(size) {
    sketchPad.innerHTML = "";
    for (let i = 0; i < size; i++) {
        const sketchRow = createRow();
        sketchPad.appendChild(sketchRow);
        for (let j = 0; j < size; j++) {
            const sketchPixel = createPixel();
            sketchRow.appendChild(sketchPixel);
        }
    }
}

function createRow() {
    const sketchRow = document.createElement("div");
    sketchRow.classList.add("row");
    return sketchRow;
}

function createPixel() {
    const sketchPixel = document.createElement("div");
    sketchPixel.classList.add("pixel");
    sketchPixel.addEventListener("mouseover", function() {
        sketchPixel.style.backgroundColor = `rgb(${createRandomColor()}, ${createRandomColor()}, ${createRandomColor()})`
    });
    return sketchPixel;
}

function createRandomColor() {
    return Math.floor(Math.random() * 256);
}


const sizeInputButton = document.querySelector("#size-input-button");
sizeInputButton.addEventListener("click", function() {
    let size = prompt("Pick a size for the grid!");
    let isValid = false;
    
    while (!isValid) {
        if (size !== null && size >= 1 && size <= 100) {
        isValid = true;
        } else {
        size = prompt("Invalid input! Enter a value between 1 and 100");
        }
    }

    createGrid(size);
});