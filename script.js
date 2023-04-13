const range = document.querySelector('.rangeCalculadora');
const dinheiroInvestido = document.querySelector('.valorinvestido')
const retorno = document.querySelector('.retorno')
// função que faz o range mudar o text
var rangeValue = function () {
    var newValue = range.value;

    dinheiroInvestido.value = newValue;
    retorno.innerHTML = parseInt(dinheiroInvestido.value * 1.10)
}

range.addEventListener("input", rangeValue);

// função que faz o text mudar o range 
var textValue = function () {
    var newValue = dinheiroInvestido.value
    range.value = newValue
    retorno.innerHTML = parseInt(newValue*1.10)
}

dinheiroInvestido.addEventListener("input", textValue);

