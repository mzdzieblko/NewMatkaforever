const headerSwitcher = document.querySelector(".header__switcher--js");

headerSwitcher.addEventListener("click", (e) => {
  const headerMenu = document.querySelector(".header_menu--js");
  headerMenu.classList.toggle("header_menu--visible");
});
