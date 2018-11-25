
const activeScreenElement = document.querySelector(`.main`);

const setTemplate = (screen) => {
  activeScreenElement.innerHTML = ``;
  activeScreenElement.appendChild(screen);
};


export default setTemplate;
