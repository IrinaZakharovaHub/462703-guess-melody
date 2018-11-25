import welcome from '../screens/welcome.js';
import settemplate from './settemplate';

function setwelcome(el) {
  el.querySelector('.game__back').addEventListener(`click`, () => {
    settemplate(welcome);
  });
}

export default setwelcome;




