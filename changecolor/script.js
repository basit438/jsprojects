let buttons = document.querySelectorAll('button');
let body = document.querySelector('body');

buttons.forEach(function(button){
    button.addEventListener('click', function(){
        if(button.innerText === "Red"){
            body.style.backgroundColor= 'red';
        } else if(button.innerText==="Blue"){
            body.style.backgroundColor = 'Blue';
        } else if(button.innerText ==='Green'){
            body.style.backgroundColor ='Green';
        } else if(button.innerText ==="Purple"){
            body.style.backgroundColor ="purple";
        }
    })
})