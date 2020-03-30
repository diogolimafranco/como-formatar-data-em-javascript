const date = document.querySelector('#date');
const dateFormatted = document.querySelector('#dateFormatted');

function dateByString () {
  let formatted = date.innerText;
  return formatted.split('-').reverse().join('/');
}

function dateByLocale () {
  let options = {}
  // options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
  const date = new Date();
  return date.toLocaleDateString('pt-BR', options);
}

function dateManualFormatted () {
  let date = new Date();
  day = date.getDate().toString();
  day = day.length === 1 ? `0${day}` : day;
  month = (date.getMonth() + 1).toString();
  month = month.length === 1 ? `0${month}` : month;
  year = date.getFullYear().toString();
  return `${day}/${month}/${year}`;
}

dateFormatted.innerHTML = dateByLocale()