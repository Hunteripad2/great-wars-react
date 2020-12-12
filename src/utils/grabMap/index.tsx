"use strict";

interface EventOnMouseDown extends React.MouseEvent<HTMLDivElement> {
	currentTarget: HTMLDivElement;
}

function grabMap(e : EventOnMouseDown) {
	const map = e.currentTarget;
	let pos1 : number = 0,
		pos2 : number = 0,
		pos3 : number = 0,
		pos4 : number = 0;

	if (map) map.style.cursor = "grabbing";

	e = e || window.event;
	e.preventDefault();

	pos3 = e.clientX;
	pos4 = e.clientY;

	document.onmouseup = stopDraggingMap;
	document.onmousemove = dragMap;

	function dragMap(e : MouseEvent) {
		e = e || window.event;
		e.preventDefault();

		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		if (map) {
			if (map.offsetTop - pos2 > -500 && map.offsetTop - pos2 < 500) {
				map.style.top = (map.offsetTop - pos2) + "px";
			}
			if (map.offsetLeft - pos1 > -500 && map.offsetLeft - pos1 < 500) {
				map.style.left = (map.offsetLeft - pos1) + "px";
			}
		}
	}

	function stopDraggingMap() {
		if (map) map.style.cursor = "grab";

		document.onmouseup = null;
		document.onmousemove = null;
	}
}

export default grabMap;