# Validador de datos de tarjetas de crédito

API que valida el número de una tarjeta de crédito por medio del algoritmo de Luhn.

El plugin debe recibir una referencia a un elemento del DOM que contenga <input>s con los siguientes nombres (atributo id):

cn (Card Number): El número de la tarjeta de crédito
exp (Expiry Date): Fecha de expiración
cvv (Card Verification Value): Código de validación de 3 dígitos
name: Nombre completo como aparece en la tarjeta


## Ambiente de Desarrollo

El ambiente de desarrollo del proyecto se formará con los siguientes componentes:

- Babel v.6.26.0
- Eslint 
- Materialize-css
- NPM
- Mocha v.5.0.0
- Chai v.4.1.2

## Instrucciones para utilizar la librería

- Copie y pegue los siguientes archivos js de la librería en su html.

````
  <script src="https://cdn.rawgit.com/cynthia1171/card-validator/megaDev/src/validateCard.js"></script>
  <script src="https://rawgit.com/cynthia1171/card-validator/megaDev/src/validateCard.js"></script>
  <script src="https://cdn.rawgit.com/cynthia1171/card-validator/megaDev/lib/validateCard-EC5.js"></script>
  <script src="https://rawgit.com/cynthia1171/card-validator/megaDev/lib/validateCard-EC5.js"></script>

````

## Parámetros que debes utilizar.

- Validar que el número de tajeta, cvv, fecha de expiración ó nombre de titular no estén vacíos o tengan tipos de datos distintos a los requeridos. Por ejemplo, que el número de tarjeta contenga letras.

````
// true or false
CARD.validateData(numCard); 
CARD.validateCvv(cvv);
CARD.validTypeDataDate(dateExp);
CARD.validateName(name);
````


### Para número de tarjeta

- Validar la cantidad de dígitos de la tarjeta. visa: 13 ó 16, mastercard: 16, american express: 15.

````
CARD.validateLength(numCard); //dependiendo de la cantidad de dígitos que contenga la tarjeta, retornará: visa, mastercard ó amex. 
````

- Validar que el número de la tarjeta con algoritmo de Luhn.

````
// true or false
CARD.validLuhn(numCard);
````

### Para cvv

- Validar que la cantidad de números en el cvv sea correcto dependiendo de la tarjeta, visa y mastercard: 3, amex: 4.

````
// retorna el nombre de la tarjeta
CARD.LengthCvv(cvv);
````

### Para fecha de expiración

- Valida si la fecha ingresada (mm/aaaa) es igual ó superior a la actual.

````
// true or false
CARD.validateDate(dateExp);
````

## Ejemplo funcional

[entra al demo](https://cynthia1171.github.io/demo/)

## Contribuidoras

- [Carol Martínez](https://github.com/cynthia1171)
- [Cynthia Isla](https://github.com/cynthia1171)

