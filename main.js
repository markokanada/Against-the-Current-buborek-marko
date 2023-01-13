let toggle = document.querySelector(".toggle");

let menu = document.getElementById("menu");

let items = document.querySelectorAll(".item");

function startUP() {
    toggle = document.querySelector(".toggle");
    menu = document.getElementById("menu");
    items = document.querySelectorAll(".item");
}

/* Toggle mobile menu */


function toggleMenu() {

    if (menu.classList.contains("active")) {

        menu.classList.remove("active");





        toggle.querySelector("a").innerHTML = '<i class="fas fa-bars"></i>';

    } else {

        menu.classList.add("active");





        toggle.querySelector("a").innerHTML = '<i class="fas fa-times"></i>';

    }

}


/* Event Listener */
toggle = document.querySelector(".toggle");
console.log(toggle)
if (toggle) {
    toggle.addEventListener("click", toggleMenu, false);
    console.log("in")
}






/* Activate Submenu */

function toggleItem() {

    if (this.classList.contains("submenu-active")) {

        this.classList.remove("submenu-active");

    } else if (menu.querySelector(".submenu-active")) {

        menu.querySelector(".submenu-active").classList.remove("submenu-active");

        this.classList.add("submenu-active");

    } else {

        this.classList.add("submenu-active");

    }

}


/* Event Listeners */

for (let item of items) {

    if (item.querySelector(".submenu")) {

        item.addEventListener("click", toggleItem, false);

        item.addEventListener("keypress", toggleItem, false);

    }

}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
    menu = document.querySelector(".menu");

    if (menu.querySelector(".submenu-active")) {
        let isClickInside = menu
            .querySelector(".submenu-active")
            .contains(e.target);
        if (!isClickInside && menu.querySelector(".submenu-active")) {
            menu.querySelector(".submenu-active").classList.remove("submenu-active");
        }
    }


    //console.log(menu)
    toggle = document.querySelector(".toggle");
    //console.log(toggle)
    if (toggle) {
        toggle.addEventListener("click", toggleMenu, false);
        //console.log("in")
    }

}
/* Event listener */
document.addEventListener("click", closeSubmenu, false);