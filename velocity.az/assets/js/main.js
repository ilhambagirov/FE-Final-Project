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


///slider dots

$( function() {
  
    var $mainslider = $('.gallery').flickity({
      pageDots: true
    });
  
    var flickity = $mainslider.data('flickity');
    
    var $galleryNav = $('.flickity-page-dots');
    var $galleryNavItems = $galleryNav.find('.flickity-page-dots .dot');
    
    $mainslider.on( 'select.flickity', function() {
      $galleryNav.find('.is-selected').removeClass('is-selected');
      $galleryNavItems.eq( flickity.selectedIndex ).addClass('is-selected');
    });
  });

  //calculator slider
 

(function range(){
  
  let rangevalues=document.querySelectorAll('#rangevalue')
  let rangesliders=document.querySelectorAll('#rangeslider')
  rangesliders.forEach(rangeslider=>{
      rangeslider.addEventListener("input", function(e) {
        rangevalues.forEach(rangevalue=>{
        if (rangeslider.getAttribute('data-source')===rangevalue.getAttribute('data-target')) {
          rangevalue.value = rangeslider.value;
        }
      });
    })
   
  })
})()


//checkbox checker

let service=document.querySelector('.services')
let labels=service.querySelectorAll('label')
let inputs=service.querySelectorAll('input')
let ticks=service.querySelectorAll('.tickcustom')
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

//calculator
let calculate=document.querySelector('.customOperate')
calculate.addEventListener('click',e=>{
  calc()
})
function calc(){
let a=Number(document.querySelector('input[data-target=en]').value)
let b=Number(document.querySelector('input[data-target=height]').value)
let c=Number(document.querySelector('input[data-target=width]').value)
let d=Number(document.querySelector('input[data-target=kg]').value)
let dollar=document.querySelector('#calc-total')
let manat=document.querySelector('.manat')
let total=(a+b+c+d)/2
dollar.innerText=total
manat.innerText=total*1.7

}






  