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

class GridScheme {
    private gridScheme: imgIndex[];
    tail: imgIndex;

    constructor(size: number) {
        this.gridScheme = new Array<imgIndex>(size);
        for (let imgIndex = 0 as imgIndex; imgIndex < size; imgIndex++) {
            this.set(getImgGridIndex(imgIndex), imgIndex);
        }
        this.tail = this.get(0 as gridIndex);
    }

    get(i: gridIndex): imgIndex {
        return this.gridScheme[i];
    }

    public set(gridIndex: gridIndex, imgIndex: imgIndex) {
        setImgGridIndex(gridIndex, imgIndex);
        this.gridScheme[gridIndex] = imgIndex;
    }
}


// [0, 1, 2, 3, 4, 5, 6]
// [1, 2, 3, 4, 5, 6, 0]
// [2, 3, 4, 5, 6, 0, 1]

function moveRight() {
    let size = children.length;
    let gridScheme: GridScheme = new GridScheme(size);

    for (let i = 0 as gridIndex; i < size - 1; i++) {
        gridScheme.set(i, gridScheme.get(i + 1 as gridIndex));
    }
    console.log(size - 1, gridScheme.tail);
    gridScheme.set(size - 1 as gridIndex, gridScheme.tail);

}