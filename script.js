/*
document.addEventListener('DOMContentLoaded', () => {
    const numeros = document.querySelector('.numero');
    const conte = document.querySelector('.contar');
    const somar = document.querySelector('.somar');
    const diminuir = document.querySelector('.tirar');
    const multiplica = document.querySelector('.multiplicar');
    const divide = document.querySelector('.dividir');
    const apaga = document.querySelector('.apagar');
    const imprime = document.querySelector('.box');

    let arrN = [];

    //está função conta o valor de 7 
    function Numb7(){
        for(let i= 0; i<arrN.length; i++){
            imprime.textContent = Numb7;
            console.log(arrN[i])
        };
        
    };

    // a função abaixo capitura o meu valor de 7
    function valor() {
        const numero = parseInt(numeros.value); 
        arrN.push(numero);
        Numb7();
    };

    window.onload = Numb7;
    numeros.addEventListener('click', valor); 
});
*/

function insert (num){
    document.getElementById('box').innerHTML = num;
     
};

function elimine(close){
   
}