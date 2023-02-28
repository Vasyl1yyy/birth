const btn = document.querySelector('.btn');
const p = document.querySelector('.p');

const rip = () => {
  p.innerHTML += 'Оля з днем народження!!!   '
}

btn.onclick = () => {
  setInterval(() => (rip()),100)
}