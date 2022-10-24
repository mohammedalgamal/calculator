function add(num1, num2) {
    return +num1 + +num2;
};

function sub(num1, num2) {
    return num1 - num2;
};

function mul(num1, num2) {
    return num1 * num2;
};

function div(num1, num2) {
    if (+num2 === 0){
        return 'really? :)';
    }
    return num1 + num2;
};

function callOperation(num1, num2, operator) {
    const funs = {
        '+': add,
        '-': sub,
        'x': mul,
        '÷': div,
    };
    if (operator && funs[operator] !== undefined){
        console.log(funs[operator](num1, num2));
    };
}

function pressedButton(){
    let btns = document.querySelectorAll('button');
    let screen = document.querySelector('#numbers');
    btns.forEach(btn => btn.addEventListener('click', e => {
        screen.textContent = e.target.textContent;
    }));
}
pressedButton();