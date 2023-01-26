const form = document.querySelector('.login-form');
const campos = document.querySelectorAll('.campos')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    ValidForm()
    printMsg()
})

function setErro(index){
    campos[index].style.border = '2px solid red';
    boxMsg.style.display = 'flex';
    msg.style.color = 'red'
    msg.innerHTML = 'Preencha os campos <br>em branco'
    borderBottom.style.backgroundColor = "red"
}

function setSucess(index){
    campos[index].style.border = '2px solid green';
    boxMsg.style.display = 'flex';
    msg.style.color = 'green'
    msg.innerHTML = 'Login efetuado com sucesso!'
    borderBottom.style.backgroundColor = "green"
}

function removeErro(index){
    campos[index].style = '';
}

//
const characterEmail = /^[a-zA-Z0-9.#$%&-]+@[a-zA-Z0-9.]+\.[a-zA-Z]/;
const borderBottom = document.querySelector('.borderBottom')
const boxMsg = document.querySelector('.box-msg');
let msg = document.getElementById('msg');
let campoEmail = campos[0];
let campoPassword = campos[1];

function ValidForm(){
    if(!characterEmail.test(campoEmail.value) ? setErro(0) : setSucess(0));
    if(campoPassword.value.length < 8 ? setErro(1) : setSucess(1));
}

function printMsg(){    
    let box = setTimeout(() => {
        if(campoEmail.value === '' || campoPassword.value === '')
            setErro(0),setErro(1)
    })
    setTimeout(() => {
        boxMsg.style.display = 'none';
        if(campoEmail.style.border === '2px solid red' || campoPassword.style.border === '2px solid red')
            removeErro(0),removeErro(1)
        clearTimeout(box);
    }, 5000);
}