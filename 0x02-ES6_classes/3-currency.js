export default class Currency {
  /**
   * Creates a new @currency .
   *
   * @param {String} name - The name of the curency.
   * @param {String} code - symbole of the curency.
   */
  constructor(code, name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(newvalue) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = newvalue;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
