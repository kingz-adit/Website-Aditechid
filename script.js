const navBarIcon = document.getElementById("NavBar-Icon");
const navBarMenu = document.getElementById("NavBar-Menu");

navBarIcon.addEventListener("click", () => {
    navBarMenu.classList.toggle("hidden");
});