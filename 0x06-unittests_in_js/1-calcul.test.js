const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
    describe('SUM', function() {
      it('should return 4 when inputs are 1.4 and 2.4', function() {
        assert.strictEqual(calculateNumber('SUM', 1.4, 2.4), 4);
      });
  
      it('should return 5 when inputs are 1.5 and 2.5', function() {
        assert.strictEqual(calculateNumber('SUM', 1.5, 2.5), 5);
      });
  
      it('should return 4 when inputs are 1.6 and 2.4', function() {
        assert.strictEqual(calculateNumber('SUM', 1.6, 2.4), 4);
      });
  
      it('should return 5 when inputs are 1.4 and 2.6', function() {
        assert.strictEqual(calculateNumber('SUM', 1.4, 2.6), 5);
      });
  
      it('should return 0 when inputs are -1.4 and 1.4', function() {
        assert.strictEqual(calculateNumber('SUM', -1.4, 1.4), 0);
      });
  
      it('should return -1 when inputs are -1.5 and 1.4', function() {
        assert.strictEqual(calculateNumber('SUM', -1.5, 1.4), -1);
      });
    });
  
    describe('SUBTRACT', function() {
      it('should return -1 when inputs are 1.4 and 2.4', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.4), -1);
      });
  
      it('should return 0 when inputs are 1.5 and 2.5', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 2.5), 0);
      });
  
      it('should return -1 when inputs are 1.6 and 2.4', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.6, 2.4), -1);
      });
  
      it('should return 0 when inputs are 1.4 and 2.6', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.6), 0);
      });
  
      it('should return -3 when inputs are -1.4 and 1.4', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', -1.4, 1.4), -3);
      });
  
      it('should return -3 when inputs are -1.5 and 1.4', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', -1.5, 1.4), -3);
      });
    });
  
    describe('DIVIDE', function() {
      it('should return 0.5 when inputs are 1.4 and 2.4', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 2.4), 0.5);
      });
  
      it('should return 1 when inputs are 1.5 and 2.5', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 1.5, 2.5), 1);
      });
  
      it('should return 0.5 when inputs are 1.6 and 2.4', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 1.6, 2.4), 0.5);
      });
  
      it('should return 1 when inputs are 1.4 and 2.6', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 2.6), 1);
      });
  
      it('should return Error when inputs are 1.4 and 0', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
      });
  
      it('should return -1 when inputs are -1.4 and 1.4', function() {
        assert.strictEqual(calculateNumber('DIVIDE', -1.4, 1.4), -1);
      });
  
      it('should return 1 when inputs are -1.5 and -1.5', function() {
        assert.strictEqual(calculateNumber('DIVIDE', -1.5, -1.5), 1);
      });
    });
  });
