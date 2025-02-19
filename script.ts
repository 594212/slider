const container = document.querySelector('.grid-container')!;
const children = container.children as HTMLCollectionOf<HTMLElement>;

type gridIndex = number & { __brand: "grid" };
type imgIndex = number & { __brand: "image" };

function getImgNode(i: imgIndex): DOMStringMap {
    return children[i].dataset;
}

function setImgGridIndex(gridIndex: gridIndex, imgIndex: imgIndex) {
    getImgNode(imgIndex).index = gridIndex.toString();
}

function getImgGridIndex(i: imgIndex): gridIndex {
    return Number(getImgNode(i).index!) as gridIndex
}


// [0, 1, 2, 3, 4, 5, 6]
// [1, 2, 3, 4, 5, 6, 0]
// [2, 3, 4, 5, 6, 0, 1]

let imgIndexOffset = 0;
function moveRight() {
    for (let i = 0; i < children.length; i++) {
        let gridIndex = (i - 1) % (children.length - 1);
        setImgGridIndex(gridIndex as gridIndex, imgIndexFromOffset(i as gridIndex));
    }
    imgIndexOffset++
}

function imgIndexFromOffset(gridIndex: gridIndex): imgIndex {
    return (gridIndex + imgIndexOffset) % children.length as imgIndex;
}