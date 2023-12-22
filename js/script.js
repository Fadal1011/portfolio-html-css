let dashboard = document.querySelector('.dasboard')
let buttonBars = document.querySelector('.openMenu')
let section = document.querySelector('.section')
let profil = document.querySelector('.profil')


buttonBars.addEventListener('click',()=>{
    if (dashboard.classList.contains('closeMenu')) {
        dashboard.classList.remove('closeMenu');
        section.classList.remove('active')
      } else {
        dashboard.classList.add('closeMenu');
        section.classList.add('active')
      }
})