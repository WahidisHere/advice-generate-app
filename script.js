'strict mode';
/* Selecting of all variables */
const adviceEl = document.getElementById('advice');
const adviceID = document.getElementById('advice-id');
const newAdviceBtn = document.getElementById('reload-advice-button');
const patternDivider = document.getElementById('img-pattern-divider');

/* Functions */

const fetchAdvice = async function () {
  const data = await fetch(`https://api.adviceslip.com/advice`);
  const res = await data.json();

  showAdvice(res.slip);
};

const showAdvice = function (advice) {
  adviceID.innerText = `Advice #${advice.id}`;
  adviceEl.innerText = `"${advice.advice}"`;
};

fetchAdvice();

const limitWidth = function () {
  if (window.innerWidth < 700) {
    patternDivider.src = `images/pattern-divider-mobile.svg`;
  } else {
    patternDivider.src = `images/pattern-divider-desktop.svg`;
  }
};
/* Event Listener */
newAdviceBtn.addEventListener('click', fetchAdvice);
window.addEventListener('resize', limitWidth);
