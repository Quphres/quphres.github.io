function StrToInt(a) {
    a *= 1;
    return a;
}

function Pow(a, b) {
    a **= b;
    return a;
}

function Deliteli(n) {
    let s = [];
    if (n > 0) {
        for (let i = 0; i <= n; i++) {
            if (n % i == 0) {
                s.push(i);
            }
        }
    } 
    else  {
        for (let i = 0; i >= n; i--) {
            if (n % i == 0) {
                s.push(i);
            }
        }
    }
    return s;
}

//Строка в число
let a = prompt('Введите число:');
a = StrToInt(a);
alert(a + ', ' + typeof(a));

//Возведение в степень
let n = prompt('Введите число, которое надо возвести в степень:');
let p = prompt('Введите степень:');
alert(Pow(n, p));

//Делители числа
let b = prompt('Введите число, делители которого нужно посчитать.');
alert(Deliteli(b));