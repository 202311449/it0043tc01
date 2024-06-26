function resetFlexbox() {
    const container = document.getElementById('flexbox-container');
    container.style.flexDirection = 'row';
    container.style.justifyContent = 'flex-start';
    container.style.alignItems = 'stretch';
    container.style.gap = '0px';
    resetFlexGrow();
}

function setGap(value) {
    const container = document.getElementById('flexbox-container');
    container.style.gap = `${value}px`;
}

function setFlexDirection(direction) {
    const container = document.getElementById('flexbox-container');
    container.style.flexDirection = direction;
}

function setJustifyContent(justify) {
    const container = document.getElementById('flexbox-container');
    container.style.justifyContent = justify;
}

function setAlignItems(align) {
    const container = document.getElementById('flexbox-container');
    container.style.alignItems = align;
}

function resetFlexGrow() {
    document.querySelectorAll('.box').forEach(box => box.style.flexGrow = '0');
    document.getElementById('grow1').value = '0';
    document.getElementById('grow2').value = '0';
    document.getElementById('grow3').value = '0';
}

function growAll() {
    document.querySelectorAll('.box').forEach(box => box.style.flexGrow = '1');
}

function setFlexGrow(boxNumber, value) {
    const box = document.querySelector(`.box${boxNumber}`);
    box.style.flexGrow = value;
}

function grow(boxNumber) {
    const input = document.getElementById(`grow${boxNumber}`);
    setFlexGrow(boxNumber, input.value);
}
