
for (let i = 1; i <= 20; i++) {
  console.log(i);
}


for (let i = 2; i <= 50; i += 2) {
  console.log(i);
}

let num = 7;
for (let i=1; i <= 10; i++){
    console.log(num + " x " + i + " = " + (num * i));
}


let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum); 


for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("Go!");


const nums = [4, 9, 2, 15, 7];
let largest = nums[0];
for (let i = 1; i < nums.length; i++) {
  if (nums[i] > largest) {
    largest = nums[i];
  }
}
console.log(largest); 


let a = 0, b = 1;
console.log(a);
console.log(b);
for (let i = 0; i < 8; i++) {
    let c = a + b;
    a = b;
    b = c;
    console.log(c);
}


const word = "programming";
const vowels = "aeiou";
let count = 0;
for (let i = 0; i < word.length; i++) {
  if (vowels.includes(word[i])) {
    count++;
  }
}
console.log(count); 


for (let row = 1; row <= 4; row++) {
  let line = "";
  for (let col = 1; col <= row; col++) {
    line += "* ";
  }
  console.log(line);
}


for (let n = 2; n <= 50; n++) {
  let isPrime = true;
  for (let d = 2; d * d <= n; d++) {
    if (n % d === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(n);
}
