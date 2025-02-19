// let width = children[0].getBoundingClientRect().width;

// window.addEventListener('resize', () => {
//     width = children[0].getBoundingClientRect().width;
// });

// window.addEventListener('load', () => {
//     container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
// });

// let offset = 0;
// let translateX = 0;
// let pressed = false;
// container.addEventListener("mousedown", (event) => {
//     offset = event.offsetX;
//     pressed = true;
//     console.log('mousedown');
// });

// container.addEventListener("mouseup", () => {
//     console.log('mouseup');
//     pressed = false;
// });
// container.addEventListener("mousemove", (event) => {
//     if (!pressed) return;
//     translateX += event.offsetX - offset;
//     container.style.transform = `translateX(${translateX}px)`;
//     let index = Math.floor(- translateX / width);
//     console.log(index);
//     if (index > 0) {
//         translateX = 0;
//         moveRight();
//         container.style.transform = `translateX(${translateX}px)`;
//     } else if (index < 0) {
//         translateX = 0;
//         window_left();
//         container.style.transform = `translateX(${translateX}px)`;
//     }


//     // console.log(index, translateX, width);

//     // children[index].dataset.index = 8 + index;
//     // children[index].style.gridColumn = 8 + index;


// });

let button = document.getElementById('right');

button.onclick = () => {
    moveRight();
};
