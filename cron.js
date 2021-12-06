"use strict"

/*==================== LOADING ANIMATION ====================*/
function load (){
    document.getElementById("loading").style.display = "none";
    document.getElementById("conteudo").style.display = "inherit";
}

window.onload = (function () { window.setInterval('load()',2000);})

// capturar valor da sessao
var form = document.getElementById('form');
form.addEventListener('submit', function(e){
    let valorValue = document.getElementById('valorValue').value;
    document.getElementById('valorHora').innerHTML= valorValue;
    e.preventDefault();

    let iniciarBotao = document.getElementById('iniciarBotao')
    iniciarBotao.disabled = false
    iniciarBotao.title = 'Iniciar'
    iniciarBotao.classList.add('bg-green');
    iniciarBotao.classList.remove('disabled');

})

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;//Quantos milésimos valem 1 segundo?
var cron;

//Inicia o temporizador
function start() {
    cron = setInterval(() => { timer(); }, tempo);
}

//Para o temporizador mas não limpa as variáveis
function pause() {
    clearInterval(cron);
}

//Para o temporizador e limpa as variáveis
function stop() {
    let valorPorHora = valorValue.value;
    
    const valorHora = valorPorHora * hh;
    const valorMinuto = ((valorPorHora / 60) * mm);
    const valorSegundos = (((valorPorHora / 60) / 60) * ss)
    console.log(valorSegundos)

    let valorTotal = (valorHora + valorMinuto + valorSegundos).toFixed(2);
    document.getElementById('valorTotal').innerHTML = valorTotal

    document.getElementById('tempoConsulta').innerHTML = hh + 'h ' + mm + 'min ' + ss + 'seg';
    
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;    

    document.getElementById('counter').innerText = '00:00:00';
}

//Faz a contagem do tempo e exibição
function timer() {
    ss++; //Incrementa +1 na variável ss

    if (ss == 60) { //Verifica se deu 59 segundos
        ss = 0; //Volta os segundos para 0
        mm++; //Adiciona +1 na variável mm
        

        if (mm == 60) { //Verifica se deu 59 minutos
            mm = 0;//Volta os minutos para 0
            hh++;//Adiciona +1 na variável hora
        }
        
    }

    //Cria uma variável com o valor tratado HH:MM:SS
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    
    //Insere o valor tratado no elemento counter
    document.getElementById('counter').innerText = format;

    //Retorna o valor tratado
    return format;
};



