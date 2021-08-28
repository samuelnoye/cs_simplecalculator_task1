//'use strict';
module.exports = class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    add() {
        return this.num1 + this.num2;
    }

    multiply() {
        return this.num1 * this.num2;
    }

    validateInput() {
        if (isNaN(this.a + this.b) || isNaN(this.a * this.b)) {
            return false
        }
        return true
    }

}