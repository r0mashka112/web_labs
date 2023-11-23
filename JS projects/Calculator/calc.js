const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = {'+': '+', '−': '-', '×': '*', '÷': '/'}

var logger = Array(); let squenceDigits = String();

const out = document.querySelector('.calc-screen p');

function isNumeric(str) {
    return /^\d+(.\d+){0,1}$/.test(str);
}

function isDigit(str) {
    return /^\d{1}$/.test(str);
}

function isOperation(str) {
    return /^[\+\-\*\/]{1}$/.test(str);
}

function tokenize(str) {
    let tokens = [];
    let lastNumber = '';
    for (char of str) {
        if (isDigit(char) || char == '.') {
            lastNumber += char;
        } else {
            if (lastNumber.length > 0) {
                tokens.push(lastNumber);
                lastNumber = '';
            }
        } 
        if (isOperation(char) || char == '(' || char == ')') {
            tokens.push(char);
        } 
    }
    if (lastNumber.length > 0) {
        tokens.push(lastNumber);
    }
    return tokens;
}

function compile(str) {
    let out = [];
    let stack = [];
    for (token of tokenize(str)) {
        if (isNumeric(token)) {
            out.push(token);
        } else if (isOperation(token)) {
            while (stack.length > 0 && 
                   isOperation(stack[stack.length - 1]) && 
                   priority(stack[stack.length - 1]) >= priority(token)) {
                out.push(stack.pop());
            }
            stack.push(token);
        } else if (token == '(') {
            stack.push(token);
        } else if (token == ')') {
            while (stack.length > 0 && stack[stack.length - 1] != '(') {
                out.push(stack.pop());
            }
            stack.pop();
        }
    }
    while (stack.length > 0) {
        out.push(stack.pop());
    }
    return out.join(' ');
}

function evaluate(str) {
    let numbers = Array();

    for (let i = 0; i < str.split(' ').length; i++) {
        if (isNumeric(str.split(' ')[i])) numbers.push(Number(str.split(' ')[i]));
        
        else if (isOperation(str.split(' ')[i])) {
            let a = 0; let b = 0;
            switch (str.split(' ')[i]) {
                case '+':
                    a = numbers.pop(); b = numbers.pop();
                    numbers.push(b + a); break;
                case '-':
                    a = numbers.pop(); b = numbers.pop();
                    numbers.push(b - a); break;
                case '*':
                    a = numbers.pop(); b = numbers.pop();
                    numbers.push(b * a); break;
                case '/':
                    a = numbers.pop(); b = numbers.pop();
                    numbers.push(b / a); break;
            }
        }
    }

    return numbers.pop();
}

function clearAll() {
    logger.length = 0;
    squenceDigits = String();
    out.textContent = 0;
}

document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;

    const key = event.target.textContent;

    if (key == 'AC') {
        clearAll();
    }
    else if (key == '(' || key == ')') {
        if (squenceDigits != '') {
            logger.push(squenceDigits);
            squenceDigits = String();
            }
        logger.push(key);
        out.textContent = key;
    }
    else if (key == '=') {
        logger.push(squenceDigits); squenceDigits = String();
        let calculated = evaluate(compile(logger.join().replaceAll(',', '')));

        if (String(calculated).includes('.') && String(calculated).split('.')[1].length > 9) {
            out.textContent = calculated.toFixed(6); midResult = calculated.toFixed(6);
        }
        else {
            out.textContent = calculated; midResult = calculated;
        }
    }
    else if (key in action) {
        if (squenceDigits != '') {
            logger.push(squenceDigits); squenceDigits = String();
        }
        logger.push(action[key]);
    }
    else if (digit.includes(key)) {
        if (squenceDigits.length == 0 && key == '0') squenceDigits += '';
        else {
            squenceDigits += key;
            out.textContent = squenceDigits;
        }
    }
}