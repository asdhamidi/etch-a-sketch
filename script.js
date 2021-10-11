let squares = document.querySelectorAll(".square");
let slider = document.getElementById("size");
let size_display = document.getElementById("size-display");
let draw_box = document.querySelector(".draw-box");
let btn = document.getElementById("reset");
let slider_size = parseInt(slider.value);

draw_box.removeChild(draw_box.childNodes[0]);
draw_box.removeChild(draw_box.childNodes[256]);

// Change color on hover.
begin(squares);
function begin(sqrs) {
    sqrs.forEach(sqr => {
        sqr.addEventListener("mouseenter", function () {
            sqr.style.backgroundColor = "black";
        });
    });
}


// Reset Button 
btn.addEventListener("click", btn = () => clear());
function clear() {
    squares.forEach(sqr => {
        sqr.style.backgroundColor = "white";
    });
    begin(squares);
}

// Removing Squares when size is reduced.
function reduce(n) {
    for(let i = 0; i < n; i++) {
        draw_box.removeChild(draw_box.childNodes[0]);
    }
}

// Adding Squares when size is increased.
function increase(n) {
    for(let i = 0; i < n; i++) {
        let sqr = document.createElement("span");
        sqr.className = "square";
        draw_box.appendChild(sqr);
    } 
}

// Slider to increase or decrease square matrix.
slider.addEventListener("click", function() {
    let size = parseInt(slider.value);
    size_display.textContent = `${size} X ${size}`
    clear();

    if(slider_size > size){
        reduce((slider_size ** 2) - (size ** 2));
    }
    else {
        increase((size ** 2) - (slider_size ** 2));
    }

    squares = document.querySelectorAll(".square");
    squares.forEach(sqr => {
        sqr.style.height = `${500 / size}px`;
        sqr.style.width = `${500 / size}px`;
    });

    begin(squares);
    slider_size = size;
});