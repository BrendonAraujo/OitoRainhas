function iniciar(){
    var receba,rainha;
    var posicao;
    var quant_rainhas = 1;

    while (quant_rainhas < 9){
        posicao = Math.floor(Math.random() * (64 - 1) + 1);
        receba = document.getElementById(posicao);
        if(!possuiuRainha(posicao)){
            rainha = document.getElementById('r'+quant_rainhas);
            receba.insertAdjacentElement("beforeend",rainha);
            receba.setAttribute('value',1);
            quant_rainhas = quant_rainhas + 1;
        }
        
    } 
    
}

function possuiuRainha(atualPosition){
    var retorno = false;
    var posicao = document.getElementById(atualPosition);

    if(posicao.childElementCount > 0){
        retorno = true;
    }
    return retorno;
}