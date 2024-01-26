document.addEventListener('DOMContentLoaded', () => {
    const numeros = document.querySelector('.numero');
    const conte = document.querySelector('.contar');
    const somar = document.querySelector('.somar');
    const diminuir = document.querySelector('.tirar');
    const multiplica = document.querySelector('.multiplicar');
    const divide = document.querySelector('.dividir');
    const apaga = document.querySelector('.apagar');

    let arrN = [];

    function valor() {
        const numero = parseInt(numeros.value); 
        arrN.push(numero);
        impNumb7();
    }

    function impNumb7(){
        for(let i= 0; i<arrN.length; i++){
            console.log(arrN[0])
        }
    }

    numeros.addEventListener('click', valor); 

});