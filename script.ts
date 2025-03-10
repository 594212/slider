const container = <HTMLElement>document.querySelector('.grid-container');
const slider = <HTMLElement>document.querySelector('.grid-slider')!;
const children = slider.children as HTMLCollectionOf<HTMLElement>;

type gridIndex = number & { __brand: "grid" };
type imgIndex = number & { __brand: "image" };


function setImgGridIndex(gridIndex: gridIndex, imgIndex: imgIndex) {
    children[imgIndex].dataset.index = gridIndex.toString();
}

let imgIndexOffset = 0;
function moveRight() {
    for (let i = 0; i < children.length; i++) {
        let gridIndex = (i - 1) % (children.length - 1);
        let imgIndex = (i + imgIndexOffset) % children.length;

        setImgGridIndex(gridIndex as gridIndex, imgIndex as imgIndex);
    }
    imgIndexOffset++
}

container.addEventListener("touchstart", (event: TouchEvent) => {
    const touch = event.touches[0];
    offset = touch.clientX * 0.3;
    pressed = true;
});

container.addEventListener("touchend", (event: TouchEvent) => {
    logEvent("Touch End", event);
    const width = children[0].getBoundingClientRect().width;
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

let lastTouchMove = 0;
container.addEventListener("touchmove", (event: TouchEvent) => {
    const now = Date.now();
    if (now - lastTouchMove < 20 || !pressed) return;
    lastTouchMove = now;

    const touch = event.touches[0];
    translateX += touch.clientX * 0.3 - offset;
    logEvent("Touch Move", event, `${translateX} ${event}, ${offset} `);
    slider.style.transform = `translateX(${translateX}px)`;
});


function logEvent(type: string, event: TouchEvent, mes = "") {
    const container = document.getElementById("log");
    if (container) {
        const touch = event.touches[0] || event.changedTouches[0]; // Handle different touch phases
        const message = `${mes} --- ${type} at (${touch?.clientX || 0}, ${touch?.clientY || 0})`;
        console.log(message);
        container.textContent = `${message}\n${container.textContent}`;
    }
}