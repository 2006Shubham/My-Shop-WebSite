function openDrawer() {
    document.getElementById("drawer").style.left = "0";
}

function closeDrawer() {
    document.getElementById("drawer").style.left = "-250px";
}


function toggleDrawer() {
    const drawer = document.getElementById("drawer");
    if (drawer.classList.contains("open")) {
        drawer.classList.remove("open");
    } else {
        drawer.classList.add("open");
    }
}

