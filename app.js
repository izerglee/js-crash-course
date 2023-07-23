let cash = 50
let price = 40 
let isStoreOpen = true

let str = cash >= price && isStoreOpen === true 
? ('give receipt') 
: ('Do not give receipt')
console.log(str)