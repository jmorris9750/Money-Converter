
const in_amount = document.getElementById("amount");
const dd_from = document.getElementById("from");
const dd_to = document.getElementById("to");
const div_result = document.getElementById("result");
const converter = document.getElementById("Converter");

const exchangeRates = {
    usd: {
        pesos: 16.85,
        usd:1,
        eur:0.92,
        rupee:83.11,
        yen:151.09

    },
    pesos: {
      usd: 0.059,
      pesos: 1,
      yen:9.04,
      rupee:4.97,
      eur:0.055

    },

    yen: {
      usd:0.0066,
      pesos: 0.11,
      yen:1,
      rupee:0.55,
      eur:0.0061

    },

    eur: {
      usd:1.08 ,
      pesos: 18.15,
      yen:163.65 , 
      rupee: 90.47 ,
      eur:1
    }



  
}


function convertCurrency() {
  //usd
    if (dd_from.value == "usd", dd_to.value == "pesos") {
      div_result.innerText = in_amount.value * exchangeRates.usd.pesos
    }

    else if (dd_from.value == "usd",  dd_to.value == "yen") {
      div_result.innerText = in_amount.value * exchangeRates.usd.yen
    }

    else if (dd_from.value == "usd", dd_to.value == "eur") {
      div_result.innerText = in_amount.value * exchangeRates.usd.eur
    }

    else if (dd_from.value == "usd", dd_to.value == "inr") {
      div_result.innerText = in_amount.value * exchangeRates.usd.rupee
    }

    else if (dd_from.value == "usd", dd_to.value == "usd") {
      div_result.innerText = in_amount.value * exchangeRates.usd.usd
    }
//pesos
    else if (dd_from.value == "pesos", dd_to.value == "pesos") {
      div_result.innerText = in_amount.value * exchangeRates.pesos.pesos
    }

    else if (dd_from.value == "pesos", dd_to.value == "yen") {
      div_result.innerText = in_amount.value * exchangeRates.pesos.yen
    }

    else if (dd_from.value == "pesos", dd_to.value == "eur") {
      div_result.innerText = in_amount.value * exchangeRates.pesos.eur
    }

    else if (dd_from.value == "pesos", dd_to.value == "inr") {
      div_result.innerText = in_amount.value * exchangeRates.pesos.rupee
    }

    else if (dd_from.value == "pesos", dd_to.value == "usd") {
      div_result.innerText = in_amount.value * exchangeRates.pesos.usd
    }
    //yen
    else if (dd_from.value == "yen", dd_to.value == "pesos") {
      div_result.innerText = in_amount.value * exchangeRates.yen.pesos
    }

    else if (dd_from.value == "yen", dd_to.value == "yen") {
      div_result.innerText = in_amount.value * exchangeRates.yen.yen
    }

    else if (dd_from.value == "yen", dd_to.value == "eur") {
      div_result.innerText = in_amount.value * exchangeRates.yen.eur
    }

    else if (dd_from.value == "yen", dd_to.value == "inr") {
      div_result.innerText = in_amount.value * exchangeRates.yen.rupee
    }

    else if (dd_from.value == "yen", dd_to.value == "usd") {
      div_result.innerText = in_amount.value * exchangeRates.yen.usd
    }
    }