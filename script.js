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
    return num1 / num2;
};

function callOperation(num1, num2, operator) {
    const funs = {
        '+': add,
        '-': sub,
        'x': mul,
        '÷': div,
    };
    if (operator && funs[operator] !== undefined){
        result = (funs[operator](num1, num2));
    };
    return result;
};

function display(content, screen) {
    const para = document.querySelector(`#${screen}`);
    para.textContent = content;
};

function removeLetter(str) {
    if (typeof(str) === "number"){
        str = str.toString();
    };

    if (str === '') {
        return '';
    };
    return str.slice(0, -1);
};

function pressedButton(){
    let numbers = document.querySelectorAll('.inner');
    let operators = document.querySelectorAll('.operator');
    let ac = document.querySelector('#ac');
    let del = document.querySelector('#del');

    let num1 = '';
    let num2 = '';
    let operator = '';
    let result = 0;
    let isOperator = false;
    let isEqualSign = false;
    let acceptedOperators = '+-*/=';

    ac.addEventListener('click', () =>{
        num1 = '';
        num2 = '';
        operator = '';
        result = 0;
        isOperator = false;
        display('', 'numbers');
        display('', 'operation');
    });

    del.addEventListener('click', () => {
        if (!isOperator || num2 === '') {
            num1 = removeLetter(num1);
            operator = '';
            display(num1, 'numbers');
            display('', 'operation');
            isOperator = false;
        }
        else {
            num2 = removeLetter(num2);
            display(num2, 'numbers');
        };
    });

    operators.forEach(op => op.addEventListener('click', e => {
        if (num1 === '') {
            return;
        };

        if (num1 !== '' && num2 !== '') {
            result = callOperation(num1, num2, operator);
            display(result, 'numbers')
            num1 = result.toString();
            num2 = '';
            isOperator = false;
        };

        if (e.target.textContent === '='){
            isEqualSign = true;
        }
        else {
            isEqualSign = false;
        };

        isOperator = true
        operator = e.target.textContent;
        display(operator, 'operation');
    }));

    numbers.forEach(number => number.addEventListener('click', e => {
        if (!isOperator || isEqualSign) {
            if (!(num1.split(".").length - 1 > 0 && e.target.textContent === '.')) {
                num1 += e.target.textContent;
                display(num1, 'numbers');
            };
        }
        else {
            if (!(num2.split(".").length - 1 > 0 && e.target.textContent === '.')) {
                num2 += e.target.textContent;
                display(num2, 'numbers');
            };
        };
    }));

    document.addEventListener('keypress', e => {
        if (!isNaN(Number(e.key)) || e.key === '.'){
            if (!isOperator || isEqualSign) {
                if (!(num1.split(".").length - 1 > 0 && e.target.textContent === '.')) {
                    num1 += e.key;
                    display(num1, 'numbers');
                };
            }
            else {
                if (!(num2.split(".").length - 1 > 0 && e.target.textContent === '.')) {
                    num2 += e.key;
                    display(num2, 'numbers');
                };
            };
        }
        else if (acceptedOperators.includes(e.key)) {
            if (num1 === '') {
                return;
            };
    
            if (num1 !== '' && num2 !== '') {
                result = callOperation(num1, num2, operator);
                display(result, 'numbers')
                num1 = result.toString();
                num2 = '';
                isOperator = false;
            };
    
            if (e.key === '='){
                isEqualSign = true;
            }
            else {
                isEqualSign = false;
            };
    
            isOperator = true
            operator = e.key;
            display(operator, 'operation');          
        };
    });
};
pressedButton();