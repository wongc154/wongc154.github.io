const menu=document.querySelector('#mobilemenu')
const menulinks=document.querySelector('.navmenu')

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active')
    menulinks.classList.toggle('active')
})
menulinks.addEventListener("click", function(event){
    menu.classList.toggle('is-active')
    menulinks.classList.toggle('active')
})