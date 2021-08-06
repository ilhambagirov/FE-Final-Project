let currentLang=document.querySelector('.header__top__inner__right__selection__default')
let selectedLang=document.querySelector('.selected')
let currentspan=document.querySelector('.current')
let currentList=document.querySelector('.list')
let otherLangs=document.querySelectorAll('.list__item')
currentLang.addEventListener('click', (e)=>{
    currentList.classList.toggle('opacity')
    currentLang.classList.toggle('clicked')
})

otherLangs.forEach(otherlang=>{
    otherlang.addEventListener('click',e=>{
        currentspan.innerText=e.target.innerText
    })
})