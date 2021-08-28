const chai = require('chai')
const expect = chai.expect
const Calculator = require('../controller/calculator')

describe('Calculator', () => {
    it('should return true if both inputs are numbers', () => {
        const calculator = new Calculator(2, 3)
        expect(calculator.validateInput()).to.be.true
    })

    it('should return an error if at least one input is not a number', () => {
        const calculator = new Calculator(2, 'jon')
        expect(calculator.validateInput()).to.be.false
    })

})
