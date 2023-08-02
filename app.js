// function calcRemainder (num1, num2) {
//     return num1 % num2 
// }

// console.log(calcRemainder(4, 2))
// console.log(calcRemainder(7, 8))
// console.log(calcRemainder(9, 8))

// function isOdd (num) {
// return num % 2 !== 0
// }

// console.log(isOdd(1))
// console.log(isOdd(2))
// console.log(isOdd(3))

// function booleanInteger(num) {
//   return  num % 2 === 0 ? 1 : -1
// }

// console.log(booleanInteger(1))
// console.log(booleanInteger(2))
// console.log(booleanInteger(5))


// function loggedAndSubscribed (status, user) {
//   return status === 'LOGGED_IN' && user === 'SUBSCRIBED'
  
// }



// console.log(loggedAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))
// console.log(loggedAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'))
// console.log(loggedAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'))


// let grades = ['A+', 'FAIL', 'A']

// let goodGrades = []

// for (let i = 0; i < grades.length; ++i) {
//   if (grades[i] !== 'FAIL') {
// goodGrades.push(grades[i])
//   }
// }

// console.log(goodGrades)

// let dollar = [1, 4, 9, 16]

// let cents = dollar.map( element => element * 100)

// console.log(cents)

// let dollar = [0, 10, 20]

// let cents = []

// for (let i = 0; i < dollar.length; ++i) {
//   cents.push(dollar[i] * 100)
// }

// console.log(cents)


// function filerOutFalsy(elem1, elem2) {
//     return (!elem1) ? elem1 : elem2 
// }

// console.log(filerOutFalsy(0, 5));
// console.log(filerOutFalsy(false, 100));
// console.log(filerOutFalsy(true, 'Dog'));

// function arrLength(arr) {
//     return arr.length;
// }

// console.log(arrLength([1, 2, 3]));
// console.log(arrLength([5, 0, -4, 1]));
// console.log(arrLength([]));

// function lastElem(elem){ 
//     return elem[elem.length - 1]
// }

// console.log(lastElem([3, 2, 0, 6, 2]))
// console.log(lastElem(['dog', 'cat', 'ball']))
// console.log(lastElem([null, 5, false]))

// function arrSum(arr) {
//     let sum = 0
// for (let i = 0; i < arr.length; ++i){
//     sum = sum + arr[i]
// }
// return sum
// }

// console.log(arrSum([2, 2, 2]))
// console.log(arrSum([100, 200, 500]))
// console.log(arrSum([0, -5, -10]))

// function progressiveSum(num) {
//     let sum = 0
//     for (let i = 1; i < num; ++i) {
//         sum = sum + i
//     }
//     return sum
// }



// console.log(progressiveSum(3))
// console.log(progressiveSum(4))
// console.log(progressiveSum(601))

// function calcTime (seconds) {
//     let timerMinutes = Math.floor(seconds/60)
//     let timerSeconds = seconds % 60;

//     if (timerMinutes.toString().length === 1) {
//         timerMinutes = '0' + timerMinutes
//     }

//     return timerMinutes + ':' + timerSeconds;
// }

// console.log(calcTime(66))
// console.log(calcTime(50))
// console.log(calcTime(300))

function getMax (arr) { 
    let max = arr[0]
    for (let i = 0; i < arr.length; ++i) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
return max
} 

console.log(getMax([-100, -200, -300]))