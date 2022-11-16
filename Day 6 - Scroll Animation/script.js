const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', showAnimation);

showAnimation();

function showAnimation() {
 let trigerPoint = (window.innerHeight / 4.5) * 3;
 boxes.forEach((box) => {
  if (box.getBoundingClientRect().top < trigerPoint) {
   box.classList.add('show');
  } else {
   box.classList.remove('show');
  }
 });
}
