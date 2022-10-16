listNav = document.querySelector('.nav__list')
buttonMenu = document.querySelector('.button-menu');




buttonMenu.addEventListener('click', () =>{
  if(buttonMenu.classList.contains('button-menu--open')){
    listNav.style.display = 'block';
    buttonMenu.classList.add('button-menu--close')
    buttonMenu.classList.remove('button-menu--open');
  }
  else{
    listNav.style.display = 'none';
    buttonMenu.classList.remove('button-menu--close')
    buttonMenu.classList.add('button-menu--open');
  }
})


