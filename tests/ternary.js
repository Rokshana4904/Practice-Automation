function OddEven(data) {
    for (let i = 0; i < data.length; i++) {
        data[i]==0?console.log(`${data[i]} is even number`)
        : data[i] % 2 ==0?console.log(`${data[i]} is even number`)
        :console.log(`${data[i]} is Odd number`)   
    }  
}
OddEven([0,1,2,3,4,5,6,7,8,9,10])