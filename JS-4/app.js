// Task 1 - Identify the Input Type
var userInput = prompt("Please input a character:");
var charCode = userInput.charCodeAt(0);

if (charCode >= 48 && charCode <= 57) {
    console.log("The entered character is a numeric digit.");
} else if (charCode >= 65 && charCode <= 90) {
    console.log("The entered character is an uppercase alphabet.");
} else if (charCode >= 97 && charCode <= 122) {
    console.log("The entered character is a lowercase alphabet.");
} else {
    console.log("The entered character is neither a digit nor an alphabet.");
}

// Task 2 - Compare Two Numbers
var num1 = prompt("Input the first number:");
var num2 = prompt("Input the second number:");
if (num1 > num2) {
    console.log("The first number is larger.");
} else if (num1 < num2) {
    console.log("The second number is larger.");
} else {
    console.log("Both numbers are equal.");
}

// Task 3 - Check Positive, Negative, or Zero
var inputNumber = prompt("Input a number:");
if (inputNumber > "0") {
    console.log("The number is positive.");
} else if (inputNumber < "0") {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// Task 4 - Vowel Identification
var charInput = prompt("Input a character:");
if (charInput == "a" || charInput == "e" || charInput == "i" || charInput == "o" || charInput == "u") {
    console.log("The character is a vowel.");
} else {
    console.log("The character is not a vowel.");
}

// Task 5 - Password Validation
var storedPassword = "securePass123";
var enteredPassword = prompt("Enter your password:");
if (storedPassword === enteredPassword) {
    console.log("Password is correct, access granted.");
} else {
    console.log("Incorrect password, access denied.");
}

// Task 6 - Time-based Greeting
var greetMessage;
var currentHour = 13;
if (currentHour < 18) {
    greetMessage = "Good day.";
} else {
    greetMessage = "Good evening.";
}
console.log(greetMessage);

// Task 7 - Time of Day Greeting
var currentTime = prompt("Please input time in 24-hour format:");
if (currentTime >= "0" && currentTime < 12) {
    console.log("Good Morning.");
} else if (currentTime >= 12 && currentTime < 17) {
    console.log("Good Afternoon.");
} else if (currentTime >= 17 && currentTime < 21) {
    console.log("Good Evening.");
} else if (currentTime >= 21 && currentTime < 24) {
    console.log("Good Night.");
}
