interface Positions {
    pos1: number;
    pos2: number;
    pos3: number;
    pos4: number;
}

let map: HTMLDivElement;
const positions: Positions = {
    pos1: 0,
    pos2: 0,
    pos3: 0,
    pos4: 0,
};

export function grabMap(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    map = e.currentTarget;

    map.style.cursor = "grabbing";
    positions.pos3 = e.clientX;
    positions.pos4 = e.clientY;

    document.addEventListener("mouseup", stopDraggingMap);
    document.addEventListener("mousemove", dragMap);
}

function dragMap(e: MouseEvent) {
    e.preventDefault();

    positions.pos1 = positions.pos3 - e.clientX;
    positions.pos2 = positions.pos4 - e.clientY;
    positions.pos3 = e.clientX;
    positions.pos4 = e.clientY;

    if (map.offsetTop - positions.pos2 > -500 && map.offsetTop - positions.pos2 < 500) {
        map.style.top = map.offsetTop - positions.pos2 + "px";
    }
    if (map.offsetLeft - positions.pos1 > -500 && map.offsetLeft - positions.pos1 < 500) {
        map.style.left = map.offsetLeft - positions.pos1 + "px";
    }
}

function stopDraggingMap() {
    map.style.cursor = "grab";

    document.removeEventListener("mouseup", stopDraggingMap);
    document.removeEventListener("mousemove", dragMap);
}
