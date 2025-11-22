function getMax(array) {
    let maximumValue = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maximumValue) {
            maximumValue = array[i];   
        }
    }
    console.log(`Maximum Value of the array is: ${maximumValue}`);
}
getMax([2,33,10,1,9,15,100,44,52,98,10000]);



function getMin(array) {
    let minimumValue = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minimumValue) {
            minimumValue = array[i];   
        }
    }
    console.log(`Maximum Value of the array is: ${minimumValue}`);
}
getMin([-1,2,33,10,1,9,15,100,44,52,98,10000]);