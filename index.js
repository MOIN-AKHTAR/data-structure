// I found out that call srack can take maximum of 10350 function call at a time.
// If you exceed you will get max call stack exceed issue.
const sumRange=(num)=>{
    if(num===1) return 1;
    return num+sumRange(num-1)
}
const sum=sumRange(10350)
console.log("TOTAL SUM",sum);


const getFactorial=(num)=>{
    if(num===1) return 1;
    return num*getFactorial(num-1)
}
const factorial=getFactorial(3)
console.log("FACTORIAL OF 10 IS ",factorial)



// HELPER METHOD RECURSION
// FOR THIS APPROACH WE DEFINE A FUNCTION INSIDE OF FUNCTION AND CALL THAT INSIDE FUNCTION RECURSIVELY.
const evenOrOdd=(arr)=>{
    let result=[];

    const helper=(numArr=[])=>{
        if(!numArr.length) return;
        
        if(numArr[0]%2===0) result.push(numArr[0])
        helper(numArr.slice(1))
    }

    helper(arr);
    return result;
}

console.log(evenOrOdd([1,2,3,4,5,6,7,8,9,10]))


// PURE RECURSIVE FUNCTION
// IN THIS RECURSIVE TECHNIQUE FUNCTION CALL IT SELF AGAIN AND AGAIN INSTEAD TO USE HELPER FUNCTION
const collectOddValues=(arr=[])=>{
    let newArr=[];

    if(!arr.length) return newArr;

    if(arr[0]%2!==0) newArr.push(arr[0]);

    newArr=newArr.concat(collectOddValues(arr.slice(1)));

    return newArr;
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9,10]))