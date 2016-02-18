var expect = require('chai').expect;
var add = require('../lib/string-calculator');

describe('StringCalculator', () => {
  it('returns 0 for an empty string', () => {
    expect(add('')).to.equal(0);
  });

  it ('returns 1 for the string 1', () => {
    expect(add('1')).to.equal(1);
  });

  it ('returns 3 for the string 1,2', () => {
    expect(add('1,2')).to.equal(3);
  });

});
