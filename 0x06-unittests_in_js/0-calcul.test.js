const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    it('should return 4 when inputs are 1.4 and 2.4', function() {
      assert.strictEqual(calculateNumber(1.4, 2.4), 4);
    });
  
    it('should return 5 when inputs are 1.5 and 2.5', function() {
      assert.strictEqual(calculateNumber(1.5, 2.5), 5);
    });
  
    it('should return 4 when inputs are 1.6 and 2.4', function() {
      assert.strictEqual(calculateNumber(1.6, 2.4), 4);
    });
  
    it('should return 5 when inputs are 1.4 and 2.6', function() {
      assert.strictEqual(calculateNumber(1.4, 2.6), 5);
    });
  });
  