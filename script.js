//Menu Hamburguesa (index.html)
const menu = document.getElementById("menuPhone");
const menuContainer = document.querySelector(".header__nav");
menu.addEventListener("click", () => {
    menuContainer.classList.toggle("header__nav--visualize");
})

//Diseño 994px tabla herramientas (index.html)
const buttonHerramientas = document.getElementById("btnHerramientas");

if (buttonHerramientas != null) {
    const sectionInfo = document.querySelector(".section__info--h3");
    const columnTable = document.querySelectorAll("td");
    console.log(columnTable);
    buttonHerramientas.addEventListener("click", () => {
    sectionInfo.classList.toggle("section__info--containervalue");
    for (const columna of columnTable) {
        columna.classList.toggle("section__info--tablevalue");
    }
    })
}

