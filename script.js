
// function showDrop1() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
//   document.getElementById("usd") 

//   document.getElementById("box1") 
//   // Close the dropdown if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropb')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }

const in_amount = document.getElementById("amount");
const dd_from = document.getElementById("from");
const dd_to = document.getElementById("to");
const div_result = document.getElementById("result");

const exchangeRates = {
    usd: {
        pesos: 16.85,
        usd:1

    },
    pesos: {
      usd: 0.059,
      pesos: 1

    }

    


}
function convertCurrency() {

  
    var x = in_amount; 
    if(dd_from == usd, dd_to == pesosusd) {
      div_result.innerText = in_amount*;
    }

}