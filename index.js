// Big O Of Bubble Sort
// Best case O(n)
// Worst Case O(n^2)


const arr=[8,1,2,-1,5,-7,3,2];

// UNOPTIMIZED VERSION OF BUBBLE SORT
//  WHY UNOPTIMIZED THIS IS BECAUSE IF LETS SAY WE HAVE 5 ELEMENTS INWHICH 2 ARE NOT SORTED AND 3 ARE ALREADY SORTED
//  STILL THIS ALGO WILL TAKE FULL 5 TURNS EVEN IF ARRAY SORTED IN 3RD TURN.
function unoptimizedBubbleSort(arr){
    console.log("UNOPTIMIZED BUBBLE SORT")
    let turn=0;
    for(var i = arr.length; i > 0; i--){
      for(var j = 0; j < i - 1; j++){
        console.log(++turn)
        if(arr[j] > arr[j+1]){
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;         
        }
      }
    }
    return arr;
  }

  console.log(unoptimizedBubbleSort(arr))
  
  // ES2015 Version
  function es2015UnoptimizedBubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
    return arr;
  }



  // Optimized BubbleSort with noSwaps
//   HERE noSwaps WILL TELL WHETHER WE HAVE TO GO FOR ANOTHER TURN OR NOT BECUASE IT WILL CHECK THAT IS SOMETHING REPLACED IN LAST TURN OR NOT
// IF YES ITS MEAN ARRAY HAVN'T SORTED YET COMPLETELY IF NO ITS MEAN ARRAY SIRTED SUCCESSFULLY HENCE WE WILL NOT GO FOR EXTRA LOOP TURN
// INORDER TO AVOID UNNECESSARY WORK
function optimizedBubbleSort(arr){
    let turn=0;
    console.log("ÖPTIMIZED BUBBLE SORTED ARRAY")
    var noSwaps;
    for(var i = arr.length; i > 0; i--){
      noSwaps = true;
      for(var j = 0; j < i - 1; j++){
        console.log(++turn)
        if(arr[j] > arr[j+1]){
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          noSwaps = false;         
        }
      }
      if(noSwaps) break;
    }
    return arr;
  }
  
console.log( optimizedBubbleSort(arr))