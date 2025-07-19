const form = document.getElementById('form');
form.addEventListener('submit',handSubmit)

const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');
let valueConverted = 0;

function handSubmit(e) {
    e.preventDefault();
    
    if (!inputValue.value || inputValue.value < 0) {
        alert('informe um valor valido')
        return
    } else if (!selectedCurrency.value) {
        alert('escolha uma moeda')
        return
    }

    converter();
}

function converter() {
    if(selectedCurrency.value === "eur") {
        valueConverted = inputValue.value / 6.49;
        result.innerHTML = valueFormater('pt-BR', 'EUR');

        animatedResult()

    }else if (selectedCurrency.value === "dol") {
        valueConverted = inputValue.value / 5.58;
        result.innerHTML = valueFormater('en-US', 'USD');

        animatedResult()
    }

    inputValue.value = '';
    selectedCurrency.value = '';
}

function valueFormater(locale, currency) {
    const value = valueConverted.toLocaleString(`${locale}`, {style: 'currency', currency: `${currency}`});
    return `<span>💵</span> ${value} <span>💵</span> `;
}

function animatedResult(){
    return result.animate([
        {transform:'translateY(-150px)' },
        {transform:'translateY(0px)' }
    ], {duration:500})
};  
