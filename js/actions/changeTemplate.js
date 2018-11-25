import setTemplate from './setTemplate.js';

const changeTemplate = (button, template) => {
  document.querySelector(button).addEventListener('click', () => {
    setTemplate(template);
  })
};

export default changeTemplate;
