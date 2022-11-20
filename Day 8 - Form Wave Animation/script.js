const labels = document.querySelectorAll('.form-control  label');

labels.forEach((label) => {
 label.innerHTML = label.innerText
  .split('')
  .map(
   (later, id) => `<span style="transition-delay:${id * 50}ms">${later}</span>`
  )
  .join('');
});
