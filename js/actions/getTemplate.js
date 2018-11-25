const getTemplate = (template, name) => {
  const element = document.createElement(`section`);
  element.className = name;
  element.innerHTML = template;
  return element;
};


export default getTemplate;
