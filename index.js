let outSegundos = document.getElementById('outSegundos')
let outMinutos = document.getElementById('outMinutos')
let outHora = document.getElementById('outHora')

// Variaveis de inicio
let segundos = 0
let minutos = 0
let horas = 0
let temp = 1000;
let cronometro;

// botao iniciar habilitado no inicio
let btDesabled = document.getElementById('btIniciar').disabled = false

// funcao start 
function start() {
    // chamando a funcao timer com intervalo em ms definido na variavel temp    
    cronometro = setInterval(timer, temp)    
    // desabilitando o botao iniciar ao iniciar a contagem
    btDesabled = document.getElementById('btIniciar').disabled = true
}
let btIniciar = document.getElementById('btIniciar');
btIniciar.addEventListener('click', start);

// funcao pausar
function pausar() {
    clearInterval(cronometro)
    // habilita o botao iniciar ao chamar a funcao
    btDesabled = document.getElementById('btIniciar').disabled = false
}
let btPausar = document.getElementById('btPausar');
btPausar.addEventListener('click', pausar);

// zerando a contagem 
function zerarCronometro() {
    clearInterval(cronometro);
    // voltando as variaveis ao estado inicial
    segundos = 0
    minutos = 0
    horas = 0

    btDesabled = document.getElementById('btIniciar').disabled = false

    outSegundos.textContent = '--'
    outMinutos.textContent = '--';
    outHora.textContent = '--'
    
}
let btZerar = document.getElementById('btZerar');
btZerar.addEventListener('click', zerarCronometro);



// funcao principal 
function timer() {                
    // se segundos igual a 60 volta para 0 e reinicia 
    if(segundos === 60) {
        segundos = 0
        minutos++
        if(minutos === 60) {
            minutos = 0
            horas++
            if(horas === 24) {
                horas = 0
            }
        }
    }        
    

    // inserindo um zero no inicio do contador se segundos, minutos e horas
    outSegundos.textContent = segundos < 10 ? '0' + segundos++ : segundos++
    outMinutos.textContent = minutos < 10 ? '0' + minutos : minutos;
    outHora.textContent = horas < 10 ? '0' + horas : horas;
}
