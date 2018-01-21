var validaNum = /^\d*$/;

$(document).ready(function() {
  /*
  *validar que sólo ingresen 16 dígitos
  */
  $('#creditCard').keyup(function() {
    if ($('#creditCard').val().length < 16) {
      $('#creditCard').attr('class', 'invalid');
      $('#status').attr('data-error', 'Favor ingrese 16 dígitos');
    }
    if ($('#creditCard').val().length === 16) {
      validCard();
    }
    
    if ($('#creditCard').val() === '' || $('#creditCard').val().search(validaNum)) {
      alert('solo puede ingresar numeros');
    }
  });
  /*
  *validar tarjeta
  */
  function validCard() {
    var arr = [];
    var creditCardNum = $('#creditCard').val();
    var reverseCreditCard = arr.reverse();
    var pairToSum = [];
    var impairToSum = [];
    var finalSum = [];
    for (var i = 0; i < creditCardNum.length; i++) {
      arr.push(parseInt(creditCardNum[i]));
    }
    var contPair = 1;
    for (var x = 0 ; x < reverseCreditCard.length ; x++) {
      if (contPair % 2 === 0) {
        pairToSum.push(reverseCreditCard[x] * 2);
      } else {
        impairToSum.push(reverseCreditCard[x]);
      }
      contPair++;
    }
    var pairTogether = pairToSum.join('').split('');
    var pairAndImpair = pairTogether.concat(impairToSum);
    for (y = 0; y < pairAndImpair.length; y++) {
      /*
      *ingresar a variable y sumar cada dígito
      */
      finalSum += pairAndImpair[y];
      /*
      *si el residio de la suma/10 es 0 entonces indicar que la tarjeta es válida
      */
    } if (finalSum % 10 === 0) {
      $('#creditCard').attr('class', 'valid');
      $('#status').attr('data-success', 'Número de tarjeta Válido');
    } else {
      $('#creditCard').attr('class', 'invalid');
      $('#status').attr('data-error', 'tarjeta NO válida');
    }
  }
});