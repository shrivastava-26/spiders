

//! Higher order function


// let demo = () => {

//     console.log("hello")
// }


// // callback function
// let callBack = () => {
//     console.log("callback function")
// }

// demo(callBack());



// ! callback operations

// function hof(a,b) {
//     console.log("hello")
//     callBack(a,b);
    
// }

// hof(10,20, callBack())


// function callBack(x,y,){
//     console.log("callback function")
//     console.log(x+y);

// }

function fun(a,b, callback) {
    console.log("hof")
    callback(a,b)
}


fun(10,20, (a,b)=>{
    console.log(a+b)
})
