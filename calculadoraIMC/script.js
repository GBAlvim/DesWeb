var resultado = document.querySelector('#resultado')
var altura = document.querySelector('#altura')
var peso = document.querySelector('#peso')

function calcIMC () {
    if (altura.value != '' && peso.value != '' ){
        var imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        var classification = ''

        if (imc < 18.5) {
            classification = 'Abaixo do peso'
        } else if (imc < 25) {
            classification = 'Peso normal'
        } else if (imc < 30) {
            classification = 'Acima do peso'
        } else if (imc < 35) {
            classification = 'Obesidade Grau I'
        } else if (imc < 41) {
            classification = 'Obesidade Grau II'
        } else {
            classification = 'Obesidade Grau III'
        }

        resultado.innerHTML = `IMC: ${imc} (${classification})`
      } else {
        resultado.innerHTML = 'Preencha os campos'
      }   
    }