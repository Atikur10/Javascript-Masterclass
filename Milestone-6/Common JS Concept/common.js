function myFunction(){
    let count = 0;
    return function(){
        count ++;
        return count;
    }
}



const result = myFunction();
console.log(result())
console.log(result())
console.log(result())
console.log(result())
console.log()