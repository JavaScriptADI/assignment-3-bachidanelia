//1.Write a for loop to print the numbers 1 through 10.
for(let i = 1; i <= 10; i++) {
    console.log(i);
};
console.log("////////////////////////////////////////2");

//2.Write a for loop that prints the numbers 10 through 1.
for(let i = 10; i >= 1; i--) {
    console.log(i);
};
console.log("////////////////////////////////////////3");

//3.Explain the code below. Write a comments to each line.
let sum = 0; // here we declare variable and assigning a value to it.
for (let i = 1; i <= 50; i++) { //for loop is declared to write numbers from 1 to 50.
    sum += i; //adding every number to previousliy declared variable and storing it there.
}; //just closing the curly brackets.
console.log(sum); //logging final number to console.
console.log("////////////////////////////////////////4");

//4.How many iterations are in the loop below? Explain.
for (let i = 0; i < 10; i += 2) {
    console.log(i);
}; //there's gonna be 5 iterations because we are adding to "i" 2 instead of 1.
console.log("////////////////////////////////////////5");

//5.What does the break statement do? Explain and give an example.
let total = 0;
for(let i = 1; i < 10; i++) {
    total = i;
    if (total == 6) {
        break; //variable "total" got equal to 6 and itaration was interapted by "brake" statement, that's why it logged only to 5.
    };
    console.log(total);
};
console.log("////////////////////////////////////////6");

//6.What does the continue statement do? Explain and give an example.
for(let i = 660; i <= 670; i++) {
    if (i == 666) {
        continue; //as soon as "i" get equal to 666, "continue" statement made it skip the specific number.
    };
    console.log(i);
};
console.log("////////////////////////////////////////7");

//7.Generate and print a random number between 1 adn 100 until you get the number 27;
for(let i = 1; i <= 100; i++){
    let ranNum = Math.floor((Math.random() * 100) + 1);
    if (ranNum === 27) {
        console.log(27);
        break;
    }
    console.log(ranNum);
};
console.log("////////////////////////////////////////11");

/*11.write a program that prints the numbers from 1 to 100.
But for multiples of three print "Fizz" instead of the number
and for the multiples of five print "Buzz". For numbers which
are multiples of both three and five print "FizzBuzz".*/
for(let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
        continue;
    } if (i % 5 == 0) {
        console.log("Buzz");
        continue;
    } if (i % 3 == 0) {
        console.log("Fizz");
        continue;
    };
    console.log(i);
};
console.log("////////////////////////////////////////12");

//12.write a program that prints 100 random numbers (each random number should be in the range 1-100).
for(let i = 0; i <= 100; i++) {
    let ranNum = Math.floor((Math.random() * 100) + 1);
    console.log(ranNum);
};
console.log("////////////////////////////////////////13");

//13.write a program that prints the sum of all even numbers between 1 and 1000.
let evenNum = 0;
for (let i = 0; i < 1000; i++) {
    if (i % 2 == 0) {
        evenNum += i;
    };
};
console.log(evenNum);
console.log("////////////////////////////////////////14");

//14.write a program that prints the sum of all numbers between 1 and 1000 that are divisible by 3 or 5.
let number = 0;
for (let i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 ==0) {
        number += i;
    };
};
console.log(number);
console.log("////////////////////////////////////////15");

//15.write a program that prints the sum of all numbers between 1 and 1000 that are divisible by both 3 and 5.
let lastTotal = 0;
for (let i = 0; i < 1000; i++) {
    if (i % 3 == 0 && i % 5 ==0) {
        lastTotal += i;
    };
};
console.log(lastTotal);
console.log("////////////////////////////////////////");