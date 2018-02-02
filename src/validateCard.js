const CARD = {};

/**
 * Funciones que validan si la tarjeta de crédito es válida o no
 */

/* Funcion para validar si el tipo de dato es correcto*/
const validNum = /^\d*$/;
CARD.validateData = (numCard) => {
  if (numCard === '' || numCard.search(validNum)) {
    return false;
  } else {
    return true;
  }
};

/* Valida el largo de la tarjeta */
CARD.validateLength = (numCard) => {
  if (numCard.length === 16) {
    return 'mastercard';
  } else if (numCard.length === 15) {
    return 'amex';
  } else if (numCard.length === 13 || numCard.length === 16) {
    return 'visa';
  } else {
    return 'La tarjeta es inválida';
  }
};

/* Valida el prefijo segun tipo de tarjeta */
CARD.validTypeCard = (numCard) => {
  let prefijo = numCard.charAt(0) + numCard.charAt(1);
  if (prefijo >= 51 && prefijo <= 55) {
    return 'mastercard';
  } else if (prefijo === '37' || prefijo === '34') {
    return 'amex';
  } else if (prefijo >= 40 && prefijo <= 49) {
    return 'visa';
  } else {
    return 'tarjeta no aceptada';
  }
};

/* validar con el algoritmo de Luhn */
CARD.validLuhn = (numcard) => {
  let arrSum = [];
  let suma = 0;
  let cont = 0;
  let arrCard = [...numcard];
  let arrCardReverse = arrCard.reverse();
  for (numbers of arrCardReverse) {
    if (cont % 2 !== 0) {
      arrSum.push(numbers * 2);
    } else {
      arrSum.push(numbers);
    }
    cont++;
  }
  let arr = arrSum.join('').split('');
  for (sumaArr of arr) {
    suma += (sumaArr % 10);
  }
  suma = suma % 10;
  if (suma === 0) {
    return true;
  } else {
    return false;
  }
};

/**
 * Funciones para validar si el cvv es correcto
 */

/* Función para validar si el tipo de dato es correcto */
CARD.validateCvv = (cvv) => {
  if (cvv === '' || cvv.search(validNum)) {
    return false;
  } else {
    return true;
  }
};

/* Función para validar el largo según tipo de tarjeta */
CARD.LengthCvv = (cvv) => {
  if (cvv.length === 3) {
    return 'visa/mastercard';
  } else if (cvv.length === 4) {
    return 'amex';
  } else if (cvv.length < 3 || cvv.length > 4 || cvv.length === '') {
    return 'cvv inválido';
  }
};

/**
 * Funciones para validar fecha de expiración de la tarjeta
 */
/* Función para validar el tipo de dato */
CARD.validTypeDataDate = (dateExp) => {
  let ExpReg = new RegExp("(((0[123456789]|10|11|12)/(([1][9][0-9][0-9])|([2][0-9][0-9][0-9]))))");
  if (ExpReg.test(dateExp)) {
    return true;
  } else {
    return false;
  }
};

/* función para validar si la fecha ingresada es mayor a la fecha actual */
CARD.validateDate = (dateExp) => {
  let hoy = new Date();
  let mm = hoy.getMonth() + 1;
  let yyyy = hoy.getFullYear();
  if (mm < 10) {
    mm = '0' + mm;
  }
  hoy = mm + '/' + yyyy;
  if (dateExp >= hoy) {
    return true;
  } else {
    return false;
  }
};

/**
 * Funciones para validar que el nombre del titular sea correcto
 */

CARD.validateName = (name) => {
  if(name.search(validNum)){
    return true;
  } else {
    return false;
  }
};

module.exports = CARD;