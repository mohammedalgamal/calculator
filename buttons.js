function createButtons() {
    const values = ['7', '8', '9', '÷',
                    '4', '5', '6', 'x', 
                    '1', '2', '3', '-',
                    '.', '0', '=', '+'];

    const parent = document.querySelector('.buttons');

    for (let i = 0; i < values.length; i++) {
        let btn = document.createElement('button');
        btn.classList = 'inner';
        btn.textContent = values[i];
        parent.appendChild(btn);
    };
};
createButtons();