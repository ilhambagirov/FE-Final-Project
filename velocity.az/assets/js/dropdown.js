let menubtn=document.querySelector('.togglebtn')
let menu=document.querySelector('.dropdownmenu')
let closebtn=document.querySelector('.close')
menubtn.addEventListener('click',e=>{
  menu.classList.add('dropdownmenu-toggle')
})

closebtn.addEventListener('click',e=>{
  menu.classList.remove('dropdownmenu-toggle')
})