window.addEventListener('DOMContentLoaded', function() { //проверяем загрузку страницы
    'use strict';

    const dy = [0, 1, 2, 3, 4, 5, 6, 7];
    const dx = [0, 1, 2, 3, 4, 5, 6, 7];
    const dxSumbol = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const btn = document.getElementById('btn');
    const yStep = [1, 2, -1, -2];
    const xStep = [-2, 2, 1, -1];
    let yResult = [];
    let xResult = [];
    let result = [];
    let yId;
    let xId;

    btn.addEventListener('click', function() { // считываем данные с формы при клике
        let xy = document.getElementById('input').value;

        {for(let i = 0; i < dxSumbol.length; i++) {
            if(xy.toUpperCase()[0] == dxSumbol[i]) { 
                // находим порядковый номер символа в массиве dxSumbol 
                xId = i; // и присваеваем его в xId
                yId = +xy[1] - 1; // так же поступаем с осью y, но здесь достаточно вычесть единицу
            }
        }};
        
        {for(let i = 0, j = 0; i < yStep.length; i++) { // создаем массив всевозможных ходов по оси y
            yResult[j++] = dy[yId] + yStep[i] + 1;
            yResult[j++] = dy[yId] + yStep[i] + 1;
        }};
    
        {for(let i = 0, j = 0; i < 8; i++, j++) { // создаем массив всевозможных ходов по оси x
            if(j > 3) {
                j = 0;
            }
            xResult[i] = dxSumbol[dx[xId] + xStep[j]]; // результат записываем сразу буквой
        }};

        result = []; 
        // очищаем массив, что бы при повторном запуске с другими значениями массив был девственно чист
    
        {for(let i = 0, j = 0, n = NaN; i < yResult.length && i < xResult.length; i++) {
            if(!Number.isNaN(xResult[i] + yResult[i]) && yResult[i] <= 8 && yResult[i] > 0) { 
                // проверяем на выход результата за границу доски
                result[j++] = xResult[i] + yResult[i];
            }
        }};

        {if(result == "") {
            alert('Ошибка');
        } else {
            alert(`Возможные варианты хода: \n\n ${result.join(' ')}`); 
            // выводим массив в виде строки
        }};
    });
});