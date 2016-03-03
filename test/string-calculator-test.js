var expect = require('chai').expect;
var add = require('../lib/string-calculator');

describe('StringCalculator', () => {
  it('returns 0 for an empty string', () => {
    expect(add('')).to.equal(0);
  });
  it('returns 5 for \'5\'', () =>{
    expect(add('1')).to.equal(1);
  });
  it('sums comma separated numbers', () =>{
    expect(add('1,2')).to.equal(3);
  });
  it('accepts newlines and commas as separators', () => {
    expect(add('1\n2,3')).to.equal(6);
  });
  it('supports specifiable delimiters', () => {
    expect(add('//#\n1#2#3')).to.equal(6);
  });
  it('should throw an exception if there is a negative number', () =>{
    var fn = () => { add('1,-2,-1'); };
    expect(fn).to.throw(/-2/);
    expect(fn).to.throw(/-1/);
  });
  it('should not accept numbers larger than 1000', () => {
    expect(add('2,1001')).to.equal(2);
  });
  it('should accept a delimiter of arbitrary length specified in square brackets', () => {
    expect(add('//[***]\n1***2***3')).to.equal(6);
  });

});
