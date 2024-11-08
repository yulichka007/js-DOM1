function appendToExpression(value) {  
    const expressionInput = document.getElementById('expression');  
    expressionInput.value += value;
}

function isValidExpression(expression) {  
    return /^-?\d+(\.\d+)?([+\-*/]-?\d+(\.\d+)?)*$/.test(expression);  
}

function calculateResult() {  
    const expressionInput = document.getElementById('expression');
    const expression = expressionInput.value;

    if (!isValidExpression(expression)) {
        expressionInput.value = 'Помилка';
        return; 
    }

    try {  
        const result = eval(expression);  
        document.getElementById('fullExpressionDisplay').textContent = `${expression} = ${result}`; 
        expressionInput.value = result;
    } catch (error) {  
        expressionInput.value = 'Помилка'; 
    }
}

function clearLastCharacter() {  
    const expressionInput = document.getElementById('expression');  
    expressionInput.value = expressionInput.value.slice(0, -1);  
}

function clearFields() {  
    document.getElementById('expression').value = '';  
    document.getElementById('fullExpressionDisplay').textContent = ''; 
}
