
var animateButton = function(e) {
    e.preventDefault;
    //resetar animação
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function(){
        e.target.classList.remove('animate');
    },700);
};

var bubblyButtons = document.getElementsByClassName("btn-fazer-pedido");

for(var i = 0; i < bubblyButtons.length; i++){
    bubblyButtons[i].addEventListener('click', animateButton, false);
}


let pizza
let bebida
let sobremesas

/*pizzas*/
function escolherPeperone(){
    document.getElementById("peperone").style.borderColor = "green",
    document.getElementById("marguerita").style.borderColor = "white";
    document.getElementById("portuguesa").style.borderColor = "white";
    document.getElementById("calabresa").style.borderColor = "white";
    pizza = "peperone"; 
}

function escolherMarguerita(){
    document.getElementById("marguerita").style.borderColor = "green";
    document.getElementById("peperone").style.borderColor = "white";
    document.getElementById("portuguesa").style.borderColor = "white";
    document.getElementById("calabresa").style.borderColor = "white";
    pizza = "marguerita";
}

function escolherPortuguesa(){
    document.getElementById("portuguesa").style.borderColor = "green";
    document.getElementById("peperone").style.borderColor = "white";
    document.getElementById("marguerita").style.borderColor = "white";
    document.getElementById("calabresa").style.borderColor = "white";
    pizza = "portuguesa";
}

function escolherCalabresa(){
    document.getElementById("calabresa").style.borderColor = "green";
    document.getElementById("peperone").style.borderColor = "white";
    document.getElementById("marguerita").style.borderColor = "white";
    document.getElementById("portuguesa").style.borderColor = "white";
    pizza = "calabresa";
}


/*bebidas*/
function escolherCoca(){
    document.getElementById("coca-cola").style.borderColor = "green"
    document.getElementById("pepsi").style.borderColor = "white"
    document.getElementById("fanta").style.borderColor = "white"
    document.getElementById("guarana").style.borderColor = "white"
    bebida = "coca"
}
function escolherPepsi(){
    document.getElementById("pepsi").style.borderColor = "green"
    document.getElementById("coca-cola").style.borderColor = "white"
    document.getElementById("fanta").style.borderColor = "white"
    document.getElementById("guarana").style.borderColor = "white"
    bebida = "pepsi"
}
function escolherFanta(){
    document.getElementById("fanta").style.borderColor = "green"
    document.getElementById("coca-cola").style.borderColor = "white"
    document.getElementById("pepsi").style.borderColor = "white"
    document.getElementById("guarana").style.borderColor = "white"
    bebida = "fanta"
}
function escolherGuarana(){
    document.getElementById("guarana").style.borderColor = "green"
    document.getElementById("coca-cola").style.borderColor = "white"
    document.getElementById("pepsi").style.borderColor = "white"
    document.getElementById("fanta").style.borderColor = "white"
    bebida = "guaraná"
}

/*sobremesas*/
function escolherPudim(){
    document.getElementById("pudim").style.borderColor = "green"
    document.getElementById("cocada").style.borderColor = "white"
    document.getElementById("bolo-cenoura").style.borderColor = "white"
    document.getElementById("sagu").style.borderColor = "white"
    sobremesas = "pudim"
}
function escolherCocada(){
    document.getElementById("cocada").style.borderColor = "green"
    document.getElementById("pudim").style.borderColor = "white"
    document.getElementById("bolo-cenoura").style.borderColor = "white"
    document.getElementById("sagu").style.borderColor = "white"
    sobremesas = "cocada"
}
function escolherBoloDeCenoura(){
    document.getElementById("bolo-cenoura").style.borderColor = "green"
    document.getElementById("pudim").style.borderColor = "white"
    document.getElementById("cocada").style.borderColor = "white"
    document.getElementById("sagu").style.borderColor = "white"
    sobremesas = "bolo de cenoura"
}
function escolherSagu(){
    document.getElementById("sagu").style.borderColor = "green"
    document.getElementById("pudim").style.borderColor = "white"
    document.getElementById("cocada").style.borderColor = "white"
    document.getElementById("bolo-cenoura").style.borderColor = "white"
    sobremesas = "sagu"
}


function fazerPedido(){
    let mensagem;
    
    mensagem = "Olá, eu gostaria de pedir uma pizza " + pizza + ", " + bebida + " e " + sobremesas;

    window.open("https://wa.me/5514999999999?text="+mensagem)
}
