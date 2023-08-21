// Big o 
//  BEST CASE O(1)
//  WORST CASE (logn) ====> 32 Element = log(32) => 2^5 (It's mean if we have 32 element this algo will take maximum of 5 step inorder to find specific element)
// If you have 16 => log(16)= 2^4 (It's mean if we have 16 element than this algo will take max of 4 steps inorder to find specific element).
const binarySearch=(data=[],element)=>{
    let count=0;
    let start=0;
    let end=data.length-1;
    let middle=Math.floor((start+end)/2)
    while (data[middle]!==element&&start<=end) {
        if(element<data[middle]) end=middle-1;
        else start=middle+1;
        middle=Math.floor((start+end)/2)
        count++;
    }
    return data[middle]===element?middle:-1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],15))



// Implement naive search for text
function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}

console.log(naiveSearch("lorie loledlol", "lol"));