const sunsets = document.querySelector('.sunsets');
const button = document.querySelector('.sunsets__btn');

button.addEventListener('click', addSunsets);

function addSunsets() {
  const url = 'http://localhost:3000/sunsets';
  fetch(url)
  .then(response => response.json())
  .then(data => sunsets.innerHTML = data)
  .catch(error => sunsets.innerHTML = error)
};