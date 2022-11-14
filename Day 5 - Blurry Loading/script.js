const bg = document.querySelector('.bg');
const loadingText = document.querySelector('.loading-text');

let load = 0;

const interval = setInterval(blurring, 40);

function blurring() {
 load++;
 if (load > 99) {
  clearInterval(interval);
 }
 loadingText.innerText = `${load}%`;
 loadingText.style.opacity = `${(100 - load) / 100}`;
 bg.style.filter = `blur(${80 - load}px)`;
}
