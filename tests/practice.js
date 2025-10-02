// import readlineSync from 'readline-sync';

// const namee = 'Ratri';
// let count = 2;
// const msg = `Hi ${namee}, you ran ${count} tests.`;
// console.log("Message:",msg);

// let age=28;
// const country= 'Bangladesh';
// console.log("Age:",age);
// console.log("Country:",country);

// //typeof use
// const name1= 'Ratri';
// const score1 = 95;
// const b= true;
// const n= null;
// const a=["Apple", 'Mango', 'Banana'];
// const s= {id: 1, name: 'Ratri', cgpa: 3.68};
// console.log('Name1 type:',typeof name1);
// console.log('Score1 type:',typeof score1);
// console.log('B type:',typeof b);
// console.log('N type:',typeof n);
// console.log("A type:",typeof a);
// console.log("S type:",typeof s);

// //grade using if else
// function getGrade(name, score) {
//     let grade;
//     if (score>=80) {
//         grade='A+';  
//     }
//     else if (score>=70) {
//         grade='A';   
//     }
//     else if (score>=60) {
//         grade='B';   
//     }
//     else if (score>=50) {
//         grade='C';   
//     }
//     else{
//         grade='F';   
//     }
//     return `Hi ${name}, your score is ${score} and grade is ${grade}`; 
// }
// console.log(getGrade('Kabir', 85));
// console.log(getGrade('Bir', 65));
// console.log(getGrade('Abir', 45));

// //Even
// const number = [1,2,3,4,5,6,7,8,9,10];
// const evens = number.filter(num => num % 2 === 0);
// console.log('Even Number:', evens);

// //Even check
// const numm= readlineSync.questionInt("Enter the number to check Even: ");
// function isEven(numm) {
//     return numm%2===0;
// }
// console.log(`Is ${numm} even?`, isEven(numm));

// //array odd and even check
// const numb = readlineSync.question("enter the numbers for odd and even:");
// const numbb = numb.split(',').map(i => parseInt(i.trim(),10));
// let odds = [];
// let evenss = [];
// for (let i of numbb){
//     if(i%2===0){
//         evenss.push(i);
//     }
//     else{
//         odds.push(i);
//     }
// }
// console.log("Even Number: ", evenss);
// console.log('Odd Numbers: ',odds);

// //array for sum
// const ar = readlineSync.question("Enter the numbers for sum: ");
// const aa = ar.split(',').map(nn => parseInt(nn.trim(),10));
// let summ=0;
// for(const nn of aa){
//     summ += nn;
// }
// console.log("Array: ",aa);
// console.log("Sum:",summ);

// //array -> Maxmimum Number
// const cc= [50,20,45,89,34,12];
// let max = cc[0];
// for(let i1 of cc){
//     if(i1 > max){
//         max = i1;
//     }
// }
// console.log("Maximum Number: ",max);

// //Reverse Array
// const r=[1,2,3,4,5];
// let reversed =[];
// for(let i = r.length-1; i>=0; i--){
//     reversed.push(r[i]);
// }
// console.log("Reversed Array: ",reversed);

// //Palindrome চেক
// function ispalindrome(str){
//     const p = str.split('').reverse().join('');
//     return str === p;
// }
// console.log("This is Palindrome or not: ",ispalindrome('madam'));
// console.log("This is Palindrome or not: ",ispalindrome('hello'));

// function basic(){
//     // console.log("Hello Batch 10.");
//     // console.log("This is jprogramming Class!");
//     // console.log("Hello Batch 10. \nThis is programming Class!");
//     // console.log("Hello Batch 10. \nThis is progra\nmming Class!");
//     const test = "Hello Batch 10. \nThis is programming Class!";
//     console.log(test);
//     console.log(typeof test);
//     const a = 10;
//     console.log(a);
//     console.log(typeof a);
//     const firstName = "Rokshana";
//     const lastName = "Talukder";
//     const fullName = firstName + " " + lastName;
//     console.log(fullName);
// }
// basic();
// function sum(){
//    const a= 10;
//    const b= 40;
//    return a+b;
// }
// console.log(sum());

function sum1(a, b){
    const sum1 = a + b;
    return sum1;
}
function multi(a , b){
    const multi = a*b;
    return multi;
}
function div(a,b){
    const div = a/b;
    return div;
}
function sub(a,b){
    const sub = a-b;
    return sub;
}

console.log("The sum of a and b is: ", sum1(40,50));
console.log("The sub of a and b is: ", sub(600,500));
console.log("The multiplication of a and b is: ", multi(400,500));
console.log("The division of a and b is: ", div(400,500));


