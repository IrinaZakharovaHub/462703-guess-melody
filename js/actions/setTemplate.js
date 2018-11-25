
const activeScreenElement = document.querySelector(`.main`);

const settemplate = (screen) => {
  activeScreenElement.innerHTML = ``;
  activeScreenElement.appendChild(screen);
};


export default settemplate;
