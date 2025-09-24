const namee = 'Ratri';
let count = 2;
const msg = `Hi ${namee}, you ran ${count} tests.`;
console.log("Message:",msg);

let age=28;
const country= 'Bangladesh';
console.log("Age:",age);
console.log("Country:",country);

const name1= 'Ratri';
const score1 = 95;
const b= true;
const n= null;
const a=["Apple", 'Mango', 'Banana'];
const s= {id: 1, name: 'Ratri', cgpa: 3.68};
console.log('Name1 type:',typeof name1);
console.log('Score1 type:',typeof score1);
console.log('B type:',typeof b);
console.log('N type:',typeof n);
console.log("A type:",typeof a);
console.log("S type:",typeof s);


function getGrade(name, score) {
    let grade;
    if (score>=80) {
        grade='A+';  
    }
    else if (score>=70) {
        grade='A';   
    }
    else if (score>=60) {
        grade='B';   
    }
    else if (score>=50) {
        grade='C';   
    }
    else{
        grade='F';   
    }
    return `Hi ${name}, your score is ${score} and grade is ${grade}`; 
}
console.log(getGrade('Kabir', 85));
console.log(getGrade('Bir', 65));
console.log(getGrade('Abir', 45));


const number = [1,2,3,4,5,6,7,8,9,10];
const evens = number.filter(num => num % 2 === 0);
console.log('Even Number:', evens);