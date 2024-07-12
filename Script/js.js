const MenuItens = document.getElementById("MenuItens");

MenuItens.style.maxHeight = '0px';

function MenuItem() {
  if (MenuItens.style.maxHeight == "0px") {
    MenuItens.style.maxHeight = "200px";
  } else {
    MenuItens.style.maxHeight = "0px";
  }
}
