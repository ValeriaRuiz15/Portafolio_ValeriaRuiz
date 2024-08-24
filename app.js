// VARIABLES
const header_open = document.querySelector("#header_open");

const header_close = document.querySelector("#header_close");

const header_nav = document.querySelector("#header_nav");

//FUNCIONES

const showMenu = () =>{
    header_nav.classList.add("header_nav_visible");
}
const hideMenu = () =>{
    header_nav.classList.remove("header_nav_visible");
}

// EVENTOS 

header_open.addEventListener("click", showMenu)

header_close.addEventListener("click", hideMenu);

