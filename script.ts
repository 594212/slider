const container = document.querySelector('.grid-container')!;
const children = container.children as HTMLCollectionOf<HTMLElement>;

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
