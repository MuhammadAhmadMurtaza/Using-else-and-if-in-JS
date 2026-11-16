// Q1. Number Classification 
console.log("Q1");
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


// Q2. Prime Numbers 
console.log("Q2");
for (let num = 2; num <= 100; num++) {
  let isPrime = true;
  for (let d = 2; d < num; d++) {
    if (num % d == 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    console.log(num);
  }
}


// Q3. Number Pattern 
console.log("Q3");
for (let row = 1; row <= 6; row++) {
  let line = "";
  for (let col = 1; col <= row; col++) {
    line = line + col;
  }
  console.log(line);
}


// Q4. Reverse Number 
console.log("Q4");
let n4 = 153;
let reverse4 = 0;
while (n4 > 0) {
  let digit = n4 % 10;
  reverse4 = reverse4 * 10 + digit;
  n4 = Math.floor(n4 / 10);
}
console.log("Reversed number: " + reverse4);


// Q5. Armstrong Numbers 
console.log("Q5");
for (let num = 1; num <= 1000; num++) {
  let digits = 0;
  let temp = num;
  while (temp > 0) {
    digits++;
    temp = Math.floor(temp / 10);
  }

  
  let sum = 0;
  temp = num;
  while (temp > 0) {
    let digit = temp % 10;
    let power = 1;
    for (let p = 1; p <= digits; p++) {
      power = power * digit;
    }
    sum = sum + power;
    temp = Math.floor(temp / 10);
  }

  if (sum == num) {
    console.log(num + " is an Armstrong number");
  }
}


// Q6. Student Result System 
console.log("Q6");
let passed = 0;
let failed = 0;
let highest = 0;
let total = 0;

// Change the marks of the 10 students here
let studentMarks = [95, 85, 75, 65, 55, 45, 100, 30, 88, 72];

for (let i = 1; i <= 10; i++) {
  let marks = studentMarks[i - 1];

  if (marks >= 90) {
    console.log("Student " + i + ": Grade A+");
    passed++;
  } else if (marks >= 80) {
    console.log("Student " + i + ": Grade A");
    passed++;
  } else if (marks >= 70) {
    console.log("Student " + i + ": Grade B");
    passed++;
  } else if (marks >= 60) {
    console.log("Student " + i + ": Grade C");
    passed++;
  } else if (marks >= 50) {
    console.log("Student " + i + ": Grade D");
    passed++;
  } else {
    console.log("Student " + i + ": Fail");
    failed++;
  }

  if (marks > highest) {
    highest = marks;
  }
  total = total + marks;
}

console.log("Total passed students: " + passed);
console.log("Total failed students: " + failed);
console.log("Highest marks: " + highest);
console.log("Average marks: " + total / 10);


// Q7. Perfect Numbers 
console.log("Q7");
for (let num = 2; num <= 1000; num++) {
  let sum = 0;
  for (let d = 1; d < num; d++) {
    if (num % d == 0) {
      sum = sum + d;
    }
  }
  if (sum == num) {
    console.log(num + " is a perfect number");
  }
}


// Q8. Multiplication Table Challenge 
console.log("Q8");
for (let table = 1; table <= 10; table++) {
  console.log("Table of " + table + ":");
  for (let i = 1; i <= 10; i++) {
    let result = table * i;
    if (result > 50) {
      continue;
    }
    if (result % 2 == 0) {
      continue;
    }
    console.log(table + " x " + i + " = " + result);
  }
}


// Q9. Palindrome Number 
console.log("Q9");
let n9 = 121;
let original = n9;
let reverse9 = 0;
while (n9 > 0) {
  reverse9 = reverse9 * 10 + (n9 % 10);
  n9 = Math.floor(n9 / 10);
}
if (reverse9 == original) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}


// Q10. ATM Simulation 
console.log("Q10");
let balance = 10000;

let choices = [1, 2, 2, 3, 3, 3, 1, 4];
let amounts = [0, -5, 1000, 700, 50000, 1500, 0, 0];

let step = 0;
let choice = 0;

while (choice != 4 && step < choices.length) {
  console.log("ATM MENU");
  console.log("1. Check Balance");
  console.log("2. Deposit Money");
  console.log("3. Withdraw Money");
  console.log("4. Exit");

  choice = choices[step];
  let amount = amounts[step];
  step++;
  console.log("Your choice: " + choice);

  if (choice == 1) {
    console.log("Your balance is: " + balance);
  } else if (choice == 2) {
    let deposit = amount;
    console.log("Deposit amount: " + deposit);
    if (deposit > 0) {
      balance = balance + deposit;
      console.log("Deposit successful. New balance: " + balance);
    } else {
      console.log("Deposit amount must be greater than zero.");
    }
  } else if (choice == 3) {
    let withdraw = amount;
    console.log("Withdraw amount: " + withdraw);
    if (withdraw <= 0) {
      console.log("Withdrawal amount must be greater than zero.");
    } else if (withdraw > balance) {
      console.log("Insufficient balance.");
    } else if (withdraw % 500 != 0) {
      console.log("Withdrawal amount must be a multiple of 500.");
    } else {
      balance = balance - withdraw;
      console.log("Please collect your cash. New balance: " + balance);
    }
  } else if (choice == 4) {
    console.log("Thank you for using the ATM. Goodbye!");
  } else {
    console.log("Invalid choice. Please select 1-4.");
  }
}