const hambuger = document.querySelector('.hamburger')
const menuList = document.querySelector('.menu')

hambuger.addEventListener('click', () =>{
    hambuger.classList.toggle('change')
    menuList.classList.toggle('visible')

})