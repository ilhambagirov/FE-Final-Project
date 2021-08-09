let flips=document.querySelectorAll('#flip')
console.log(flips)
let panels=Array.from(document.querySelectorAll('.panel'))
flips.forEach(flip=>{
    flip.addEventListener('click',e=>{
        panels.forEach(panel=>{
            if (flip.getAttribute('data-target')===panel.getAttribute('data-source')) {
               panel.classList.toggle('active')
            }
        })
    })
})