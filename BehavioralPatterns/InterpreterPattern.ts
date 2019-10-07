interface Expression {
    interpret(context: string): boolean;
}

class TerminalExpression implements Expression {
    private data: string;

    constructor(data: string) {
        this.data = data;
    }

    public interpret(context: string): boolean {
        if (context.match(this.data)) {
            return true;
        }

        return false;
    }
}
class OrExpression implements Expression {
    private expr1: Expression = null;
    private expr2: Expression = null;

    constructor(expr1: Expression, expr2: Expression) {
        this.expr1 = expr1;
        this.expr2 = expr2;
    }

    public interpret(context: string): boolean {
        return this.expr1.interpret(context) || this.expr2.interpret(context);
    }
}

class AndExpression implements Expression {
    private expr1: Expression = null;
    private expr2: Expression = null;

    constructor(expr1: Expression, expr2: Expression) {
        this.expr1 = expr1;
        this.expr2 = expr2;
    }

    public interpret(context: string): boolean {
        return this.expr1.interpret(context) && this.expr2.interpret(context);
    }
}


const getMaleExpression = (): Expression => {
    const robert: Expression = new TerminalExpression("Robert");
    const john: Expression = new TerminalExpression("John");

    return new OrExpression(robert, john);
}

const getMarriedWomenExpression = (): Expression => {
    const julia: Expression = new TerminalExpression("Julia");
    const married: Expression = new TerminalExpression("Married");

    return new AndExpression(julia, married);
}


const isMale: Expression = getMaleExpression();
const isMarriedWomen: Expression = getMarriedWomenExpression();

console.log(`John is male? ${isMale.interpret('John')}`);
console.log(`Julia is a married women? ${isMarriedWomen.interpret('Married Julia')}`)
