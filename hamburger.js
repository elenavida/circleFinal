window.addEventListener("load", () => {
  const navElement = document.querySelector("nav");
  const hamburgerElement = document.querySelector("nav .button-hamburger");

  hamburgerElement.addEventListener("click", () => {
    navElement.classList.toggle("open");
    if (hamburgerElement.innerText === "menu") {
      hamburgerElement.innerText = "close";
    } else {
      hamburgerElement.innerText = "menu";
    }
  });
});
