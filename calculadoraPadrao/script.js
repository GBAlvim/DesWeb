document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display');
    const subDisplay = document.querySelector('.sub-display');
    const historyDisplay = document.querySelector('.history-display'); // Seleciona o segundo display
    const buttons = document.querySelectorAll('.buttons button');

    let currentInput = '';
    let subDisplayContent = '';
    let historyContent = ''; // Variável para armazenar o histórico

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.value;

            if (value === 'clear') {
                clearDisplay();
            } else if (value === 'backspace') {
                backspace();
            } else if (value === '=') {
                evaluateExpression();
            } else if (value === 'sqrt') {
                calculateSquareRoot();
            } else if (value === 'sin' || value === 'cos' || value === 'tan') {
                calculateTrigonometricFunction(value);
            } else {
                currentInput += value;
            }

            if (value !== 'clear' && value !== 'backspace' && value !== '=') {
                subDisplayContent += value;
                subDisplay.value = subDisplayContent;
                updateDisplay();
            } else if (value === 'clear') {
                clearDisplay();
            } else if (value === 'backspace') {
                backspace();
            } else if (value === '=') {
                evaluateExpression();
            }
        });
    });

    function clearDisplay() {
        currentInput = '';
        subDisplayContent = '';
        updateDisplay();
        subDisplay.value = '';
        historyContent = ''; // Limpa o histórico
        historyDisplay.value = ''; // Limpa o segundo display
    }

    function backspace() {
        currentInput = currentInput.slice(0, -1);
        subDisplayContent = subDisplayContent.slice(0, -1);
        updateDisplay();
        subDisplay.value = subDisplayContent;
    }

    function evaluateExpression() {
        try {
            const result = evaluateExpressionUsingStack(currentInput);
            currentInput = result.toString();
            historyContent += currentInput; // Adiciona o resultado ao histórico
        } catch (error) {
            currentInput = 'Erro';
        }
        updateDisplay();
        subDisplay.value = '';
        historyDisplay.value = historyContent; // Atualiza o segundo display com o histórico
    }

    function calculateSquareRoot() {
        currentInput = Math.sqrt(parseFloat(currentInput)).toString();
        updateDisplay();
    }

    function calculateTrigonometricFunction(func) {
        const angle = parseFloat(currentInput);
        let result;
        switch (func) {
            case 'sin':
                result = Math.sin(angle);
                break;
            case 'cos':
                result = Math.cos(angle);
                break;
            case 'tan':
                result = Math.tan(angle);
                break;
        }
        currentInput = result.toString();
        updateDisplay();
    }

    function updateDisplay() {
        display.value = currentInput === '' ? '0' : currentInput;
    }
});


function evaluateExpressionUsingStack(expression) {
    const postfixExpression = infixToPostfix(expression);
    return evaluatePostfix(postfixExpression);
}

function infixToPostfix(expression) {
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '%': 2,
        'sqrt': 3,
        'pow': 3,
        'exp': 3,
        'ln': 3,
        'log': 3,
        'sin': 3,
        'cos': 3,
        'tan': 3,
        '(': 0,
    };

    const operatorsStack = [];
    const outputQueue = [];
    const tokens = expression.match(/(?:\d+\.\d+|\d+|\S)/g);

    tokens.forEach(token => {
        if (!isNaN(token)) {
            outputQueue.push(token);
        } else if (token in precedence) {
            while (operatorsStack.length > 0 && precedence[token] <= precedence[operatorsStack[operatorsStack.length - 1]]) {
                outputQueue.push(operatorsStack.pop());
            }
            operatorsStack.push(token);
        } else if (token === '(') {
            operatorsStack.push(token);
        } else if (token === ')') {
            while (operatorsStack.length > 0 && operatorsStack[operatorsStack.length - 1] !== '(') {
                outputQueue.push(operatorsStack.pop());
            }
            operatorsStack.pop(); // Remove o '(' da pilha
        }
    });

    while (operatorsStack.length > 0) {
        outputQueue.push(operatorsStack.pop());
    }

    return outputQueue.join(' ');
}

function evaluatePostfix(postfixExpression) {
    const stack = [];

    postfixExpression.split(' ').forEach(token => {
        if (!isNaN(token)) {
            stack.push(parseFloat(token));
        } else {
            const operand2 = stack.pop();
            let operand1;
            if (token !== 'sqrt' && token !== 'sin' && token !== 'cos' && token !== 'tan' && token !== 'exp' && token !== 'ln' && token !== 'log') {
                operand1 = stack.pop();
            }
            let result;

            switch (token) {
                case '+':
                    result = operand1 + operand2;
                    break;
                case '-':
                    result = operand1 - operand2;
                    break;
                case '*':
                    result = operand1 * operand2;
                    break;
                case '/':
                    result = operand1 / operand2;
                    break;
                case '%':
                    result = operand1 % operand2;
                    break;
                case 'sqrt':
                    result = Math.sqrt(operand2);
                    break;
                case 'pow':
                    result = Math.pow(operand1, operand2);
                    break;
                case 'exp':
                    result = Math.exp(operand2);
                    break;
                case 'ln':
                    result = Math.log(operand2);
                    break;
                case 'log':
                    result = Math.log10(operand2);
                    break;
                case 'sin':
                    operand2 = degreesToRadians(operand2);
                    result = Math.sin(operand2);
                    break;
                case 'cos':
                    operand2 = degreesToRadians(operand2);
                    result = Math.cos(operand2);
                    break;
                case 'tan':
                    operand2 = degreesToRadians(operand2);
                    result = Math.tan(operand2);
                    break;
            }

            stack.push(result);
        }
    });

    return stack.pop();
}

function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}