const menu = document.getElementById('menu');
const popup = document.getElementById('popup');

menu.addEventListener('click', () => {
  popup.classList.toggle('hide');
  setTimeout(() => {
      popup.classList.toggle('popupclosed');
 },10);
  if (!popup.classList.contains('hide')) {
    menu.classList.add('menulight')
  } else {
    menu.classList.remove('menulight')
  }
  
})