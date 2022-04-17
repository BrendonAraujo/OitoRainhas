function iniciar(){
    var receba,rainha;
    var posicao;
    var quant_rainhas = 1;

    while (quant_rainhas < 3){
        posicao = Math.floor(Math.random() * (64 - 1) + 1);
        receba = document.getElementById(posicao);
        if(!possuiuRainha(posicao)){
            marcaPosicao(posicao);
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

function marcaPosicao(id){

    var coluna = document.getElementById(id).parentNode;
    var diferencaDireita = 8 - coluna.getAttribute('value');
    var diferencaEsquerda = coluna.getAttribute('value') - 1;
    var celula;
    var i = coluna.getAttribute('firstElement');
    var colunaMarcada;

    // marca celulas na vertical
    while (parseInt(i) <= parseInt(coluna.getAttribute('lastElement'))){
        colunaMarcada = document.getElementById(i);
        colunaMarcada.style.border = "5px solid #fc0303";
        colunaMarcada.setAttribute('value',1);
        i++; 
    }

    i = 1;
    //marca celuas na horizontal
    while (i <= 8){
        if(i < coluna.getAttribute('value')){
            colunaMarcada = document.getElementById(id - (8*diferencaEsquerda));
            diferencaEsquerda = diferencaEsquerda - 1;
        }else{
            colunaMarcada = document.getElementById(id + (8*diferencaEsquerda));
            diferencaEsquerda = diferencaEsquerda + 1;
        }
        colunaMarcada.style.border = "5px solid #fc0303";
        colunaMarcada.setAttribute('value',1);
        i++;
    }

    // controla ajustes superiores
    if(id != coluna.getAttribute("firstElement")){
        i = 1;
        celula = 0;
        alterador = '';

        // marca células da direita superior da posicao
        while (i <= diferencaDireita){
            celula = (id + (8 * i)) - i;
            alterador = document.getElementById(celula);
            if(alterador.getAttribute("id") == alterador.parentNode.getAttribute("firstElement")){
                i = diferencaDireita;
            }
            alterador.style.border = "5px solid #fc0303";
            alterador.setAttribute('value',1);
            i++;
        }
        
        // limpa variáveis
        i = 1;
        celula = 0;
        alterador = ''; 

        // marca células da esquerda superior da posicao
        while (i < coluna.getAttribute('value')){
            celula = (id - (8 * i)) - i;
            alterador = document.getElementById(celula);
            if(alterador.getAttribute("id") == alterador.parentNode.getAttribute("firstElement")){
                i = coluna.getAttribute('value');
            }
            alterador.style.border = "5px solid #fc0303";
            alterador.setAttribute('value',1);
            i++;
        }
    }

    // controla ajustes inferiores
    if(id != coluna.getAttribute("lastElement")){
        // limpa variáveis
        i = 1;
        celula = 0;
        alterador = ''; 

        // marca células da direita inferior da posicao
        while (i <= diferencaDireita){
            celula = (id + (8 * i)) + i;
            alterador = document.getElementById(celula);
            if(alterador.getAttribute("id") == alterador.parentNode.getAttribute("lastElement")){
                i = diferencaDireita;
            }
            alterador.style.border = "5px solid #fc0303";
            alterador.setAttribute('value',1);
            i++;
        }

        // limpa variáveis
        i = 1;
        celula = 0;
        alterador = ''; 

         // marca células da esqueda inferior da posicao
        while (i < coluna.getAttribute('value')){
            celula = (id - (8 * i)) + i;
            alterador = document.getElementById(celula);
            if(alterador.getAttribute("id") == alterador.parentNode.getAttribute("lastElement")){
                i = coluna.getAttribute('value');
            }
            alterador.style.border = "5px solid #fc0303";
            alterador.setAttribute('value',1);
            i++;
        }
    }
}