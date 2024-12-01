


//! ways of creating arrays

// let array = [10,20,30];

// console.log(array)

// !array constructor

// let arr = new Array (12)

// console.log(arr)

//! arrays.of operator

// let arr = Array.of(22,10)
// console.log(arr)


//! methods of arrays

    //todo helper method


    //?push method

//     let arr = [ 10,20 ,30 ,40]

//    let result= arr.push(100);

//     console.log(arr)

//     console.log(result)



    //? Pop method

    // let arr = [10,20, 30, 40]

    // let res = arr.pop();

    // console.log( [res, arr]);
    // console.log(res)
    // console.log(arr)


    //? unshift method
    // let arr = [10,20,30,40]

    // let res = arr.unshift(10)
    // console.log(arr)
    // console.log(res)


    //? shift method

    // let arr = [10,20,30,40]

    // let res = arr.shift()
    // console.log(arr);
    // console.log(res);

    //? slice method

    let arr = [10,20,30,40,50]

    let res = arr.slice(0,2)
    console.log(res)

    // console.log(arr)

    // ?splice method

    // let arr = [10,20,30,40];

    // let len = arr.length;
    // console.log(len);

    // let res = arr.splice(0,1);
    // console.log(arr);
    // console.log(res);


    //? reverse 

    // let arr = [10,20,30,40,50]
    // let res = arr.reverse();
    // console.log(res)

    // console.log(arr)

    //?flat()

    // let arr = [[[[[[[[[[[[[[[10]]]]]]]]]]]]]]]

    // let res = arr.flat(Infinity);
    // console.log(arr)
    // console.log(res)

    //? toString

    // let arr = [10,20,30,40,50]

    // let res = arr.toString();

    // console.log(arr)
    // console.log(res)


    //? join

    // let arr = [10,20,30,40,50]
     
    // let res = arr.join("*")
    // console.log(arr)
    // console.log(res)


    //? at

    // let arr = [10,20,30,40,50]

    // let res = arr.at(4)
    // console.log(arr)
    // console.log(res)

    

    //? indexOf

    // let arr = [10,20,30,40,50,30]

    // let res = arr.indexOf(30)
    // console.log(arr)
    // console.log(res)

    //? last indexof

    // let arr = [10,20,30,20,40,50,30]

    // let res = arr.lastIndexOf(40)
    // console.log(arr)
    // console.log(res)


    //? includes

    // let arr = [10,20,30,40,50]
    // let res = arr.includes(40)
    // console.log(arr)
    // console.log(res)


    //? concat 

    // let arr = [10,20,30,40,50]
    // let arr1 = [10,20,30,40,50]

    // console.log(arr.concat(arr1))
    // console.log(arr)


    // ? find()

    // let arr = [10,20,30,40,50]

    // let res = arr.find( (m)=>{
    //     return m>30;
    // })

    // console.log(res)
    // console.log(arr)

    //? findIndex()

    // let arr = [10,20,30,40,50]

    // let res = arr.findIndex((m)=> {
    //     return m> 20
    // })

    // console.log(res)

    //? map

    // let arr = [10,20,30,40,50]

    // let res = arr.map((m) =>{
    //     return m+10;
    // })

    // console.log(arr)
    // console.log(res)


    //? fliter

    // let arr = [10,20,30,40,50]

    // let res = arr.filter((m)=>{
    //     return m>20
    // })

    // console.log(res)
    // console.log(arr)

    //? some

    // let arr = [10,20,30,40,50]

    // let res = arr.some((m)=> {
    //    return m>20;
    // })

    // console.log(res)


    //? every 

    // let arr = [10,20,30,40,50]
    // let res = arr.every((m)=>{
    //     return m>10
    // })

    // console.log(arr)
    // console.log(res)

    //? sort()

    // let arr = [10,60,80,40,50] 

    // let res = arr.sort( (m,n) =>{
    //     // return m-n;
    //     return n-m
    // })

    // console.log(arr)
    // console.log(res)


    //? reduce 

    // let arr = [10,20,30,40,50]

    // let res = arr.reduce ( (acc,val)=>{
    //     return  acc-val
    //     return val-acc;
    // })

    // console.log(arr)
    // console.log(res)


    //? destructuring parameter

    // let arr = [10,20,30,40,50]

    // let[a,b,...c] =arr;

    // console.log(...a)
    // console.log(b)
    // console.log(c)


    // ? for each

    // let arr = [10,20,30,40,50]
    

    // let res = arr.forEach((m,i,a)=>{
    //     console.log([m,i,a])
    //     console.log(m+"hello")
    // })

    // console.log(res)

    //? for -in loop

    // let arr = [10,20,30,40,50]

    // for(let keys in arr){
    //     console.log(keys)
    // }

    //? for of
    // let arr = [10,20,30,40,50]

    // for(let values of arr.entries()){
    //     console.log(values)
    // }


