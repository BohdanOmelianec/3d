const body = document.querySelector("body");
const div = document.querySelector(".div1");
const cube = document.querySelector(".cube");

const xStart = -20;
const yStart = 25;
// cube.style.transform = `rotateX(${xStart}deg) rotateY(${yStart}deg)`;

let x0 = null;
let y0 = null;
let xShiftLastPosition = null;
let yShiftLastPosition = null;
let xShift = null;
let yShift = null;

const bodyEvent = (e) => {
    xShift = xShiftLastPosition + e.clientX - x0;
    yShift = yShiftLastPosition + e.clientY - y0;

    cube.style.transform = `rotateX(${xStart + -yShift}deg) rotateY(${yStart + xShift}deg)`;
};

body.addEventListener("mousedown", (e) => {
    x0 = e.clientX;
    y0 = e.clientY;

    body.addEventListener("mousemove", bodyEvent)
    
});

body.addEventListener("mouseup", () => {
    console.log("here");
    xShiftLastPosition = xShift;
    yShiftLastPosition = yShift;
    body.removeEventListener("mousemove", bodyEvent);
    x0 = y0 = null;
});

let perspective = 700;

window.addEventListener("wheel", (e) => {
    if(e.deltaY < 0 && perspective > 50) {
        perspective -= 50;
        body.style.perspective = `${perspective}px`;
    } else if(e.deltaY > 0 && perspective < 700) {
        perspective += 50;
        body.style.perspective = `${perspective}px`
    } else return;
})