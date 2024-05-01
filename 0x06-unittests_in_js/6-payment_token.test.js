const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function() {
  it('returns a promise that resolves with "Successful response from the API"', function() {
    return getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.eql({data: 'Successful response from the API'});
      });
  });
});