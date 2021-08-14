let inputboxes=document.querySelectorAll('input')
let labells=document.querySelectorAll('label')
inputboxes.forEach(input=>{
    input.addEventListener('change',e=>{
        labells.forEach(label=>{
            if (input.getAttribute('data-target') == label.getAttribute('data-source')) {
                if (input.value && input.type!== 'checkbox') {
                    if (input.type ==='password') {
                        if (input.value) {
                        label.classList.remove('passlabel')
                        label.classList.add('toplabel')
                        }
                        else{
                            label.classList.add('passlabel')
                            label.classList.remove('toplabel')
                        }
                    }
                    else{
                        label.classList.remove('emaillabel')
                        label.classList.add('toplabel')
                    }
                }else{
                    if (input.type !=='password') {
                        label.classList.add('emaillabel')
                        label.classList.remove('toplabel')
                    }
                    
                }
            }
        })
    })
})