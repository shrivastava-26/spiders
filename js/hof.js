

// console.log("prince")

// function () {
//     console.log("hii")
// }





// ! Higher order function and callback function

// function hof(a,b){
//     console.log("this is Higher order function")
//     console.log(a)
//     console.log(b)
// }

// hof( 10,20,callback())

// // ? Callback function

// function callback(){
//     console.log("this is callback function")
//     console.log(x)
//     console.log(y)
// }

// callback()


function hof(a,b){

    console.log('hii')
    console.log(x)
    console.log(y)


}

hof(10,20,function(x,y){
    console.log("hello")
})