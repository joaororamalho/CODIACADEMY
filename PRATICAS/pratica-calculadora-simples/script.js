function calcular(operador) {
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    let resultado;

    if (operador === '+') {
        resultado = n1 + n2;
    }
    else if (operador === '-') {
        resultado = n1 - n2;
    }
    else if (operador === '*') {
        resultado = n1 * n2;
    }
    else if (operador === '/') {
        if (n2 !== 0) {
            resultado = n1 / n2;
        } else {
            resultado = 'Erro: divisão por zero';
        }
    }
    else {
        resultado = 'Operação inválida';
    }

    document.getElementById('result').innerText = resultado;
}