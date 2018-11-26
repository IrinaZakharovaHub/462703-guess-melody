import getTemplate from '../actions/get-template.js';
import setTemplate from "../actions/set-template";
import welcome from './welcome.js';

const fail = getTemplate(` <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Увы и ах!</h2>
    <p class="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>
    <button class="result__replay" type="button">Попробовать ещё раз</button>`, `result`);


const button = fail.querySelector(`.result__replay`);
button.addEventListener('click', () => {
  setTemplate(welcome);
});

export default fail;
