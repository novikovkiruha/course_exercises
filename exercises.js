
// 1 task________________________________________________________________
/* var enteredNumber = prompt ("Enter a number");

 if (enteredNumber % 2 === 0) alert("Even number");
 else alert("Odd number");*/


// 2 task________________________________________________________________
/* var number1 = prompt ("Enter the 1st number");
 var number2 = prompt ("Enter the 2nd number");
 var number3 = prompt ("Enter the 3rd number");

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

 alert(maxValue + " is a highest number and " + minValue + " is a lowest number");*/


// 3 task________________________________________________________________
 /*var daysNumber = prompt("Enter a number of days");

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
 }*/


// 4 task________________________________________________________________
/*var a = 1;
var b = 2;

// without 3rd variable
var numbers = [a, b] = [b, a];
console.log(a,b);

// with 3rd variable
var c = 3;
var d = 4;

var e = c;
c = d;
d = e;
console.log(c,d);*/


// 5 task________________________________________________________________



// 6 task________________________________________________________________





// 7 task________________________________________________________________
/*
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
*/


// 8 task________________________________________________________________
/*
var validNumber = prompt("Enter a number between 1 and 10");

if (validNumber >= 1 && validNumber <= 10) alert("Valid");
else alert("Invalid");
*/


// 9 task________________________________________________________________




// 10 task________________________________________________________________




// 11 task________________________________________________________________




// 12 task________________________________________________________________





// 13 task________________________________________________________________






// 14 task________________________________________________________________




// 15 task________________________________________________________________





// 16 task________________________________________________________________





// 17 task________________________________________________________________





// 18 task________________________________________________________________





// 19 task________________________________________________________________





// 20 task________________________________________________________________