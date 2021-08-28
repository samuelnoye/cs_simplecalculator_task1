const assert = require('assert')
const Calculator = require('../controller/calculator')
const chai = require('chai')
const expect = chai.expect


// it('should return true', () => {
//     assert.equal(true, true)
//   })

it ('correctly calculates the sum of positive numbers', () => {
    const calculator = new Calculator(1, 3)
    const expected = 4
    const result = calculator.add()

    assert.equal(expected, result)
})

it ('correctly calculates the sum of positive and negative numbers', () => {
    const calculator = new Calculator(2, -2)
    const expected = 0
    const result = calculator.add()
    
    assert.equal(expected, result)
})

it ('correctly calculates the sum of negative numbers', () => {
    const calculator = new Calculator(-1, -4)
    const expected = -5
    const result = calculator.add()

    assert.equal(expected, result)
})

it ('correctly calculates the product of two positive numbers', () => {
    const calculator = new Calculator(2, 5)
    const expected = 10
    const result = calculator.product()
    
    assert.equal(expected, result)
})

it ('correctly calculates the product of two negative numbers', () => {
    const calculator = new Calculator(-1, -1)
    const expected = 1
    const result = calculator.product()
    
    assert.equal(expected, result)
})

it ('correctly calculates the product of a negative and positive number', () => {
    const calculator = new Calculator(-13, 10)
    const expected = -130
    const result = calculator.product()
    
    assert.equal(expected, result)
})

// it('should return true if both inputs are numbers', () => {
//     const calculator = new Calculator(2, 3)
//     expect(calculator.validateInput()).to.be.true
// })

// it('should return false if at least one input is not a number', () => {
//     const calculator = new Calculator(2, 'jon')
//     expect(calculator.validateInput()).to.be.false
// })

