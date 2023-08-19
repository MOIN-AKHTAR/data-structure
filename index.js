const maxSubbArraySum=(numArray,num)=>{
    let maxSum=0;
    let tempSum=0;
    for (let index = 0; index < num; index++) {
        maxSum+=numArray[index]
    }
    tempSum=maxSum;
    for (let index = num; index < numArray.length; index++) {
        tempSum=tempSum-numArray[index-num]+numArray[index]
        maxSum=Math.max(tempSum,maxSum)
    }

    return maxSum;
}

console.log(maxSubbArraySum([1,2,3,4,5,6,7,8,9,10,100],3))