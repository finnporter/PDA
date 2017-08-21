var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('shouldNumberClick', function(){
    calculator.numberClick(5);
    assert.equal(calculator.runningTotal, 5);
  }),

  it('shouldConcatNumberClick', function(){
    calculator.numberClick(5);
    calculator.numberClick(4)
    assert.equal(calculator.runningTotal, 54);
  }),

  it('shouldOperatorClick_add', function(){
    calculator.operatorClick('+');
    assert.equal(calculator.previousOperator, '+');
  }),

  it('shouldOperatorClick_equals', function(){
    calculator.operatorClick('=');
    assert.equal(calculator.previousOperator, null);
  }),

  it('shouldClearClick_whenZero', function(){
    calculator.clearClick('0');
    assert.equal(calculator.previousTotal, null);
    assert.equal(calculator.previousOperator, null);
  }),

  it('shouldClearClick_whenNotZero', function(){
    calculator.clearClick('1');
    assert.equal(calculator.runningTotal, 0);
  }),

  it('shouldAdd', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.add(4);
    assert.equal(calculator.runningTotal, 5);
  }),

  it('shouldSubstract', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3);
  }),

  it('shouldMultiply', function(){
    calculator.numberClick(5);
    calculator.operatorClick('*');
    calculator.multiply(3);
    assert.equal(calculator.runningTotal, 15)
  }),

  it('shouldDivide', function(){
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3);
  }),

  it('shouldChainMultipleOperations', function(){
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 5);
  })

});
