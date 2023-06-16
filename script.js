const sketchPad = document.querySelector("#sketch-container");

for (let i = 0; i < 16; i++) {
    const sketchRow = document.createElement("div");
    sketchRow.classList.add("row");
    sketchPad.appendChild(sketchRow);
    for (let i = 0; i < 16; i++) {
        const sketchPixel = document.createElement("div");
        sketchPixel.classList.add("pixel");
        sketchRow.appendChild(sketchPixel);
    }
}