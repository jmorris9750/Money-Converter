
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
    },

    rupee: {
      usd:0.012 ,
      pesos:0.20  ,
      yen: 1.81 ,
      rupee:1,
      eur: 0.011 , 
    }



  
}


function convertCurrency() {
  //usd
    if (dd_from.value == "usd" && dd_to.value == "pesos") {
      div_result.innerText = in_amount.value * exchangeRates.usd.pesos
    }

    if (dd_from.value == "usd" && dd_to.value == "yen") {
      div_result.innerText = in_amount.value * exchangeRates.usd.yen
    }

    if (dd_from.value == "usd" && dd_to.value == "eur") {
      div_result.innerText = in_amount.value * exchangeRates.usd.eur
    }

    if (dd_from.value == "usd" && dd_to.value == "inr") {
      div_result.innerText = in_amount.value * exchangeRates.usd.rupee
    }

    if (dd_from.value == "usd"&& dd_to.value == "usd") {
      div_result.innerText = in_amount.value * exchangeRates.usd.usd
    }
//pesos
    if (dd_from.value == "pesos" && dd_to.value == "pesos") {
      div_result.innerText = in_amount.value * exchangeRates.usd.usd
    }

    if (dd_from.value == "pesos" && dd_to.value == "yen") {
      div_result.innerText = in_amount.value * exchangeRates.pesos.yen
    }

    if (dd_from.value == "pesos" && dd_to.value == "eur") {
      div_result.innerText = in_amount.value * exchangeRates.pesos.eur
    }

    if (dd_from.value == "pesos" && dd_to.value == "inr") {
      div_result.innerText = in_amount.value * exchangeRates.pesos.rupee
    }

    if (dd_from.value == "pesos" && dd_to.value == "usd") {
      div_result.innerText = in_amount.value * exchangeRates.pesos.usd
    }
//yen
    if(dd_from.value == "yen" && dd_to.value == "pesos") {
      div_result.innerText = in_amount.value * exchangeRates.yen.pesos
    }

    if (dd_from.value == "yen" && dd_to.value == "yen") {
      div_result.innerText = in_amount.value * exchangeRates.yen.yen
    }

    if (dd_from.value == "yen" && dd_to.value == "eur") {
      div_result.innerText = in_amount.value * exchangeRates.yen.eur
    }

    if (dd_from.value == "yen" && dd_to.value == "inr") {
      div_result.innerText = in_amount.value * exchangeRates.yen.rupee
    }

    if (dd_from.value == "yen" && dd_to.value == "usd") {
      div_result.innerText = in_amount.value * exchangeRates.yen.usd
    }
//euro
    if(dd_from.value == "eur" && dd_to.value == "pesos") {
      div_result.innerText = in_amount.value * exchangeRates.eur.pesos
    }

    if (dd_from.value == "eur" && dd_to.value == "yen") {
      div_result.innerText = in_amount.value * exchangeRates.eur.yen
    }

    if (dd_from.value == "eur" && dd_to.value == "eur") {
      div_result.innerText = in_amount.value * exchangeRates.eur.eur
    }

    if (dd_from.value == "eur" && dd_to.value == "inr") {
      div_result.innerText = in_amount.value * exchangeRates.eur.rupee
    }

    if (dd_from.value == "eur" && dd_to.value == "usd") {
      div_result.innerText = in_amount.value * exchangeRates.eur.usd
    }
//rupee 
    if(dd_from.value == "inr" && dd_to.value == "pesos") {
      div_result.innerText = in_amount.value * exchangeRates.rupee.pesos
    }

    if (dd_from.value == "inr" && dd_to.value == "yen") {
      div_result.innerText = in_amount.value * exchangeRates.rupee.yen
    }

    if (dd_from.value == "inr" && dd_to.value == "eur") {
      div_result.innerText = in_amount.value * exchangeRates.rupee.eur
    }

    if (dd_from.value == "inr" && dd_to.value == "inr") {
      div_result.innerText = in_amount.value * exchangeRates.rupee.rupee
    }

    if (dd_from.value == "inr" && dd_to.value == "usd") {
      div_result.innerText = in_amount.value * exchangeRates.rupee.usd
    }
    }