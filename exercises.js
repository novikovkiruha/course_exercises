
// 1 task________________________________________________________________
//Проверить, является ли введенное число четным.
document.getElementById('task-1').addEventListener('click', function() {
    var enteredNumber = prompt("Enter a number");
    if (enteredNumber == 0) alert("Zero");
    else if (enteredNumber % 2 === 0 && enteredNumber !== 0) alert("Even number");
    else alert("Odd number");
});


// 2 task________________________________________________________________
document.getElementById('task-2').addEventListener('click', function() {
    var number1 = prompt("Enter the 1st number");
    var number2 = prompt("Enter the 2nd number");
    var number3 = prompt("Enter the 3rd number");

    var numbersArray = [number1, number2, number3];

    var maxValue;
    var minValue;
    for (var i = 0; i < numbersArray.length; i++) {
        maxValue = numbersArray[0];
        minValue = numbersArray[0];
        if (numbersArray[i] > maxValue) {
         maxValue = numbersArray[i];
        } else {
         minValue = numbersArray[i];
        }
    }
    alert(maxValue + " is the highest number and " + minValue + " is the lowest number");
});


// 3 task________________________________________________________________
document.getElementById('task-3').addEventListener('click', function() {
    var daysNumber = prompt("Enter a number of days");

    var week = Math.floor(daysNumber / 7);
    var days = daysNumber % 7;

    if (week > 1) {
        if (days > 1) {
         alert(week + " weeks and " + days + " days"); 
        } else if (days === 0) {
         alert(week + " weeks");
        } else {
         alert(week + " weeks and " + days + " day");
        }
    }
    else if (week === 1) {
        if (days > 1) {
         alert(week + " week and " + days + " days");
        } else if (days === 0) {
         alert(week + " week");
        } else {
         alert(week + " week and " + days + " day");
        }
    }
    else if (week === 0) {
        if (days > 1) {
         alert(days + " days");
        } else if (days === 1) {
         alert(days + " day");
        } else {
         alert("You entered '0'");
        }
    }
});

// 4 task________________________________________________________________
document.getElementById('task-4').addEventListener('click', function() {
    alert('Open the console (F12)');
    var a = 1;
    var b = 2;
    console.log('Without 3rd variable');
    console.log('a=' + a, 'b=' + b);
    //with 2 variables
    var numbers = [a, b] = [b, a];
    console.log('a=' + a, 'b=' + b);

    //with 3 variables
    var c = 3;
    var d = 4;
    console.log('With 3rd variable');
    console.log('c=' + c,'d=' + d);
    var e = c;
    c = d;
    d = e;
    console.log('c=' + c,'d=' + d);
});


// 5 task________________________________________________________________
/*Ввести количество метров, вывести количество сантиметров или киллометров в зависимости от выбора пользователя
   Реализовать меню:
   1) Перевести метры в киллометры
   2) Перевести метры в сантиметры
   Другие варианты - ошибка*/
document.getElementById('task-5').addEventListener('click', function() {
    var m = prompt('Enter the meters');
    var cm = m * 100;
    var km = m / 100;
    var measure = prompt('Enter \'cm\' for centimeters or \'km\' for kilometers');
    
    if (measure == 'cm') alert(cm + ' cm');
    else if (measure == 'km') alert(km + ' km');
    else alert('Wrong value');
});

// 6 task________________________________________________________________
/*Дана комната без окон и дверей. В комнате на стены необходимо поклеить обои.
   Пользователь вводит:
   1) Длину и ширину рулона обоев
   2) Высоту, ширину и длину комнаты
   Расчитать сколько рулонов обоев нужно для поклейки:
   1) С использованием остатков
   2) Без использования остатков
   Выбор варианта поклейки предоставить пользователю*/
document.getElementById('task-6').addEventListener('click', function() {
    var wpLength = +prompt('Enter the length of the wallpaper');
    var wpWidth = +prompt('Enter the width of the wallpaper');
    var roomHeight = +prompt('Enter the height of the room');
    var roomWidth = +prompt('Enter the width of the room');
    var roomLength = +prompt('Enter the length of the room');
    
    var sRoom = (roomWidth + roomLength) * roomHeight;
    var sWP = wpLength * wpWidth;
    
    // with remainder
    var rolls1 = sRoom / sWP;
    
    // without remainder
    var rolls2 = Math.ceil(roomWidth / wpWidth) + Math.ceil(roomLength / wpWidth);
    alert('Rolls with using of remainders ' + rolls1 + '\nRolls without using of remainders ' + rolls2); 
});


// 7 task________________________________________________________________
document.getElementById('task-7').addEventListener('click', function() {
    var side1 = prompt("Enter the first triangle side length");
    var side2 = prompt("Enter the second triangle side length");
    var side3 = prompt("Enter the third triangle side length");

    var triangle = [side1, side2, side3];

    if (side1 === side2 && side1 === side3) {
        alert("Equilateral triangle (равносторонний треугольник)");
    } else if (side1 < side2+side3 && side2 < side1+side3 && side3 < side1+side2) {
        alert("Triangle with such sides doesn't exist");
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        alert("Isosceles triangle (равнобедренный треугольник)");
    } else if (side1*side1 === side2*side2+side3*side3 || side2*side2 === side1*side1+side3*side3 || side3*side3 === side2*side2+side1*side1) {
        alert("Right triangle (прямоугольный треугольник)");
    } else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
        alert("Versatile triangle (разносторонний треугольник)");
    } else {
        alert("Another type of triangle");
    }
});


// 8 task________________________________________________________________
document.getElementById('task-8').addEventListener('click', function() {
    var validNumber = prompt("Enter a number between 1 and 10");

    if (validNumber >= 1 && validNumber <= 10) alert("Valid");
    else alert("Invalid");
});


// 9 task________________________________________________________________
document.getElementById('task-9').addEventListener('click', function() {
    var height = prompt("Enter a height of the image");
    var width = prompt("Enter a width of the image");

    if (height > width) alert("Image is a portrait");
    else if (height < width) alert("image is a landscape");
});

// 10 task________________________________________________________________
//Write a program to count how many numbers between 1 and 100 are divisible by 3 with no remainder. Display the count on the console.
document.getElementById('task-10').addEventListener('click', function() {
    var number = prompt('Enter a number from 1 to 10');
    var arr = [];
    if (number >= 1 && number <= 10) {
        for (var i = 1; i <= 100; i++) {
            var a = i % number;
            if (a === 0) {
                arr.push(i);
            }
        }
        alert('The quantity of numbers between 1 and 100 are divisible by ' + number + ' without remainder is equal to ' + arr.length);
    } else {
        alert('Invalid number. Please, try again.')
    }
});

// 11 task________________________________________________________________
// Write a program and continuously ask the user to enter a number or "ok" to exit. Calculate the sum of all the previously entered numbers and display it on the console.
document.getElementById('task-11').addEventListener('click', function() {
    var numbersArray = [];
    do {
        var number = prompt("Enter a number to count a sum");
        numbersArray.push(number);
    } while (window.confirm("Do you want to proceed? Press 'OK'. If you are finished, click the Cancel") === true);

    console.log(numbersArray);
    var sum = 0;
    for (var i = 0; i < numbersArray.length; i++) {
            sum += +numbersArray[i];
        }
    alert(sum);
});

// 12 task________________________________________________________________
// Write a program and ask the user to enter a number. Compute the factorial of the number and print it on the console. For example, if the user enters 5, the program should calculate 5 x 4 x 3 x 2 x 1 and display it as 5! = 120.
document.getElementById('task-12').addEventListener('click', function() {
    var number = prompt("Enter a number");
    var factorial = 1;
    for (var i = 2; i <= number; i++) {
        factorial = factorial*i;
    }
    alert(number + '! = ' + factorial);
});

// 13 task________________________________________________________________
/*Пользователь вводит с клавиатуры целое число в одну строку, необходимо:
а) показать сколько в данном числе цифр
б) перевернуть число и вывести на экран (было 12345 стало 54321)
в) показать на экран сумму цифр в числе*/
document.getElementById('task-13').addEventListener('click', function() {
    var number = prompt('Enter a number');
    var array = number.split('');
    var sum = 0;
    var invert = 0;
    for (var i = array.length-1; i >= 0; i--) {
        sum += +array[i];
        invert += array[i];
    }
    alert('Figures: ' + array.length + '\n' + 'Sum: ' + sum + '\n' + 'Invert: ' + invert.slice(1));
});

// 14 task________________________________________________________________
/*Разработать программу, которая выводит на экран линию из символов. Число символов, какой использовать символ, и какая будет линия - вертикальная, или горизонтальная - указывает пользователь.*/
document.getElementById('task-14').addEventListener('click', function() {
    
    var symbolNumbers = prompt('Enter the number of symbols');
    var symbolType = prompt('Enter the symbol');
    var lineType = prompt('Enter \'H\' for the horizontal line or \'V\' for the vertical line');
    var array = [];
    
    var sumOfSymbols = 0;
    for (var i = 0; i < +symbolNumbers; i++) {
        array.push(symbolType);
        if (lineType == 'H') {
            sumOfSymbols += array[i];
        }
        else {
            console.log(symbolType);
        }
    }
    
    if (lineType == 'H') {
        console.log(sumOfSymbols.slice(1));
    }
});

// 15 task________________________________________________________________
/*Написать программу, которая находит сумму всех целых нечетных чисел в диапазоне, указанном пользователем.*/
document.getElementById('task-15').addEventListener('click', function() {
    var startNumber = prompt('Enter the start value of the range');
    var endNumber = prompt('Enter the end value of the range');
    
    var sum = 0;
    for (var i = +startNumber; i <= +endNumber; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    alert('Sum of even numbers in this range: ' + sum);    
});

// 16 task________________________________________________________________
/*Дано натуральное число n. Написать программу, которая вычисляет факториал неотрицательных целых чисел n (т.е. число целое и больше 0). 
Формула вычисления факториала:
n! = 1*2*3*....*n,
0! = 1 (факториал 0 равен 1)*/
document.getElementById('task-16').addEventListener('click', function() {
    var n = prompt("Enter a number");
    var factorial = 1;
    if (n > 0 && (n^0) == n) {
        for (var i = 2; i <= n; i++) {
            factorial = factorial*i;
        }
        alert(n + '! = ' + factorial);
        
    } else if (n == 0) {
        alert(n + '! = ' + factorial);
    } else {
        alert('Wrong value');
    }
});

// 17 task________________________________________________________________
// Написать программу, которая находит сумму всех целых чисел от n до m включительно.
document.getElementById('task-17').addEventListener('click', function() {
    var n = prompt("Enter the first number");
    var m = prompt("Enter the second number");
    
    var sum = 0;
    for (var i = +n; i <= +m; i++) {
        sum += i;
    }
    alert(sum);
});

// 18 task________________________________________________________________
/*Если сумма трех x,y,z различных чисел больше 100, то наименьшее из этих чисел - заменить полусуммой двух других, иначе - меньшее из x и y заменить суммой оставшихся.*/
document.getElementById('task-18').addEventListener('click', function() {
    var x = +prompt("Enter the first number");
    var y = +prompt("Enter the second number");
    var z = +prompt("Enter the third number");
    var array = [x, y, z];
    
    console.log(array);
    var sum = x + y + z;
    var min = array[0];
    var mid = min;
    var max = min;
    if (sum > 100) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] < min) min = array[i];
            else if (array[i] > max) max = array[i];
            else mid = array[i];
        }
        min = (mid+max)/2;
        console.log(min, mid, max);
    } else {
        if (x < y) x = y + z;
        else if (x > y) y = x + z;
        console.log(x, y, z);
    }
    
});



// 19 task________________________________________________________________
//На часах h часов m минут и S секунд. Вывести время через одну секунду.
document.getElementById('task-19').addEventListener('click', function() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    console.log(h, m, s);
    var time = [h, m, s];
    for (var i = 0; i < time.length; i++) {
        (function(i) {
            setTimeout(function() { 
                console.log(time[i]); 
            }, 1000 * i);
        })(i);
    }
});

// 20 task________________________________________________________________
//Пользователь вводит 4-х-значное число, поменять местами 1 с 2 и 3 с 4 цифры. Если число не 4-х значное - вывести сообщение.
document.getElementById('task-20').addEventListener('click', function() {
    var number = prompt('Enter the 4-digit number');
    var array = number.split('');
    
    [array[0], array[1], array[2], array[3]] = [array[1], array[0], array[3], array[2]];
    sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    alert('Entered number = ' + number + '\nSwapped number = ' + sum.slice(1));
});

// 21 task________________________________________________________________

document.getElementById('task-21').addEventListener('click', function() {

});


// 22 task________________________________________________________________

document.getElementById('task-22').addEventListener('click', function() {

});



// 23 task________________________________________________________________

document.getElementById('task-23').addEventListener('click', function() {

});



// 24 task________________________________________________________________

document.getElementById('task-24').addEventListener('click', function() {

});

// 25 task________________________________________________________________

document.getElementById('task-25').addEventListener('click', function() {

});



// 26 task________________________________________________________________

document.getElementById('task-26').addEventListener('click', function() {

});


// 27 task________________________________________________________________

document.getElementById('task-27').addEventListener('click', function() {

});



// 28 task________________________________________________________________

document.getElementById('task-28').addEventListener('click', function() {

});



// 29 task________________________________________________________________

document.getElementById('task-29').addEventListener('click', function() {

});



// 30 task________________________________________________________________

document.getElementById('task-30').addEventListener('click', function() {

});



// 31 task________________________________________________________________

document.getElementById('task-31').addEventListener('click', function() {

});


// 32 task________________________________________________________________

document.getElementById('task-32').addEventListener('click', function() {

});


// 33 task________________________________________________________________

document.getElementById('task-33').addEventListener('click', function() {

});