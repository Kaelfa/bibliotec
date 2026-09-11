const menu = document.getElementById("menu");
const navMenu = document.getElementById("nav");

menu.addEventListener("click", function() {
    navMenu.className = navMenu.className == "navegacao" ? "navegacao ativo" : "navegacao";
})