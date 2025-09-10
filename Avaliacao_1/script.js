// Espera o DOM carregar completamente para adicionar os eventos
document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA DO EXERCÍCIO 01 ---
    const minValue1 = document.getElementById('minValue1');
    const maxValue1 = document.getElementById('maxValue1');
    const countButton = document.getElementById('countButton');
    const result1 = document.getElementById('result1');

    function validateRange() {
        const min = parseInt(minValue1.value, 10);
        const max = parseInt(maxValue1.value, 10);

        if (!isNaN(min) && !isNaN(max) && min >= max) {
            minValue1.classList.add('invalid');
            maxValue1.classList.add('invalid');
        } else {
            minValue1.classList.remove('invalid');
            maxValue1.classList.remove('invalid');
        }
    }

    minValue1.addEventListener('input', validateRange);
    maxValue1.addEventListener('input', validateRange);

    countButton.addEventListener('click', function() {
        // Valida se os campos estão preenchidos
        if (minValue1.value === '' || maxValue1.value === '') {
            result1.textContent = 'Atenção: ambos os valores devem ser inseridos.';
            return;
        }

        const min = parseInt(minValue1.value, 10);
        const max = parseInt(maxValue1.value, 10);

        // Valida se o mínimo é menor que o máximo
        if (min >= max) {
            result1.textContent = 'Erro: o valor mínimo deve ser menor que o valor máximo.';
            return;
        }

        let count = 0;
        // Conta os números inteiros estritamente entre min e max
        for (let i = min + 1; i < max; i++) {
            count++;
        }

        result1.textContent = `Existem ${count} números entre ${min} e ${max}.`;
    });

    // --- LÓGICA DO EXERCÍCIO 02 ---
    const factorialInput = document.getElementById('factorialInput');
    const factorialButton = document.getElementById('factorialButton');
    const result2 = document.getElementById('result2');

    factorialButton.addEventListener('click', function() {
        if (factorialInput.value === '') {
            result2.textContent = 'Atenção: insira um número.';
            return;
        }

        const num = parseInt(factorialInput.value, 10);

        if (num < 0) {
            result2.textContent = 'Erro: fatorial não é definido para números negativos.';
            return;
        }

        if (num > 20) { // Limite para evitar travamentos com BigInt
            result2.textContent = 'Número muito grande para calcular o fatorial aqui.';
            return;
        }

        // Usando BigInt para calcular fatoriais maiores sem perda de precisão
        let result = 1n; // 'n' no final indica que é um BigInt
        for (let i = 2n; i <= BigInt(num); i++) {
            result *= i;
        }

        result2.textContent = `O fatorial de ${num} é ${result.toString()}.`;
    });

    // --- LÓGICA DO EXERCÍCIO 03 ---
    const quantity3 = document.getElementById('quantity3');
    const minValue3 = document.getElementById('minValue3');
    const maxValue3 = document.getElementById('maxValue3');
    const randomButton = document.getElementById('randomButton');
    const result3 = document.getElementById('result3');

    randomButton.addEventListener('click', function() {
        if (quantity3.value === '' || minValue3.value === '' || maxValue3.value === '') {
            result3.textContent = 'Atenção: todos os campos devem ser preenchidos.';
            return;
        }

        const quantity = parseInt(quantity3.value, 10);
        const min = parseInt(minValue3.value, 10);
        const max = parseInt(maxValue3.value, 10);

        if (min > max) {
            result3.textContent = 'Erro: o valor mínimo não pode ser maior que o máximo.';
            return;
        }
        if (quantity <= 0) {
            result3.textContent = 'Erro: a quantidade deve ser um número positivo.';
            return;
        }

        const randomNumbers = [];
        for (let i = 0; i < quantity; i++) {
            // Gera um número aleatório inclusivo entre min e max
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            randomNumbers.push(randomNumber);
        }

        let output = `Array gerado: [${randomNumbers.join(', ')}]<br>`;

        const sum = min + max;
        if (quantity < sum) {
            output += `A quantidade (${quantity}) é MENOR que a soma de min e max (${sum}).`;
        } else {
            output += `A quantidade (${quantity}) NÃO é menor que a soma de min e max (${sum}).`;
        }

        result3.innerHTML = output;
    });
});