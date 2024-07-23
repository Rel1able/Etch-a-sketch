
let container = document.querySelector(".container");
let isMouseDown = false;

function createGrid(size) {
    container.innerHTML = "";
    let gap = 1;
    let containerSize = 512;
    let squareSize = (containerSize - (size - 1) * gap) / size;
    for (let j = 0; j < size; j++) {
        for (let i = 0; i < size; i++) {
            let elementT = document.createElement("div");
            elementT.classList.add("elem");
            elementT.style.width = `${squareSize}px`;
            elementT.style.height = `${squareSize}px`;
            container.appendChild(elementT);

        }
    }
    let elements = document.querySelectorAll(".elem");
    elements.forEach((changer) => {
        changer.addEventListener("mouseover", () => {
            if (isMouseDown) {
                changer.style.backgroundColor = "black"
            };
        });
    });
}

createGrid(16);

document.body.addEventListener("mousedown", () => {
    isMouseDown = true;
})

document.body.addEventListener("mouseup", () => {
    isMouseDown = false;
})


let cleaner = document.querySelector(".clear");

cleaner.addEventListener("click", () => {
    let elements = document.querySelectorAll(".elem");
    elements.forEach((changer) => {
        changer.style.backgroundColor = "white";
    });
});





let reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    let question = prompt("Enter a number of squares (max 100): ");
    if (question > 0 && question <= 100) {
        createGrid(question);
    } else {
        alert("Please enter a number between 1 and 100");
    }
});






