'use strict';
let app = {
  currentTemplate: 0,
  templates: document.querySelectorAll(`template`),
  main: document.querySelector(`.main`),
  buttons: `<div class="arrows__wrap">
    <style>
      .arrows__wrap {
        position: absolute;
        top: 135px;
        left: 50%;
        margin-left: -56px;
      }
      .arrows__btn {
        background: none;
        border: 2px solid #fff;
        color: #fff;
        padding: 5px 20px;
      }
    </style>
    <button class="arrows__btn btn-prev"><-</button>
    <button class="arrows__btn btn-next">-></button>
</div>`,
  init: function () {
    this.main.appendChild(this.templates[0].content.cloneNode(true));
    this.main.innerHTML += this.buttons;

  },
  next: function () {
    if (this.currentTemplate < this.templates.length - 1) {
      [].forEach.call(this.main.childNodes, function(elem) {
        if ( elem.tagName === 'SECTION') {
          elem.remove();
        }
      });
      this.main.insertBefore(this.templates[this.currentTemplate + 1].content.cloneNode(true), this.main.lastElementChild);
      this.currentTemplate += 1;
    }
  },
  prev: function () {
    if (this.currentTemplate > 0) {
      [].forEach.call(this.main.childNodes, function(elem) {
        if ( elem.tagName === 'SECTION') {
          elem.remove();
        }
      });
      this.main.insertBefore(this.templates[this.currentTemplate - 1].content.cloneNode(true), this.main.lastElementChild);
      this.currentTemplate -= 1;
    }
  }
};
app.init();
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    app.prev();
  }
  if (e.key === 'ArrowRight') {
    app.next();
  }
});
document.querySelector('.btn-prev').addEventListener('click', function () {
  app.prev();
});
document.querySelector('.btn-next').addEventListener('click', function () {
  app.next();
});







