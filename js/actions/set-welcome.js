import welcome from '../screens/welcome.js';
import setTemplate from './set-template';

function setWelcome(el) {
  el.querySelector(`.game__back`).addEventListener(`click`, () => {
    setTemplate(welcome);
  });
}

export default setWelcome;


