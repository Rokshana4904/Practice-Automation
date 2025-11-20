function factorial(data) {
    let result = 1;
    for (let i = 2; i <= data; i++) {
        result = result * i;   
    }
    console.log("Result is :" +result);   
}
factorial(5);


function factorial2(data){
    let result1 = 1;
    if (data == 0) {
        return 1;
    }
    else if(data < 0){
        return "Invalid Input"
    }
    for (let i = 2; i <= data; i++) {
        result1 =  result1 * i;   
    }
    return result1;
}
console.log("Result is:" + factorial2(-6));



//recursive method
function factorial3(data){
    if (data == 0) {
        return 1;
    }
    else if(data < 0){
        return "Invalid Input"
    }
    let result2 = data * factorial3(data - 1);
    return result2
}
console.log("Result is:" + factorial3(5));
