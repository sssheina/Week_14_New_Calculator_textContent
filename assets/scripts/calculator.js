function doAddition() {
    let elem = document.getElementById('first_arg');
    x = elem.value;
    elem = document.getElementById('second_arg'); 
    y = elem.value;
    z = (+x + +y);
    elem = document.getElementById('result');
    elem.textContent = z.toString();
    
}

// elem = document.getElementById('background'); 
// elem.style.borderColor = '#000';

function doSubtraction() {
    let elem = document.getElementById('first_arg');
    x = elem.value;
    elem = document.getElementById('second_arg'); 
    y = elem.value;
    z = (+x - +y);
    elem = document.getElementById('result');
    elem.textContent = z.toString();
}

function doMultiplication() {
    let elem = document.getElementById('first_arg');
    x = elem.value;
    elem = document.getElementById('second_arg'); 
    y = elem.value;
    z = (+x * +y);
    elem = document.getElementById('result');
    elem.textContent = z.toString();
}

function doDivision() {
    let elem = document.getElementById('first_arg');
    x = elem.value;
    elem = document.getElementById('second_arg'); 
    y = elem.value;
    z = (+x / +y);
    elem = document.getElementById('result');
    elem.textContent = z.toString();
}