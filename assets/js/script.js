const form = document.querySelector('.login-form');
const campo = document.querySelectorAll('.requered')
const characterEmail = /^[a-zA-Z0-9.#$%&-]+@[a-zA-Z0-9.]+\.[a-zA-Z]/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    emailValidForm()
    passwordValidForm()
})


function setErro(index){
    campo[index].style.border = '2px solid red';
}

function removeErro(index){
    campo[index].style.border = '2px solid green';
}

function emailValidForm(){
    if(!characterEmail.test(campo[0].value)){
        setErro(0)
    }else{
        removeErro(0)
    }
}

function passwordValidForm(){

    if(campo[1].value.length < 8){
        setErro(1)
    }else{
        removeErro(1)
    }
}