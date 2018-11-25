import settemplate from './settemplate.js';

const changeTemplate = (button, template) => {
  document.querySelector(button).addEventListener('click', () => {
    settemplate(template);
  })
};

export default changeTemplate;
