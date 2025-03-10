
window.addEventListener('load', () => {
    slider.scrollLeft = (slider.scrollWidth - slider.clientWidth) / 2;
});

let offset = 0;
let translateX = 0;
let pressed = false;
container.addEventListener("mousedown", (event) => {
    offset = event.offsetX;
    pressed = true;
    console.log('mousedown');
});

container.addEventListener("mouseup", () => {
    const width = children[0].getBoundingClientRect().width;
    console.log('mouseup');
    pressed = false;

    let index = Math.trunc(- translateX / width);
    if (translateX > 0) {
        return;
    }
    for (let i = 1; i <= index; i++) {
        moveRight();
        translateX += width;
        slider.style.transform = `translateX(${translateX}px)`;

    }
});

container.addEventListener("mousemove", (event) => {
    if (!pressed) return;
    translateX += event.offsetX - offset;
    innerSlider.style.left = `${x - startX}px`;
    slider.style.transform = `translateX(${translateX}px)`;


});

let button = document.getElementById('right');

button.onclick = () => {
    moveRight();
    log()
};
