// eslint-disable-next-line no-unused-vars
class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  cloneCar() {
    // eslint-disable-next-line no-underscore-dangle
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
