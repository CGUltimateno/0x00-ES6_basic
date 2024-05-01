const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function() {
  let consoleLog;

  beforeEach(function() {
    // Save the original console.log
    consoleLog = console.log;
    // Replace console.log with a spy
    console.log = sinon.spy();
  });

  afterEach(function() {
    // Restore the original console.log
    console.log = consoleLog;
  });

  it('logs "The total is: 120" to the console once', function() {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('logs "The total is: 20" to the console once', function() {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});