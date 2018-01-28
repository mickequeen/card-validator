const chai = require('chai');
const validate = require('../src/validateCard');

/* test para validar el numero de tarjeta */
describe('Validar dato ingresado', () => {
  it('validar si se ingresa el tipo de dato correcto', () => {
    chai.assert.equal(validate.validateData(''), false);
    chai.assert.equal(validate.validateData('aaasssssss'), false)
    chai.assert.equal(validate.validateData('12dasa334d'), false);
    chai.assert.equal(validate.validateData('1234567890'), true);
  });
  it('Tarjeta válida según el largo', () => {
    chai.assert.equal(validate.validateLength('1111111111111111'), 'mastercard');
    chai.assert.equal(validate.validateLength('111111111111111'), 'amex');
    chai.assert.equal(validate.validateLength('1111111111111'), 'visa');
    chai.assert.equal(validate.validateLength('11111111111111111'), 'La tarjeta es inválida');
  });
  it('Tarjeta válida según prefijo', () => {
    chai.assert.equal(validate.validTypeCard('5111111111111111'), 'mastercard');
    chai.assert.equal(validate.validTypeCard('4111111111111'), 'visa');
    chai.assert.equal(validate.validTypeCard('341111111111111'), 'amex');
    chai.assert.equal(validate.validTypeCard('771111111111111'), 'tarjeta no aceptada');
  });
  it('Tarjeta válida según algoritmo de Luhn', () => {
    chai.assert.equal(validate.validLuhn('4916323026380999'), true);
    chai.assert.equal(validate.validLuhn('4916323021872655'), false);
  });
}); 

/* Test para validar el cvv */
describe('Validar cvv', () => {
  it('Validar dato ingresado', () => {
    chai.assert.equal(validate.validateCvv(''), false);
    chai.assert.equal(validate.validateCvv('123'), true);
    chai.assert.equal(validate.validateCvv('asd'), false);
    chai.assert.equal(validate.validateCvv('123asd'), false);
  });
  it('Validar según largo', () => {
    chai.assert.equal(validate.LengthCvv('111'), 'visa/mastercard');
    chai.assert.equal(validate.LengthCvv('1111'), 'amex');
    chai.assert.equal(validate.LengthCvv(''), 'cvv inválido');
  });
});