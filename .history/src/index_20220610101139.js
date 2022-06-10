var navlinkContainer = document.getElementById("navlink-container")
var navlinks = navlinkContainer.getElementsByClassName("navlink")


for (var i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className,replace("active", "");
        this.className += "active";
    });
}

// renewal JS //

function w3_open() {
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
  }
  function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
  }