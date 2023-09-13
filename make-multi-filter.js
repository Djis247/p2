'use strict';

//here is our global function MakeMultiFilter
function MakeMultiFilter(originalArray) {

  //currentArray is set to be identical to originalArray
  let currentArray = originalArray;

  //here is our returned function arrayFilterer
  function arrayFilterer(filterCriteria, callback) {


    //check off the back to see if filterCriteria is a function
    if (typeof (filterCriteria) === 'function') {
      
      //currentArray will now reflect the updated currentArray using 
      //the filter criteria function
      currentArray = currentArray.filter(filterCriteria);

      //filtering is done at this point
      //therefore we will now check to see if our callback is a function
      if (typeof (callback) === 'function') {
        //call the callback function using the originalArray(this)
        //and the currentArray as the arguementive
        callback.call(originalArray, currentArray); 
      }
    }
    
      //if filterCriteria is not a function we 
      //will immediately return the value of currentArray
    else {
      return currentArray;
    }

    //return arrayFilterer back to arrayFilterer
    return arrayFilterer;
  }

  //return arrayFilterer back to MakeMultiFilter
  return arrayFilterer;
}