var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."

  //Buttons Testing
  it('should have working number button 1', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1');
  });

  it('should have working number button 2', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2');
  });

  it('should have working number button 3', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number3')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3');
  });

  it('should have working number button 4', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number4')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4');
  });

  it('should have working number button 5', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5');
  });

  it('should have working number button 6', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number6')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6');
  });

  it('should have working number button 7', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number7')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('7');
  });

  it('should have working number button 8', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number8')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8');
  });

  it('should have working number button 9', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number9')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('9');
  });

  it('should have working number button 0', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number0')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0');
  });

  it('should have working number concat', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#number3')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('23');
  });

//calculations tests
  it('should calculate additions', function() {
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('7');
  });

  it('should calculate subtractions', function() {
    running_total = element(by.css('#running_total'));
    element(by.css('#number5')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2');
  });

  it('should calculate multiplications', function() {
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('10');
  });

  it('should calculate divisions', function() {
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('7');
  });

  it('should chain multiple calculations', function() {
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('24');
  });

  it('should calculate with negative numbers', function() {
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-3');
  });

  it('should calculate with decimals', function() {
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5.25');
  });

  it('should calculate large numbers', function() {
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#number4')).click();
    element(by.css('#number8')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number5')).click();
    element(by.css('#number2')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1304236');
  });

  // it('should divide by zero', function() {
  //   running_total = element(by.css('#running_total'));
  //   element(by.css('#number2')).click();
  //   element(by.css('#number1')).click();
  //   element(by.css('#operator_divide')).click();
  //   element(by.css('#number0')).click();
  //   element(by.css('#operator_equals')).click();
  //   expect(running_total.getAttribute('value')).to.eventually.equal('Infinity');
  // });

  //test divide by zero and correct code to match the desired result
  it('should divide by zero', function() {
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Error');
  });

});