/* Toggle between Hamburger Menu and Navigation Menu */

function toggleNav() {
    var  menu_status = document.getElementById("nav-link");
    if (menu_status.style.display === "block") {
        menu_status.style.display = "none";
    } else {
        menu_status.style.display = "block";
    }
  }
