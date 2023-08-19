const isAnagram=(wordOne,wordTwo)=>{
    if(wordOne.length!==wordTwo.length)throw new Error("This is not anagram");
    let obj={};

    for (let i = 0; i < wordOne.length; i++) {
        obj[wordOne[i]]?obj[wordOne[i]]+=1:obj[wordOne[i]]=1;
    }
    

    for (let i = 0; i < wordTwo.length; i++) {
       if(!obj[wordTwo[i]])throw new Error("This is not anagram");
       else obj[wordTwo[i]]-1;
    }
    console.log("Anagram")
}

isAnagram("LOOT","TOOL") // This is anagram
isAnagram("LATAE","TALAV") // This is not anagram