interface EventOnMouseDown extends React.MouseEvent<HTMLDivElement> {
    currentTarget: HTMLDivElement;
}

interface Positions {
    pos1: number;
    pos2: number;
    pos3: number;
    pos4: number;
}

export function grabMap(e: EventOnMouseDown) {
    const map = e.currentTarget;
    const positions: Positions = {
        pos1: 0,
        pos2: 0,
        pos3: 0,
        pos4: 0,
    };

    if (map) map.style.cursor = "grabbing";

    e = e || window.event;
    e.preventDefault();

    positions.pos3 = e.clientX;
    positions.pos4 = e.clientY;

    //document.addEventListener('mouseup', stopDraggingMap(map));
    //document.addEventListener('mousemove', dragMap(e, positions, map)); // TODO addeventlistener
    document.onmouseup = () => stopDraggingMap(map);
    document.onmousemove = (e: MouseEvent) => dragMap(e, positions, map);
}

function dragMap(e: MouseEvent, positions: Positions, map: HTMLDivElement) {
    e = e || window.event;
    e.preventDefault();

    positions.pos1 = positions.pos3 - e.clientX;
    positions.pos2 = positions.pos4 - e.clientY;
    positions.pos3 = e.clientX;
    positions.pos4 = e.clientY;

    if (map) {
        if (map.offsetTop - positions.pos2 > -500 && map.offsetTop - positions.pos2 < 500) {
            map.style.top = map.offsetTop - positions.pos2 + "px";
        }
        if (map.offsetLeft - positions.pos1 > -500 && map.offsetLeft - positions.pos1 < 500) {
            map.style.left = map.offsetLeft - positions.pos1 + "px";
        }
    }
}

function stopDraggingMap(map: HTMLDivElement) {
    if (map) map.style.cursor = "grab";

    document.onmouseup = null;
    document.onmousemove = null;
}
