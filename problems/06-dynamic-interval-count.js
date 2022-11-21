/***********************************************************************
Write a function, `dynamicIntervalCount`, that accepts a callback, a delay
in milliseconds, and an optional amount as arguments. The function should 
set an interval with the given callback and delay. If an amount argument 
is passed, the interval should be cleared after the callback has been 
called 'amount' number of times. If an amount argument is not passed,
the interval should not be cleared and `dynamicIntervalCount` should instead
return the Timeout object for the interval.

In addition to Mocha, we recommend that you test your code manually using 
node with the examples below.

Examples:

dynamicIntervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times


const timeoutObject = dynamicIntervalCount(function() {
    console.log('hi');
}, 500); // prints 'hi' at 500ms intervals indefinitely

console.log(timeoutObject); // Timeout { ... }
***********************************************************************/
// original version
// function dynamicIntervalCount(cb, delay, amount) {
  
//   let count = 0;
      
//     function counter(){
//           // clear the callback after the amount has been completed
//           if (count==amount){
//             return clearInterval(intervalID);
//           } else {
//             count = count+1;
//             cb();
//             return counter();
//           }
//       }

//       // if an amount has been passed
//       if (amount!==undefined){
//         const intervalID = setInterval(counter, delay);
//       }

//       // if ampunt wasn't set then it will run the code with direct callback and not clear the interval
//       const intervalID = setInterval(cb, delay);
//       return intervalID;

//   }



  function dynamicIntervalCount(cb, delay, amount) {
  
      const intervalObj = setInterval( function() {
              // clear the callback after the amount has been completed
              cb();
              amount--;
              if (amount===0){
                clearInterval(intervalObj);
              } 
          }, delay);
          return intervalObj;
          
    }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = dynamicIntervalCount;
} catch {
  module.exports = null;
}