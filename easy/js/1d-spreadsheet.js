const lines = parseInt(readline());

class Calculation {
    constructor(operation, arg1, arg2) {
        this.operation = operation;
        this.arg1 = arg1;
        this.parsedArg1 = arg1;
        this.arg2 = arg2;
        this.parsedArg2 = arg2;
        this.solution = null;
    }

    parseArgs(calculations) {
        if(this.arg1.includes('$')) {
            this.parsedArg1 = this.findArgument(calculations, this.arg1.replace('$', ''));
        }

        if(this.arg2.includes('$')) {
            this.parsedArg2 = this.findArgument(calculations, this.arg2.replace('$', ''));
        }
    }

    findArgument(calculations, argument) {
        let calculation = calculations[argument];

        if (calculation.solution !== null) return calculation.solution;

        return calculation.solve();
    }

    solve() {
        console.error(this.operation.toLowerCase());
        this.solution = this[this.operation.toLowerCase()]()
        return this.solution;
    }

    value() {
        return this.parsedArg1;
    }

    add() {
        return parseInt(this.parsedArg1) + parseInt(this.parsedArg2);
    }

    sub() {
        return parseInt(this.parsedArg1) - parseInt(this.parsedArg2);
    }

    mult() {
        return parseInt(this.parsedArg1) * parseInt(this.parsedArg2);
    }
}

let calculations = [...Array(lines)].map( _ => {
    return new Calculation(...readline().split(' '));
});

calculations.map( (calculation) => {
    calculation.parseArgs(calculations);
    return calculation;
}).forEach( (calculation) => {
    console.log(calculation.solve());
});