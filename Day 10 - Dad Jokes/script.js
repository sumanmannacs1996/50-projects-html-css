const jokeEl = document.getElementById('joke');
const jokeBtn = document.querySelector('.btn');

const getJoke = async () => {
 const config = {
  headers: {
   Accept: 'application/json',
  },
 };
 try {
  const res = await fetch('https://icanhazdadjoke.com', config);
  const data = await res.json();
  jokeEl.innerText = data.joke;
 } catch (error) {
  jokeEl.innerText = 'Sorry not able to fetch new jokes :(';
 }
};

getJoke();

jokeBtn.addEventListener('click', getJoke);
