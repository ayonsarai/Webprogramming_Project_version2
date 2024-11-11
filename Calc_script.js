class SimpleCalculator {

        constructor() {
        this.inputs = [];
    }

    addInput(value) {
        // Only accept valid inputs
        if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "/", "*","." ,"="].includes(value)) {
            this.inputs.push(value);
            if (value === "=") {
                const result = this.calculate();
                this.inputs = [];  // Reset inputs after calculation
                return result;
            }
        } else {
            console.log("Invalid input! Please enter a number or an operator.");
        }
    }

    calculate() {
        // Remove the "=" from the inputs
        this.inputs.pop();

        // Convert the list of inputs into a string expression
        const expression = this.inputs.join('');

        // Evaluate the expression considering the order of operations
        const result = this.evaluateExpression(expression);
        return result;
    }

    evaluateExpression(expression) {
        // First, handle multiplication and division
        const evalMulDiv = (expr) => {
            const tokens = expr.split(' ');
            const stack = [];
            let i = 0;
            while (i < tokens.length) {
                if (tokens[i] === "*" || tokens[i] === "/") {
                    const op = tokens[i];
                    const prev = stack.pop();
                    const next = tokens[i + 1];
                    if (op === "*") {
                        stack.push(String(Number(prev) * Number(next)));
                    } else if (op === "/") {
                        stack.push(String(Math.floor(Number(prev) / Number(next))));
                    }
                    i += 1;
                } else {
                    stack.push(tokens[i]);
                }
                i += 1;
            }
            return stack.join(' ');
        };

        // Then, handle addition and subtraction
        const evalAddSub = (expr) => {
            const tokens = expr.split(' ');
            let result = Number(tokens[0]);
            let i = 1;
            while (i < tokens.length) {
                const op = tokens[i];
                const next = Number(tokens[i + 1]);
                if (op === "+") {
                    result += next;
                } else if (op === "-") {
                    result -= next;
                }
                i += 2;
            }
            return result;
        };

        // Replace operators with spaces for splitting
        expression = expression.replace(/\*/g, ' * ').replace(/\//g, ' / ').replace(/\+/g, ' + ').replace(/-/g, ' - ');
        expression = evalMulDiv(expression);
        const result = evalAddSub(expression);
        return result;
    }
}

