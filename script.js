const button = document.querySelector(".btn-branco.teste");
const headerAtivo = document.querySelector("header");
const navMobile = document.querySelector(".mobile");

button.addEventListener("click", handleClick);

function handleClick(event) {
  console.log(event.target);
  headerAtivo.classList.toggle("ativo");
  navMobile.classList.toggle("ativo");
}
