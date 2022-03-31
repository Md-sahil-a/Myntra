
//<------- TOGGLE MENU JS ----------->//
function myFunction() {
  var dropDownMenu = document.getElementById("myDropdown")
  dropDownMenu.classList.toggle("show")
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
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


//<---------- HYPERLINK FOR PROFILE ---------->//
document.getElementById('profile').addEventListener('click', function(){
    window.location.href = "/Profile/signup.html"
})
