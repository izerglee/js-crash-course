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

// function getMax (arr) {
//     let max = arr[0]
//     for (let i = 0; i < arr.length; ++i) {
//         if(arr[i] > max) {
//             max = arr[i];
//         }
//     }
// return max
// }

// console.log(getMax([-100, -200, -300]

// function reverseString(str) {
//  let inverseStr = ''
//     for (let i = 0; i < str.length; ++i) {
//  inverseStr = str[i] + inverseStr
// }
// return inverseStr
// }

// console.log(reverseString('isaac'))
// console.log(reverseString('abc'))
// console.log(reverseString('This is cool'))

// function reverseString(str) {
//  let inverseStr = ''
//     for (let i = str.length; i >= 0; --i) {
// inverseStr += str[i]
//     }
// return inverseStr
// }

// console.log(reverseString('isaac'))
// console.log(reverseString('abc'))
// console.log(reverseString('This is cool'))

// function reverseString(str) {
// return str.split('').reverse().join('')
// }

// console.log(reverseString('isaac'))
// console.log(reverseString('abc'))
// console.log(reverseString('This is cool'))

// function convertToZeros(arr) {
//      return new Array(arr.length).fill(0);
// }

// console.log(convertToZeros([12]))
// console.log(convertToZeros([5, 100, 0]))
// console.log(convertToZeros([1, 2, 3, 4, 5]))

// function convertToZeros(arr) {
//     let newArr = 0;
//     for (let i = 0; i < arr.length; ++i) {
//       newArr[i] = 0
//     }
//     return newArr;
// }

// console.log(convertToZeros([12]))
// console.log(convertToZeros([5, 100, 0]))
// console.log(convertToZeros([1, 2, 3, 4, 5]))

// function convertToZeros (arr) {
//    return arr.map(elem => 0);
// }

// console.log(convertToZeros([12]))
// console.log(convertToZeros([5, 100, 0]))
// console.log(convertToZeros([1, 2, 3, 4, 5]))

// function removeApples(arr) {
//    let newArr = []
//     for (let i = 0; i < arr.length; ++i) {
//     if ( arr[i] !== 'Apple' ) {
//         newArr.push(arr[i])
//     }
//     }
//     return newArr
// }

// console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))
// console.log(removeApples(['Tomato', 'Orange', 'Banana']))
// console.log(removeApples(['Banana', 'Orange', 'Apple']))

// function removeApples(arr) {
//     return arr.filter(elem => elem !== 'Apple')
// }

// console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))
// console.log(removeApples(['Tomato', 'Orange', 'Banana']))
// console.log(removeApples(['Banana', 'Orange', 'Apple']))

// function filterOutFalsy (arr) {
// return arr.filter(elem => !!elem === true)
// }

// console.log(filterOutFalsy(["", [], 0, null, undefined, "0"]))

// function filterOutFalsy (arr) {
//     let falsyArr = []
//     for (let i = 0; i < arr.length; ++i) {
//     console.log(arr[i])
// if (!!arr[i] === true) {
//     falsyArr.push(arr[i])
// }
//     }
// return falsyArr
// }

// console.log(filterOutFalsy(["", [], 0, null, undefined, "0"]))

// function convertToBoolean (arr) {
//     return arr.map(elem => !!elem)
// }

// console.log(convertToBoolean([500, 0, 'Isaac', "", []]))

// function showRating(rating) {
//     let ratings = ""
//    for (let i = 0; i < Math.floor(rating); ++i) {
//       ratings += "*"
//     if (i !== Math.floor(rating) - 1) {
//       ratings += " "
//     }
// }
// if (!Number.isInteger(rating)) {
//    ratings += " ."
// }
//    return ratings
// }

// console.log(showRating(4.5))

// function showRating (rating) {
//   let ratings = ""
//    for (let i = 0; i < Math.floor(rating); ++i) {
//  ratings += "*"
//  if ( i !== Math.floor(rating) - 1) {
//     ratings += " "
//  }
//    }
//    if (!Number.isInteger(rating)) {
//     ratings += " ."
//    }
//    return ratings
// }

// console.log(showRating(5.5))

// function sortLowToHigh(numbers) {
//    return numbers.sort((a, b) => a - b)
// }

// console.log(sortLowToHigh([1, 5, 0, 10, 4]))

// let users = [
//   {
//     username: "Isaac",
//     email: "isaaclee@gmail.com",
//     password: "test123",
//     subscriptionStatus: "VIP",
//     discordId: "isaaclee#0001",
//     lessonsCompleted: [0, 1],
//   },
//   {
//     username: "Mitri",
//     email: "Mitri@gmail.com",
//     password: "test234",
//     subscriptionStatus: "VIP",
//     discordId: "Mitri#0001",
//     lessonsCompleted: [0, 1, 2, 3],
//   },
//   {
//     username: "Zen",
//     email: "Zen@gmail.com",
//     password: "Zen123",
//     subscriptionStatus: "VIP",
//     discordId: "Zen#0001",
//     lessonsCompleted: [0, 1, 2, 3],
//   },
// ];

// function login(email, password) {
//   for (let i = 0; i < users.length; ++i) {
//     if (users[i].email === email) {
//       console.log(users[i]);
//       if (users[i].password === password) {
//         console.log("log the user in - the details are correct");
//       } else {
//         console.log("password is incorrect - try again");
//       }
//       return;
//     }
//   }
// }

// login("isaaclee@gmail.com", "test123");

// function register(
//   username,
//   email,
//   password,
//   subscriptionStatus,
//   discordId,
//   lessonsCompleted
// ) {
//    let user = {
//       username : username ,
//       email : email,
//       password : password,
//       subscriptionStatus : subscriptionStatus,
//       discordId : discordId,
//       lessonsCompleted : lessonsCompleted,
//    }
//    users.push(user)
// }

// register(
//   "Michelle",
//   "Michellen@gmail.com",
//   "mitch123",
//   "VIP",
//   "milli#0001",
//   [0, 1, 2, 3, 4]
// );

// console.log(users)

// function sortHightoLow (numbers) {
//     return numbers.sort((a, b) =>  b.price - a.price )
// }

// console.log(
//     sortHightoLow([
//     {id: 1, price: 50}, 
//     {id: 2, price: 0}, 
//     {id: 3, price: 500},
// ]));


// // First way of accessing an element 
// console.log(document.querySelector('#title'))

// // Second way of accessing an element 
// console.log(document.getElementById('title'))

document.querySelector('#title').innerHTML += 'Frontend Simplified'
