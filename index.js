// Implemnent Linear Search
//O(1) FOR BEST CASE 
// O(n) FOR WORST CASE
const findByLinearSearch=(data,element)=>{
    for (let index = 0; index < data.length; index++) {
        if(data[index]===element) return index;
        
    }
    return -1;
}
console.log(findByLinearSearch(["HELLO","THERE","HOW'S GOING","WHERE IT IS"],"THERE"))