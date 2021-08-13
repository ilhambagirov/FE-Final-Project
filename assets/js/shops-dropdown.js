let shopdropclick=document.querySelector('.shops-dropdown');
let beopendropdown=document.querySelector('.dropdown-categories');
let closeshops=document.querySelector('.closeshops');

shopdropclick.addEventListener('click',e=>{
    beopendropdown.classList.add('shopsactive')
    console.log('girdi')
})
closeshops.addEventListener('click',e=>{
    beopendropdown.classList.remove('shopsactive')
})