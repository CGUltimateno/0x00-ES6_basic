import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.validateNumber(amount, 'Amount');
    this.validateCurrency(currency, 'Currency');
    // eslint-disable-next-line no-underscore-dangle
    this._amount = amount;
    // eslint-disable-next-line no-underscore-dangle
    this._currency = currency;
  }

  get amount() {
    // eslint-disable-next-line no-underscore-dangle
    return this._amount;
  }

  get currency() {
    // eslint-disable-next-line no-underscore-dangle
    return this._currency;
  }

  // eslint-disable-next-line grouped-accessor-pairs
  set amount(newAmount) {
    this.validateNumber(newAmount, 'Amount');
    // eslint-disable-next-line no-underscore-dangle
    this._amount = newAmount;
  }

  // eslint-disable-next-line grouped-accessor-pairs
  set currency(newCurrency) {
    this.validateCurrency(newCurrency, 'Currency');
    // eslint-disable-next-line no-underscore-dangle
    this._amount = newCurrency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  // eslint-disable-next-line class-methods-use-this
  validateNumber(value, propertyName) {
    if (typeof value !== 'number') {
      throw new Error(`${propertyName} must be a number`);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  // eslint-disable-next-line class-methods-use-this
  validateCurrency(value, propertyName) {
    if (!(value instanceof Currency)) {
      throw new Error(`${propertyName} must be a currency`);
    }
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
