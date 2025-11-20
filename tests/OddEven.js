function oddEven(){
    const data = [20,2,7,4,9,55,0];
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if(data[i]==0){
            console.log(`${data[i]} is an even number.`)
        }
        else if(data[i]%2==0){
            console.log(`${data[i]} is an even number.`)
        }
        else{
            console.log(`${data[i]} is an odd number.`)
        }  
    }
}
oddEven();

























// a=2
// b=5
// a=b
// a!=b
// a==b  >>error
// a===b >>error