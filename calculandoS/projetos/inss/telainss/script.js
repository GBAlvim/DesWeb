function calcularINSS() {
    const salarioBruto = parseFloat(document.getElementById('salarioBruto').value);
    const dependentes = parseInt(document.getElementById('dependentes').value);
  
    const valorInss = calcularValorInss(salarioBruto);
    const valorIR = calcularValorIR(salarioBruto, dependentes);
    const salarioLiquido = salarioBruto - valorInss - valorIR;
  
    document.getElementById('valorInss').value = valorInss.toFixed(2);
    document.getElementById('valorIR').value = valorIR.toFixed(2);
    document.getElementById('salarioLiquido').value = salarioLiquido.toFixed(2);
  }
  
  function calcularValorInss(salarioBruto) {
    let inss = 0;
    if (salarioBruto <= 1045) {
      inss = salarioBruto * 0.075;
    } else if (salarioBruto <= 2089.60) {
      inss = salarioBruto * 0.09;
    } else if (salarioBruto <= 3134.40) {
      inss = salarioBruto * 0.12;
    } else if (salarioBruto <= 6101.06) {
      inss = salarioBruto * 0.14;
    } else {
      inss = 6101.06 * 0.14;
    }
    return inss;
  }
  
  function calcularValorIR(salarioBruto, dependentes) {
    const baseCalculo = salarioBruto - (dependentes * 189.59);
    let ir = 0;
    if (baseCalculo <= 1903.98) {
      ir = 0;
    } else if (baseCalculo <= 2826.65) {
      ir = (baseCalculo * 0.075) - 142.80;
    } else if (baseCalculo <= 3751.05) {
      ir = (baseCalculo * 0.15) - 354.80;
    } else if (baseCalculo <= 4664.68) {
      ir = (baseCalculo * 0.225) - 636.13;
    } else {
      ir = (baseCalculo * 0.275) - 869.36;
    }
    return ir;
  }
  