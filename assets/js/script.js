const form = document.querySelector('.login-form');
const campos = document.querySelectorAll('.campos')
const characterEmail = /^[a-zA-Z0-9.#$%&-]+@[a-zA-Z0-9.]+\.[a-zA-Z]/;
const boxMsg = document.querySelector('.box-msg');
let msg = document.getElementById('msg');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    ValidForm()
    boxMensageRed()
})

function setErro(index){
    campos[index].style.border = '2px solid red';
}

function setSucess(index){
    campos[index].style.border = '2px solid green';
}

function removeErro(index){
    campos[index].style = '';
}

function ValidForm(){
    
    if(campos[1].value.length < 8){
        setErro(1)
    }else{
        setSucess(1)
        boxMensageGreen()
    }

    if(!characterEmail.test(campos[0].value)){
        setErro(0)
    }else{
        setSucess(0)
        boxMensageGreen()
    }
}


function boxMensageGreen(){
    let borderBottom = document.querySelector('.borderBottom')
    boxMsg.style.display = 'flex';
    msg.style.color = 'rgb(12, 249, 142)'
    msg.innerHTML = 'Login efetuado com sucesso!'
    borderBottom.style.backgroundColor = "rgba(12, 249, 142, 0.7"
}

function boxMensageRed(){
    let campoEmail = campos[0]
    let campoPassword = campos[1];
    
    let boxRed = setTimeout(() => {
        if(campoEmail.value === '' && campoPassword.value === ''){
            boxMsg.style.display = 'flex';
            msg.innerHTML = 'Preencha os campos <br>em branco'
            setErro(0)
            setErro(1)
        }
    })

    setTimeout(() => {
        boxMsg.style.display = 'none';
        if(campoEmail.style.border == '2px solid red' || campoPassword.style.border == '2px solid red'){
            removeErro(0)
            removeErro(1)
        }
        clearTimeout(boxRed);
    }, 5000);
}