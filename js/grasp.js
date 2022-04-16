function iniciar(){
    var receba,rainha;
    
    var posicao_inicial = Math.floor(Math.random() * (64 - 1) + 1);

    receba = document.getElementById(posicao_inicial);
    rainha = document.getElementById('r'+1);
    receba.insertAdjacentElement("beforeend",rainha);
}

function nextPosition(atualPosition){

}