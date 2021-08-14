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


//checkbox checker
let labels=document.querySelectorAll('label')
let inputs=document.querySelectorAll('input')
let ticks=document.querySelectorAll('.tickcustom')
   inputs.forEach(input=>{
    input.addEventListener('click',e=>{
      ticks.forEach(tick=>{
      if (tick.getAttribute('data-source')===input.getAttribute('data-target')) {
         input.classList.toggle('checkboxback')
         tick.classList.toggle('tickactive')
      }
})
  })
})


//chat popup

let chat=document.querySelector('.popup-chat')
let closechat=document.querySelector('.close-chat-x')

let openchat=document.querySelector('.chat')

openchat.onclick=function(){
  chat.classList.toggle('activechat')
}

closechat.onclick=function(){
  chat.classList.remove('activechat')
}




  