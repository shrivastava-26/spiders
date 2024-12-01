let arr = [10,20,30,40, 50,60]


//! 1. How can you find the maximum number in an array 

// let a = 25;
// let b = 20;

// let arr = [10,20,30,40, 50,60]

// console.log(Math.max(...arr))


//! 2. How can you find the minimum number in an array? 

// let arr = [10,20,30,40, 50,60]

// console.log(Math.min(...arr))


//!3. How can you find the sum of all numbers in an array?

// let res = arr.reduce((acc,val) =>{
//     return acc + val;
// })

// console.log(res)

// let sum = 0;
// for(let i = 0; i<arr.length; i ++)
// {
//     sum += arr[i];
// }

// console.log(sum);

//! 4.  How can you calculate the average of numbers in an array?

// let sum  = 0;
// let len = arr.length;

// for (let i =0; i<arr.length; i++){
//     sum+= arr[i];
// }

// let avg = sum/len;
// console.log(avg)

//  let red = arr.reduce((acc,val)=>{

//     return acc+val;

//  })

//  console.log(`avg = ${red/arr.length}`)

//! 5. How can you check if an array is empty? 

// if(arr.length ==0){
//     console.log("empty")
// }
// else{
//     console.log("not")
// }

// let len = arr.length===0;
// console.log(len)

//!6. How can you merge two arrays in JavaScript? 

let arr2 = ['hello', 'my' , 'name' , 'this', 'prince']

// console.log(arr.concat(arr2))

//! 7. How can you convert an array of strings to lowercase? 

// let res = arr2.map((str) =>

//     str.toUpperCase()
// )

// console.log(res)

//! 8.  How can you count the occurrences of a specific element in an array?

let arr3 = [2,2,2,4,6,5,7,4,9,30]

// let occur =2;

// let res = arr3.filter ((m) =>
//   m==occur).length

// console.log(res)


//! 9.How can you remove a specific element from an array? 

// let removeElement = 2;

// let res = arr3.filter( (m) => 
//     m!= removeElement
//  )

// console.log(res)

//! 10.How can you check if all elements in an array satisfy a certain condition? 

// let res = arr.every((m) =>
//     m%10==0
// )

// console.log(res);