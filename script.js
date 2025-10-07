const button = document.querySelector(".btn-branco.teste");
const headerAtivo = document.querySelector("header");
const navMobile = document.querySelector(".mobile");

button.addEventListener("click", handleClick);

function handleClick(event) {
  console.log(event.target);
  headerAtivo.classList.toggle("ativo");
  navMobile.classList.toggle("ativo");
}

const sections = document.querySelectorAll("section");
let ticking = false;

function initAnimationOpacity() {
  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    const metade = window.innerHeight * 0.8;
    if (top < metade) {
      section.classList.add("ativo");
    } else {
      section.classList.remove("ativo");
    }
  });
  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(initAnimationOpacity);
    ticking = true;
  }
});

initAnimationOpacity();
