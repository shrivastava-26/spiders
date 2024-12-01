

//! immutable ? primitive data types means we can not change after creation

// let a = 'prince';

// a[0] = 'h'

// console.log(a);


//! mutable we can change after creation

// let arr = [ 'prince', 'hello', 'bye'];

// arr[0] = 50;

// console.log(arr);


// ! dynamic nature of js

// console.log(c);


// var c = 'prince'


// // const a = 'prince'
// var c = 'shrivastava'



//! hoisting and tdz

// console.log(a)

// let a = "prince"
// const a = 'prince';


// console.log(a) //undefined

// var a ="prince"


// ! ternery operator

//? if else

 let age = 3;

//  if(age> 18){
//     console.log("you can vote")
//  }
//  else{
//     console.log('you can not vote')
//  }

let cond = (age >= 15)

 ? "you can vote"
  : (age >15) 
  ? ' you can swim' 
  : (age < 5)
  ? 'drink milk'
  : "hello"



console.log(cond)

