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
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') {
        app.changeSlide(-1);
      }
      if (e.key === 'ArrowRight') {
        app.changeSlide(1);
      }
    });
    document.querySelector('.btn-prev').addEventListener('click', function () {
      app.changeSlide(-1);
    });
    document.querySelector('.btn-next').addEventListener('click', function () {
      app.changeSlide(1);
    });

  },
  changeSlide: function (x) {
    if (this.currentTemplate < this.templates.length - 1 && x > 0 || this.currentTemplate > 0 && x < 0) {
      [...this.main.childNodes].forEach(function(elem) {
        if ( elem.tagName === 'SECTION') {
          elem.remove();
        }
      });
      this.main.insertBefore(this.templates[this.currentTemplate + x].content.cloneNode(true), this.main.lastElementChild);
      this.currentTemplate += x;
    }
  }
};
app.init();







