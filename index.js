// Objective
// We have a sorted array of number now you have to write a program which give me pair of those numbers who's sum is zero using two pointer technique.
// i.e [-4,-2,-1,0,1]   ===> [-1,1] 
const getSumZero=(arrayOfNum=[])=>{
    let i=0;
    let j=arrayOfNum.length-1;
    while (i<j) {
        let sum=arrayOfNum[i]+arrayOfNum[j];
        if(sum===0) return [arrayOfNum[i],arrayOfNum[j]]

        if(sum>0)j--;
        if(sum<0)i++;
    }
}

console.log(getSumZero([-4,-2,-1,0,2,3]))


// Objective
// We have a sorted array of number now you have to find unique numbers using two pointers technique.
const getUniqueValues=(arrayOfNum=[])=>{
    let i=0;
    for (let j = i+1; j <= arrayOfNum.length; j++) {
        if(arrayOfNum[i]!==arrayOfNum[j]){
            i++;
            arrayOfNum[i]=arrayOfNum[j]
        }
    }

    return arrayOfNum.slice(0,i)
}

console.log(getUniqueValues([1,2,2,3,4,4,5,6,6,6,7,7,7,7,7,7,7,8,8,8,8,9,9,9]))