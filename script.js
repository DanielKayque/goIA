const button = document.querySelector('.btn-branco.teste');
const headerAtivo = document.querySelector('header');
const navMobile = document.querySelector('.mobile');

button.addEventListener('click', handleClick);

function handleClick(event) {
  console.log(event.target);
  headerAtivo.classList.toggle('ativo');
  navMobile.classList.toggle('ativo');
}

const sections = document.querySelectorAll('section');
let ticking = false;

function initAnimationOpacity() {
  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    const metade = window.innerHeight * 0.5;
    if (top < metade) {
      section.classList.add('ativo');
    } else {
      section.classList.remove('ativo');
    }
  });
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(initAnimationOpacity);
    ticking = true;
  }
});

initAnimationOpacity();

const perguntas = document.querySelectorAll('.pergunta-header');

function accordionMenu(event) {
  const headerClicado = event.currentTarget;
  const resposta = headerClicado.nextElementSibling;
  resposta.classList.toggle('ativo');
  const imgSeta = headerClicado.querySelector('.imgSeta');
  imgSeta.classList.toggle('virada', resposta.classList.contains('ativo'));
}

perguntas.forEach((pergunta) =>
  pergunta.addEventListener('click', accordionMenu),
);
