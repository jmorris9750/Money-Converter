/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function showDrop1() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  document.getElementById("box1") 
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropb')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

