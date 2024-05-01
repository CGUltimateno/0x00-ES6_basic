const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  describe('Cart page', () => {
    it('returns correct status code when :id is a number', (done) => {
      const id = 1;
      request.get(`${API_URL}/cart/${id}`, (_err, res) => {
        expect(res.statusCode).to.be.equal(200);
        done();
      });
    });

    it('returns 404 status code when :id is NOT a number', (done) => {
      const id = 'not-a-number';
      request.get(`${API_URL}/cart/${id}`, (_err, res) => {
        expect(res.statusCode).to.be.equal(404);
        done();
      });
    });
  });
});