let calculate=document.querySelector('.customOperate')
let checkpackages=document.getElementById('service-1')
let refund=document.getElementById('service-2')
let checkpackageswithorder=document.getElementById('service-3')
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

if (checkpackages!==null && refund!==null && checkpackageswithorder!==null)  {
  if (checkpackages.classList.contains('checkboxback')) {
    total+=2;
  }
  if (refund.classList.contains('checkboxback')) {
    total+=4;
  }
  if (checkpackageswithorder.classList.contains('checkboxback')) {
    total+=1;
  }
}else{
  dollar.innerText=total
  manat.innerText=total*1.7
  return;
}

dollar.innerText=total
manat.innerText=total*1.7

}


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