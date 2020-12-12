let imput = document.querySelector('#newsInputEmail');
let button = document.querySelector('.news__button');

button.addEventListener('click',function(event){ 
event.preventDefault() 
    
let emailValue = imput.value 

let feedback = document.createElement('p'); 
feedback.style.color = 'green' 

let messageFeedback = document.createTextNode(`Olá, seu email ${emailValue} foi cadastrado com sucesso! Logo entraremos em contato com você. Obrigada!)`); 

feedback.appendChild(messageFeedback); 

let userMessage = document.querySelector('.mensagem');
userMessage.appendChild(feedback);

let colorTitle = document.querySelector('.news__title');
colorTitle.classList.add('news__title__novo'); 

});