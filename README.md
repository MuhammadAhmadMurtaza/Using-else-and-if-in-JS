<div align="center">

# 🧠 JavaScript Fundamentals: Operators, Conditions & Problem Solving

**A tutorial file on operators and `if / else`, plus ten practice problems that turn the theory into real decision-making code**

</div>

---

## 📖 About This Project

This is my second JavaScript practice project. After learning how to declare variables, I moved on to making programs **decide**.

The project has two files:

- **`index.js`** is the tutorial: arithmetic, comments, an `if / else if / else` chain, and the ternary operator.
- **`tasks.js`** is the practice: ten problems, five easy and five harder, each solved with conditions.

There is no HTML page. Everything runs in **Node.js** (or the browser console) and prints with `console.log()`.

---

## 📑 Table of Contents

1. [Project Structure](#-project-structure)
2. [Part 1: The Tutorial (`index.js`)](#-part-1-the-tutorial-indexjs)
3. [Part 2: The Practice Tasks (`tasks.js`)](#-part-2-the-practice-tasks-tasksjs)
4. [Problem Patterns](#-problem-patterns)
5. [Expected Console Output](#-expected-console-output)
6. [Known Gaps & Improvements](#-known-gaps--improvements)
7. [Try It Yourself](#-try-it-yourself)
8. [How to Run](#-how-to-run)
9. [Cheat Sheet](#-cheat-sheet)
10. [Key Takeaways](#-key-takeaways)
11. [Roadmap](#-roadmap)

---

## 📂 Project Structure

```
js-fundamentals/
│
└── 02-conditionals/
    ├── index.js      # tutorial: operators, if / else, ternary
    └── tasks.js      # 10 practice problems (Part A easy, Part B harder)
```

<table>
  <tr>
    <th>File</th>
    <th>Purpose</th>
  </tr>
  <tr>
    <td><code>index.js</code></td>
    <td>The tutorial. It prints a greeting, runs an <code>if / else if / else</code> chain on <code>age</code>, and ends with a ternary. The arithmetic operators are written out as commented-out examples.</td>
  </tr>
  <tr>
    <td><code>tasks.js</code></td>
    <td>Ten self-contained problems printed under the headings "Part A (Easy)" and "Part B (Harder)".</td>
  </tr>
</table>

> 💡 Rename the folder to match your own layout. Use lowercase file names such as `index.js`, because GitHub's servers are case sensitive.

---

## 📘 Part 1: The Tutorial (`index.js`)

### ➕ Arithmetic Operators

These are commented out in the file. Uncomment them, with `let grace = 2;`, to see each result. The first line, `age += grace`, runs before the others, so `age` is `3` for every line after it.

<table>
  <tr>
    <th>Operator</th>
    <th>Name</th>
    <th>Example in the file</th>
    <th>Result (with <code>age = 3</code>, <code>grace = 2</code>)</th>
  </tr>
  <tr>
    <td><code>+=</code></td>
    <td>Add and assign</td>
    <td><code>age += grace</code></td>
    <td align="center"><code>age</code> becomes <code>3</code> (from 1)</td>
  </tr>
  <tr>
    <td><code>+</code></td>
    <td>Addition</td>
    <td><code>age + grace</code></td>
    <td align="center"><code>5</code></td>
  </tr>
  <tr>
    <td><code>-</code></td>
    <td>Subtraction</td>
    <td><code>age - grace</code></td>
    <td align="center"><code>1</code></td>
  </tr>
  <tr>
    <td><code>*</code></td>
    <td>Multiplication</td>
    <td><code>age * grace</code></td>
    <td align="center"><code>6</code></td>
  </tr>
  <tr>
    <td><code>/</code></td>
    <td>Division</td>
    <td><code>age / grace</code></td>
    <td align="center"><code>1.5</code></td>
  </tr>
  <tr>
    <td><code>**</code></td>
    <td>Exponent (power)</td>
    <td><code>age ** grace</code></td>
    <td align="center"><code>9</code></td>
  </tr>
  <tr>
    <td><code>%</code></td>
    <td>Remainder (modulo)</td>
    <td><code>age % grace</code></td>
    <td align="center"><code>1</code></td>
  </tr>
</table>

### 💬 Comments

```js
// A single-line comment

/*
I am a
 multiline
 comment
*/
```

### 🔀 The `if / else if / else` Chain

```js
let age = 1;

if (age == 18) {
  console.log("You can drive");
} else if (age == 0) {
  console.log("Are you kidding me? You are not born yet");
} else if (age == 1) {
  console.log("Are you again kidding me? You are not born yet");
} else {
  console.log("You cannot drive");
}
```

<table>
  <tr>
    <th>Rule</th>
    <th>What it means here</th>
  </tr>
  <tr>
    <td>🥇 <b>First match wins</b></td>
    <td>JavaScript checks the conditions from top to bottom and runs <b>only the first one that is true</b>. The rest are skipped.</td>
  </tr>
  <tr>
    <td>🏁 <b><code>else</code> is the fallback</b></td>
    <td>It runs only if <b>none</b> of the conditions matched.</td>
  </tr>
  <tr>
    <td>🔢 <b>Order matters</b></td>
    <td>Put the most specific conditions first and the general ones last.</td>
  </tr>
</table>

**What happens with each `age`:**

<table>
  <tr>
    <th><code>age</code></th>
    <th>Branch that runs</th>
    <th>Output</th>
  </tr>
  <tr>
    <td align="center"><code>18</code></td>
    <td><code>if (age == 18)</code></td>
    <td>You can drive</td>
  </tr>
  <tr>
    <td align="center"><code>0</code></td>
    <td><code>else if (age == 0)</code></td>
    <td>Are you kidding me? You are not born yet</td>
  </tr>
  <tr>
    <td align="center"><code>1</code> (the value in the file)</td>
    <td><code>else if (age == 1)</code></td>
    <td>Are you again kidding me? You are not born yet</td>
  </tr>
  <tr>
    <td align="center">anything else (such as <code>30</code>)</td>
    <td><code>else</code></td>
    <td>You cannot drive</td>
  </tr>
</table>

### ❓ The Ternary Operator

A one-line `if / else` that **produces a value**:

```js
let a = 6;
let b = 8;
let c = a > b ? a - b : b - a;     // condition ? valueIfTrue : valueIfFalse
```

Here `a > b` is `false`, so `c` becomes `b - a`, which is `2`. In other words, `c` is the **difference between the two numbers**, whichever is larger.

The equivalent `if / else` is:

```js
let c;
if (a > b) {
  c = a - b;
} else {
  c = b - a;
}
```

> ⚠️ **Why `let c;` goes first:** a `let` declared inside `{ }` exists only inside those braces. Declare `c` **outside** the `if`, and assign to it inside. This is the block scope lesson from the variables project.

---

## 🧩 Part 2: The Practice Tasks (`tasks.js`)

### 🟢 Part A: Easy

<table>
  <tr>
    <th>Q</th>
    <th>Problem</th>
    <th>Input</th>
    <th>Key idea</th>
    <th>Output</th>
  </tr>
  <tr>
    <td align="center">1</td>
    <td><b>Even or odd</b></td>
    <td><code>7</code></td>
    <td><code>num % 2 === 0</code></td>
    <td>Odd</td>
  </tr>
  <tr>
    <td align="center">2</td>
    <td><b>Positive, negative, or zero</b></td>
    <td><code>-3</code></td>
    <td>Three-way <code>if / else if / else</code></td>
    <td>Negative</td>
  </tr>
  <tr>
    <td align="center">3</td>
    <td><b>Voting eligibility</b></td>
    <td><code>17</code></td>
    <td><code>age &gt;= 18</code> (inclusive)</td>
    <td>You cannot vote</td>
  </tr>
  <tr>
    <td align="center">4</td>
    <td><b>Larger of two numbers</b></td>
    <td><code>7</code> and <code>3</code></td>
    <td>Compare, with an "equal" fallback</td>
    <td><code>7</code></td>
  </tr>
  <tr>
    <td align="center">5</td>
    <td><b>Password length check</b></td>
    <td><code>"abc12345"</code></td>
    <td><code>password.length &gt;= 8</code></td>
    <td>Strong</td>
  </tr>
</table>

**Q1 in detail.** A number is even when the remainder after dividing by 2 is `0`:

```js
const num = 7;
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
```

> 💡 Checking `=== 0` (instead of `=== 1`) also works for negative numbers, because `-3 % 2` is `-1`, not `1`.

### 🔴 Part B: Harder

<table>
  <tr>
    <th>Q</th>
    <th>Problem</th>
    <th>Input</th>
    <th>Key idea</th>
    <th>Output</th>
  </tr>
  <tr>
    <td align="center">6</td>
    <td><b>Largest of three numbers</b></td>
    <td><code>3, 9, 5</code></td>
    <td>A running "largest so far" variable</td>
    <td><code>9</code></td>
  </tr>
  <tr>
    <td align="center">7</td>
    <td><b>Leap year</b></td>
    <td><code>2024</code></td>
    <td>Combining <code>&amp;&amp;</code> and <code>||</code> with parentheses</td>
    <td>Leap year</td>
  </tr>
  <tr>
    <td align="center">8</td>
    <td><b>Login validation</b></td>
    <td>empty username, <code>"1234"</code>, active</td>
    <td>An ordered chain of checks</td>
    <td>Username required</td>
  </tr>
  <tr>
    <td align="center">9</td>
    <td><b>Electricity bill</b></td>
    <td><code>80</code> units</td>
    <td>Tiered (slab) pricing</td>
    <td><code>800</code></td>
  </tr>
  <tr>
    <td align="center">10</td>
    <td><b>BMI calculator</b></td>
    <td><code>70</code> kg, <code>1.75</code> m</td>
    <td>Validate, calculate, then classify</td>
    <td>BMI 22.9, Normal</td>
  </tr>
</table>

### 🔎 Q6: The Running Maximum

Instead of comparing every pair, keep one variable and update it whenever something bigger appears:

```js
const a6 = 3, b6 = 9, c6 = 5;
let largest = a6;                 // start with the first value
if (b6 > largest) { largest = b6; }
if (c6 > largest) { largest = c6; }
console.log(largest);             // 9
```

This pattern scales to any number of values, and it is the idea behind finding the maximum in a loop later. Note that these are **two separate `if`s**, not an `else if` chain, because both checks must always run.

### 📅 Q7: Leap Year

```js
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}
```

<table>
  <tr>
    <th>Rule</th>
    <th>Meaning</th>
  </tr>
  <tr>
    <td>Divisible by 4 <b>and</b> not by 100</td>
    <td>A normal leap year (2024, 2028)</td>
  </tr>
  <tr>
    <td><b>or</b> divisible by 400</td>
    <td>The exception for century years (2000)</td>
  </tr>
</table>

<table>
  <tr>
    <th>Year</th>
    <th align="center">÷ 4</th>
    <th align="center">÷ 100</th>
    <th align="center">÷ 400</th>
    <th>Result</th>
  </tr>
  <tr><td>2024</td><td align="center">✅</td><td align="center">❌</td><td align="center">❌</td><td>Leap year</td></tr>
  <tr><td>2023</td><td align="center">❌</td><td align="center">❌</td><td align="center">❌</td><td>Not a leap year</td></tr>
  <tr><td>1900</td><td align="center">✅</td><td align="center">✅</td><td align="center">❌</td><td>Not a leap year</td></tr>
  <tr><td>2000</td><td align="center">✅</td><td align="center">✅</td><td align="center">✅</td><td>Leap year</td></tr>
</table>

> 💡 `&&` is evaluated before `||`, and the parentheses make the intent clear to the reader.

### 🔐 Q8: Login Validation

The checks run **in order**, and the first one that fails decides the message:

<table>
  <tr>
    <th>Order</th>
    <th>Check</th>
    <th>Message</th>
  </tr>
  <tr>
    <td align="center">1</td>
    <td><code>username === ""</code></td>
    <td>Username required</td>
  </tr>
  <tr>
    <td align="center">2</td>
    <td><code>password8 === ""</code></td>
    <td>Password required</td>
  </tr>
  <tr>
    <td align="center">3</td>
    <td><code>username !== "admin"</code></td>
    <td>User not found</td>
  </tr>
  <tr>
    <td align="center">4</td>
    <td><code>password8 !== "1234"</code></td>
    <td>Wrong password</td>
  </tr>
  <tr>
    <td align="center">5</td>
    <td><code>isActive === false</code></td>
    <td>Account blocked</td>
  </tr>
  <tr>
    <td align="center">6</td>
    <td><code>else</code> (everything passed)</td>
    <td>Login successful</td>
  </tr>
</table>

**Test every branch by changing the three input values:**

<table>
  <tr>
    <th><code>username</code></th>
    <th><code>password8</code></th>
    <th><code>isActive</code></th>
    <th>Output</th>
  </tr>
  <tr><td><code>""</code></td><td><code>"1234"</code></td><td><code>true</code></td><td>Username required</td></tr>
  <tr><td><code>"admin"</code></td><td><code>""</code></td><td><code>true</code></td><td>Password required</td></tr>
  <tr><td><code>"bob"</code></td><td><code>"1234"</code></td><td><code>true</code></td><td>User not found</td></tr>
  <tr><td><code>"admin"</code></td><td><code>"abcd"</code></td><td><code>true</code></td><td>Wrong password</td></tr>
  <tr><td><code>"admin"</code></td><td><code>"1234"</code></td><td><code>false</code></td><td>Account blocked</td></tr>
  <tr><td><code>"admin"</code></td><td><code>"1234"</code></td><td><code>true</code></td><td>Login successful</td></tr>
</table>

> 🔒 **Practice only:** hard-coded credentials in JavaScript are fine for learning, but real login checks must happen on a server, never in code the user can read.

### 💡 Q9: Tiered (Slab) Pricing

<table>
  <tr>
    <th>Units used</th>
    <th>Rate</th>
    <th>Formula</th>
  </tr>
  <tr>
    <td>First 100</td>
    <td align="center">10 per unit</td>
    <td><code>units * 10</code></td>
  </tr>
  <tr>
    <td>Next 200 (101 to 300)</td>
    <td align="center">15 per unit</td>
    <td><code>100 * 10 + (units - 100) * 15</code></td>
  </tr>
  <tr>
    <td>Above 300</td>
    <td align="center">20 per unit</td>
    <td><code>100 * 10 + 200 * 15 + (units - 300) * 20</code></td>
  </tr>
</table>

Each tier charges only for the units **inside that tier**. This is why the formula subtracts the previous limit.

<table>
  <tr>
    <th>Units</th>
    <th>Calculation</th>
    <th>Bill</th>
  </tr>
  <tr><td align="center">80</td><td>80 × 10</td><td align="center"><b>800</b></td></tr>
  <tr><td align="center">100</td><td>100 × 10</td><td align="center">1000</td></tr>
  <tr><td align="center">101</td><td>1000 + 1 × 15</td><td align="center">1015</td></tr>
  <tr><td align="center">300</td><td>1000 + 200 × 15</td><td align="center">4000</td></tr>
  <tr><td align="center">301</td><td>1000 + 3000 + 1 × 20</td><td align="center">4020</td></tr>
</table>

The bill grows smoothly across each boundary (100 to 101, 300 to 301), which confirms the formulas are right.

### ⚖️ Q10: BMI Calculator

```js
if (weight <= 0 || height <= 0) {
  console.log("Invalid input");            // 1. validate first
} else {
  const bmi = weight / (height * height);  // 2. calculate
  if (bmi < 18.5)      { /* Underweight */ }   // 3. classify
  else if (bmi < 25)   { /* Normal */ }
  else if (bmi < 30)   { /* Overweight */ }
  else                 { /* Obese */ }
}
```

<table>
  <tr>
    <th>BMI</th>
    <th>Category</th>
  </tr>
  <tr><td>below 18.5</td><td>Underweight</td></tr>
  <tr><td>18.5 to 24.9</td><td>Normal</td></tr>
  <tr><td>25 to 29.9</td><td>Overweight</td></tr>
  <tr><td>30 and above</td><td>Obese</td></tr>
</table>

For `70 kg` and `1.75 m`, the BMI is `70 / 3.0625 ≈ 22.857`, and `.toFixed(1)` rounds it to `"22.9"`, so the output is **BMI 22.9, Normal**.

> ℹ️ `.toFixed()` returns a **string**, not a number. That is fine for printing, but convert it back with `Number()` if you need to do math with it.

---

## 🧠 Problem Patterns

Each task practices a reusable pattern, not just a one-off answer:

<table>
  <tr>
    <th>Pattern</th>
    <th>Where it appears</th>
    <th>Where you'll see it again</th>
  </tr>
  <tr>
    <td><b>Remainder test</b> (<code>%</code>)</td>
    <td>Q1 even or odd</td>
    <td>Alternating rows, FizzBuzz, wrapping around a list</td>
  </tr>
  <tr>
    <td><b>Sign check</b> (<code>&gt; 0</code>, <code>&lt; 0</code>)</td>
    <td>Q2</td>
    <td>Validating numeric input</td>
  </tr>
  <tr>
    <td><b>Threshold check</b> (<code>&gt;=</code>)</td>
    <td>Q3 voting, Q5 password length, Q10 BMI</td>
    <td>Age gates, grade boundaries, limits</td>
  </tr>
  <tr>
    <td><b>Compare and pick</b></td>
    <td>Q4</td>
    <td>Min and max, sorting</td>
  </tr>
  <tr>
    <td><b>Running maximum</b></td>
    <td>Q6</td>
    <td>Finding the biggest item in an array with a loop</td>
  </tr>
  <tr>
    <td><b>Compound condition</b> (<code>&amp;&amp;</code>, <code>||</code>)</td>
    <td>Q7 leap year, Q10 invalid input</td>
    <td>Form validation, permissions</td>
  </tr>
  <tr>
    <td><b>Ordered validation chain</b></td>
    <td>Q8 login</td>
    <td>Checking input from most basic to most specific</td>
  </tr>
  <tr>
    <td><b>Tiered calculation</b></td>
    <td>Q9 bill</td>
    <td>Tax brackets, shipping costs, discounts</td>
  </tr>
  <tr>
    <td><b>Validate, calculate, classify</b></td>
    <td>Q10 BMI</td>
    <td>Almost every real calculator</td>
  </tr>
</table>

---

## 🖥️ Expected Console Output

**`node index.js`**

```
Hello I am conditional tutorial
Are you again kidding me? You are not born yet
```

**`node tasks.js`**

```
Tasks
Part A (Easy)
Q1
Odd
Q2
Negative
Q3
You cannot vote
Q4
7
Q5
Strong
Part B (Harder)
Q6
9
Q7
Leap year
Q8
Username required
Q9
800
Q10
BMI 22.9, Normal
```

> The ternary result `c` (which is `2`) is computed in `index.js` but never printed. Add `console.log(c)` to see it.

---

## 🔍 Known Gaps & Improvements

Here is what I found while reviewing the code, with a fix for each.

<details>
<summary><b>1. 🌐 <code>a = 6; b = 8;</code> has no declaration keyword</b></summary>

<br>

Without `let`, `const`, or `var`, JavaScript creates an **accidental global variable**. In strict mode (`"use strict";`) the same lines throw a `ReferenceError`.

```js
const a = 6;
const b = 8;
let c = a > b ? a - b : b - a;
console.log(c);     // 2
```

</details>

<details>
<summary><b>2. ✍️ The ternary's "translates to" comment is inaccurate</b></summary>

<br>

The comment shows `let c = a-b` in **both** branches. The second should be `b - a`, and declaring `c` with `let` inside each block would make it invisible outside. The correct translation is in the [ternary section](#-the-ternary-operator) above: declare `let c;` first, then assign in each branch.

</details>

<details>
<summary><b>3. ⚖️ <code>==</code> vs <code>===</code></b></summary>

<br>

`index.js` uses `==` (loose equality), while `tasks.js` uses `===` (strict equality). `==` **converts types** before comparing, which can give surprising results:

<table>
  <tr>
    <th>Expression</th>
    <th><code>==</code></th>
    <th><code>===</code></th>
  </tr>
  <tr><td><code>1 vs "1"</code></td><td align="center"><code>true</code></td><td align="center"><code>false</code></td></tr>
  <tr><td><code>0 vs false</code></td><td align="center"><code>true</code></td><td align="center"><code>false</code></td></tr>
  <tr><td><code>"" vs 0</code></td><td align="center"><code>true</code></td><td align="center"><code>false</code></td></tr>
  <tr><td><code>null vs undefined</code></td><td align="center"><code>true</code></td><td align="center"><code>false</code></td></tr>
</table>

**Rule:** use `===` and `!==` by default.

</details>

<details>
<summary><b>4. 🔢 Edge cases the tasks don't handle yet</b></summary>

<br>

<table>
  <tr>
    <th>Question</th>
    <th>Edge case</th>
    <th>What goes wrong</th>
  </tr>
  <tr>
    <td>Q1</td>
    <td><code>7.5</code> (not a whole number)</td>
    <td>Prints "Odd", but 7.5 is neither. Check with <code>Number.isInteger(num)</code> first.</td>
  </tr>
  <tr>
    <td>Q2</td>
    <td><code>NaN</code> (not a number)</td>
    <td><code>NaN &gt; 0</code> and <code>NaN &lt; 0</code> are both <code>false</code>, so it wrongly prints "Zero". Check with <code>Number.isNaN(num)</code> first.</td>
  </tr>
  <tr>
    <td>Q5</td>
    <td><code>"aaaaaaaa"</code></td>
    <td>Prints "Strong" because only the <b>length</b> is checked. A real check would also look for digits, capitals, and symbols.</td>
  </tr>
  <tr>
    <td>Q10</td>
    <td>Text instead of a number</td>
    <td>The guard only catches zero and negative values. Add a <code>typeof</code> or <code>Number.isFinite()</code> check.</td>
  </tr>
</table>

</details>

<details>
<summary><b>5. 🏷️ Names like <code>a6</code>, <code>b6</code>, <code>c6</code>, <code>password8</code></b></summary>

<br>

These exist because a top-level `const` **cannot be redeclared** in the same scope (the variables project's lesson). Wrapping each question in its own `{ }` block, or in a function, lets you reuse clean names:

```js
{
  const a = 3, b = 9, c = 5;     // Q6 has its own scope
  console.log(Math.max(a, b, c));
}
```

</details>

<details>
<summary><b>6. 🎯 Each question runs only one branch</b></summary>

<br>

Because the inputs are hard-coded, one run shows only one outcome per question. To test every branch, either edit the values by hand or (after learning functions) wrap each problem in a function and call it with many inputs:

```js
function parity(n) {
  return n % 2 === 0 ? "Even" : "Odd";
}

[7, 4, -3, 0].forEach((n) => console.log(n, parity(n)));
// 7 Odd
// 4 Even
// -3 Odd
// 0 Even
```

</details>

<details>
<summary><b>7. ✨ Shorter alternatives to know about</b></summary>

<br>

<table>
  <tr>
    <th>Question</th>
    <th>Built-in shortcut</th>
  </tr>
  <tr>
    <td>Q4 and Q6 (largest)</td>
    <td><code>Math.max(a, b)</code> and <code>Math.max(a, b, c)</code></td>
  </tr>
  <tr>
    <td>Q1 (parity)</td>
    <td><code>num % 2 === 0 ? "Even" : "Odd"</code> (ternary)</td>
  </tr>
  <tr>
    <td>Q3 (voting)</td>
    <td><code>console.log(age &gt;= 18 ? "You can vote" : "You cannot vote")</code></td>
  </tr>
</table>

Writing the long version first is the right way to learn. Shortcuts make more sense once you know what they replace.

</details>

---

## 🔬 Try It Yourself

<details>
<summary><b>Click to expand the experiment steps</b></summary>

<br>

1. **Walk through the chain.** In `index.js`, change `age` to `18`, `0`, `1`, and `30`, and compare each output with the table above.
2. **Reorder the chain.** Put `else if (age == 1)` **above** `if (age == 18)`. Does the result change for any input? Now try a chain like `age > 0` followed by `age > 10`, and see why order matters.
3. **Uncomment the operators.** Add `let grace = 2;` and uncomment the lines one at a time. Predict each result before running.
4. **Print the ternary.** Add `console.log(c)` and try different values of `a` and `b`.
5. **Make every task show every branch.** Change the inputs in `tasks.js` until each `else if` and `else` has run at least once.
6. **Break the leap year rule.** Try `1900`, `2000`, `2023`, and `2100`. Predict first.
7. **Probe the bill boundaries.** Try `100`, `101`, `300`, and `301` units.
8. **Hunt for edge cases.** Try `NaN` in Q2 and `7.5` in Q1 and see what prints.
9. **Rewrite Q1, Q3, and Q4 with a ternary**, then decide which version is easier to read.

</details>

---

## 🚀 How to Run

You need [Node.js](https://nodejs.org) installed.

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/<your-repo-name>.git

# 2. Move into the project
cd <your-repo-name>/02-conditionals

# 3. Run either file
node index.js
node tasks.js
```

**Or run in the browser:** create an HTML page that loads the script, open it, and check the **Console** tab (`F12`).

```html
<script src="tasks.js"></script>
```

💡 **Tip:** The VS Code **Code Runner** extension (or the built-in terminal) lets you run a file with one click.

---

## 📚 Cheat Sheet

### Operators

| Type | Operators |
|---|---|
| Arithmetic | `+` `-` `*` `/` `**` `%` |
| Assignment | `=` `+=` `-=` `*=` `/=` |
| Comparison | `>` `<` `>=` `<=` `===` `!==` |
| Logical | `&&` (and) `\|\|` (or) `!` (not) |
| Ternary | `condition ? valueIfTrue : valueIfFalse` |

### Logical Operators

<table>
  <tr>
    <th><code>A</code></th>
    <th><code>B</code></th>
    <th><code>A &amp;&amp; B</code></th>
    <th><code>A || B</code></th>
  </tr>
  <tr><td>true</td><td>true</td><td align="center">true</td><td align="center">true</td></tr>
  <tr><td>true</td><td>false</td><td align="center">false</td><td align="center">true</td></tr>
  <tr><td>false</td><td>true</td><td align="center">false</td><td align="center">true</td></tr>
  <tr><td>false</td><td>false</td><td align="center">false</td><td align="center">false</td></tr>
</table>

### Choosing a Structure

| Situation | Use |
|---|---|
| One condition, two outcomes | `if / else` |
| Several exclusive conditions | `if / else if / else` |
| A simple value that depends on a condition | Ternary `? :` |
| Checks that must **all** run | Separate `if` statements (like Q6) |
| Check invalid input first | A guard `if` at the start |

---

## 🎓 Key Takeaways

<table>
  <tr>
    <td>✅</td>
    <td>In an <code>if / else if / else</code> chain, <b>only the first true branch runs</b>, so order matters.</td>
  </tr>
  <tr>
    <td>✅</td>
    <td><code>%</code> gives the remainder, which makes even and odd checks simple.</td>
  </tr>
  <tr>
    <td>✅</td>
    <td>Use <code>===</code> by default. <code>==</code> converts types and can surprise you.</td>
  </tr>
  <tr>
    <td>✅</td>
    <td>Parentheses make mixed <code>&amp;&amp;</code> and <code>||</code> conditions clear and correct.</td>
  </tr>
  <tr>
    <td>✅</td>
    <td>A "running maximum" variable solves "find the biggest" for any number of values.</td>
  </tr>
  <tr>
    <td>✅</td>
    <td>In validation chains, check the basics first and the specifics later.</td>
  </tr>
  <tr>
    <td>✅</td>
    <td>Tiered pricing charges each slab only for the units inside it.</td>
  </tr>
  <tr>
    <td>✅</td>
    <td>Most real problems follow the same shape: <b>validate, calculate, classify</b>.</td>
  </tr>
  <tr>
    <td>✅</td>
    <td>Test the boundaries (like 100 and 101) and the odd inputs (like <code>NaN</code>), not just the easy case.</td>
  </tr>
</table>

---

## 🗺️ Roadmap

- [x] Variables: `var`, `let`, `const`
- [x] Operators and comments
- [x] `if / else if / else` and the ternary operator
- [x] Ten practice problems
- [ ] Fix the [known gaps](#-known-gaps--improvements)
- [ ] `switch` statements
- [ ] Truthy and falsy values
- [ ] Loops (`for`, `while`) and the running maximum with arrays
- [ ] Functions and arrow functions, so each problem can be tested with many inputs
- [ ] Arrays and objects
- [ ] DOM manipulation: connect JavaScript to my CSS projects

---

<div align="center">

### ⭐ If you found this helpful, consider giving the repo a star!

Made with ❤️ while learning JavaScript

</div>
