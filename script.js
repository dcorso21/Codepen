class CALC {
    constructor() {
        this.description = "Calculation Functions";
    }

    add(num_a, num_b) {
        return num_a + num_b;
    }
    subtract(num_a, num_b) {
        return num_a - num_b;
    }
    divide(num_a, num_b) {
        return num_a / num_b;
    }
}

const Calc = new CALC();

let s = Calc.divide(1, 2);
console.log(s);
// console.log(s);
