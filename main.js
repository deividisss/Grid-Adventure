console.log('Goodbye world');

const mouseChar = document.getElementById("mouse-char");
console.log(mouseChar);

// Info for live expressions
let x, y; 
onmousemove=(e)=>{x=e.pageX;y=e.pageY;}

// Gets center coordinates of the element
function getCenter(element) {
    const {left, top, width, height} = element.getBoundingClientRect();
    return {x: left + width / 2, y: top + height / 2}
}

// let rect = element.getBoundingClientRect();
const elementCenter = getCenter(mouseChar);

//Rotates mouseChar depending on mouse cursor position
addEventListener("mousemove", ({clientX, clientY}) => {
    const angle = Math.atan2(clientY - elementCenter.y, clientX - elementCenter.x);
    mouseChar.style.transform = `rotate(${angle}rad)`;
});

// Displays mouseChar origin point
let originPoint = document.getElementById('arrow');
originPoint.style.left = elementCenter.x + "px";
originPoint.style.top = elementCenter.y + "px";
