var navlinkContainer = document.getElementById("navlink-container")
var navlinks = navlinkContainer.getElementsByClassName("navlink")


for (var i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className,replace("active", "");
        this.className += "active";
    });
}