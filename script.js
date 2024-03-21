
const in_amount = document.getElementById("amount");
const dd_from = document.getElementById("from");
const dd_to = document.getElementById("to");
const div_result = document.getElementById("result");


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

    }





}
function convertCurrency() {
    if (dd_from.value = "usd", dd_to.value = "pesos") {
      div_result.innerHTML = in_amount.value * exchangeRates.usd.pesos
    }

    else if (dd_from.value = "usd", dd_to.value = "yen") {
      div_result.innerHTML = in_amount.value * exchangeRates.usd.yen
    }

    else if (dd_from.value = "usd", dd_to.value = "eur") {
      div_result.innerHTML = in_amount.value * exchangeRates.usd.eur
    }

    else if (dd_from.value = "usd", dd_to.value = "inr") {
      div_result.innerHTML = in_amount.value * exchangeRates.usd.rupee
    }

    else if (dd_from.value = "usd", dd_to.value = "usd") {
      div_result.innerHTML = in_amount.value * exchangeRates.usd.usd
    }

    }