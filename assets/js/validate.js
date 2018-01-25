
$(document).ready(function() {
  /*
  *validar tipo de dato ingresado en campo de TC
  */
  const validaNum = /^\d*$/;

  $('#creditCard').keyup(function() {
    if (validaNum.test($('#creditCard').val()) === false) {
      $('#creditCard').attr('class', 'invalid');
      $('#status').attr('data-error', 'Favor ingrese sólo dígitos');
    } else {
      $('#creditCard').removeAttr('class', 'invalid');
      $('#status').removeAttr('data-error', 'Favor ingrese sólo dígitos');
    }
  });
  /*
  *valida prefijo por cada tipo de tarjeta y largo de éstass
  */
  $('#creditCard').keyup(function() {
    var prefijo = $('#creditCard').val().charAt(0) + $('#creditCard').val().charAt(1);
    if (prefijo >= 51 && prefijo <= 55) {
      if ($('#creditCard').val().length === 16) {
        validCard();
      }
    } if (prefijo == 34 || prefijo == 37) {
      if ($('#creditCard').val().length === 15) {
        validCard();
      }
    } if (prefijo >= 40 && prefijo <= 49) {
      if ($('#creditCard').val().length === 13 || $('#creditCard').val().length === 16) {
        validCard();
      }
    }
  });
    /*;
      $('#status').attr('data-error', 'Favor ingrese 16 dígitos');
    }
    if ($('#creditCard').val().length === 16) {
      validCard();
    }
    
    if ($('#creditCard').val().search(validaNum)) {
      alert('solo puede ingresar numeros');
    }
  });*/
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