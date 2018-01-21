# Validador de datos de tarjetas de crédito

API que valida el número de una tarjeta de crédito por medio del algoritmo de Luhn.

El plugin debe recibir una referencia a un elemento del DOM que contenga <input>s con los siguientes nombres (atributo name):

cn (Card Number): El número de la tarjeta de crédito
exp (Expiry Date): Fecha de expiración
cvv (Card Verification Value): Código de validación de 3 dígitos
name: Nombre completo como aparece en la tarjeta
Al hacer las validaciones, la librería añade la clase .error a los <input>s que no pasen la validación, o la clase .success en caso de que sí pase.


### Ambiente de Desarrollo

El ambiente de desarrollo del proyecto se formará con los siguientes componentes:

- Babel v.6.26.0
- Eslint 
- Materialize-css
- .gitignore, oculta archivos en github
- npm init

### Ejemplo

![Validador](https://ibb.co/mFMe6w)

![Tarjeta válida](https://ibb.co/iJprmw)

![Tarjeta inválida](https://ibb.co/nshBmw)

