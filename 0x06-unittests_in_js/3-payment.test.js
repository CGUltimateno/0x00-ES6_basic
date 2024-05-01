const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  it('should use the same math as utils.calculateNumber', function() {
    const utilsStub = sinon.stub(utils, 'calculateNumber');
    utilsStub.withArgs('SUM', 100, 20).returns(120);

    sendPaymentRequestToApi(100, 20);

    expect(utilsStub.calledWith('SUM', 100, 20)).to.be.true;

    utilsStub.restore();
  });
});