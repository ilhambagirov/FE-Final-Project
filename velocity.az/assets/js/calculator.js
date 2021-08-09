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