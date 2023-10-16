'use strict';

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');
      // btn = document.querySelector('button');

// btn.onclick = function() {
//   alert('Click');
// };

// btn.onclick = function() {
//   alert('Second click');
// };

let i = 0;
const deleteElement = (e) => {
  console.log(e.currentTarget);
  console.log(e.type);
  // i++;
  // if (i == 1) {
  //   btn.removeEventListener('click', deleteElement);
  // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
  btn.addEventListener('click', deleteElement, {once: true});
});

// btn.addEventListener('click', (e) => {
//   console.log(e.target);
//   e.target.remove();
//   // console.log('Hover');
// });

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
  e.preventDefault();

  console.log(e.target);
})