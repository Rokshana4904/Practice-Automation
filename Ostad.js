function variable(){
    const test = ["Hello world", 33, "ostad", "Test", 88, ["one", 2, "Three"]];
    console.log(test);
    console.log(test[0]);
    console.log(test[1]);
    console.log(test[2]);
    console.log(test[3]);
    console.log(test[4]);
    console.log(test[5]);
    console.log(test[5] [0]);
    console.log(test[5] [1]);
    console.log(test[5] [2]);
    console.log(typeof test[0]);
    console.log(typeof test[1]);
    console.log(typeof test[2]);
    console.log(typeof test[3]);
    console.log(typeof test[4]);
    console.log(typeof test[5]);
    console.log(typeof test[5][0]);
    console.log(typeof test[5][1]);
    console.log(typeof test[5][2]);
}
variable();

function while_loop(){
    const test1 = [1, 2, 3, 4 ,5 ,6, 7];
    console.log("Array size of the test1 is: ",test1.length);
    let i=0;
    while(i<test1.length){
        console.log(`current data for index ${i} is: ${test1[i]}`);
        i++;
    }
}
while_loop();

function for_loop(){
    const test2 = ["Ratri", 4904, "SQA", "CSE", "DIU"];
    console.log("The length of the test2 is:",test2.length);
    for (let i = 0; i< test2.length; i++) {
        console.log(`current data for index ${i} is: ${test2[i]}`);
    }
}
for_loop();

function conditions(mark){
    if (mark>=80 && mark<=100){
        console.log(`Your grade is A+ and your CGPA is 4.00`);
    }
    else if(mark>=75 && mark<=79){
        console.log(`Your grade is A and your CGPA is 3.75`);
    }
    else if(mark>=70 && mark<=74){
        console.log(`Your grade is A- and your CGPA is 3.50`);
    }
    else if(mark>=65 && mark<=69){
        console.log(`Your grade is B+ and your CGPA is 3.25`);
    }
    else if(mark>=60 && mark<=64){
        console.log(`Your grade is B and your CGPA is 3.00`);
    }
    else if(mark>=55 && mark<=59){
        console.log(`Your grade is B- and your CGPA is 2.75`);
    }
    else if(mark>=50 && mark<=54){
        console.log(`Your grade is C+ and your CGPA is 2.50`);
    }
    else if(mark>=45 && mark<=49){
        console.log(`Your grade is C and your CGPA is 2.25`);
    }
    else{
        console.log(`your grade is fail`);
    }
}
conditions(51);