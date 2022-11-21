const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach((sound) => {
 const btn = document.createElement('button');
 btn.classList.add('btn');
 btn.innerText = sound;
 btn.addEventListener('click', () => {
  stopAll();
  document.getElementById(sound).play();
 });
 document.getElementById('buttons').appendChild(btn);
});

function stopAll() {
 sounds.forEach((sound) => {
  const current_sound = document.getElementById(sound);
  current_sound.pause();
  current_sound.currentTime = 0;
 });
}
