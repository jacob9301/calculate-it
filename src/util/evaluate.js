const calculate = (textOperands, operator) => {
    
    const operands = textOperands.map((text) => parseFloat(text));

    switch (operator) {
        case '÷':
            return operands[0] / operands[1];
        
        case '×':
            return operands[0] * operands[1];

        case '-':
            return operands[0] - operands[1];

        case '+':
            return operands[0] + operands[1];
        
        default:
            return operands[0];
    }
};

export default calculate;