

//! fetch api

// let fetchApi = fetch('https://api.github.com/users')

// // console.log(fetchApi);

// fetchApi.then((response)=> {
//     console.log(response)

//     let data = response.json();
//     console.log(data)

//     data.then((final) => {
//         console.log(final)
//     })
// })



//! async await

// let fetchApi = async() => {
//     let data = await fetch('https://api.github.com/users')

//     let finalData = await data.json();
//     console.log(finalData)
// }

// fetchApi();


// let fetchApi = async() => {

//     let data = await fetch('https://dummyjson.com/products')

//     let finalData = await data.json();
    
// }

// fetchApi()

let fetchApi = async () => {

    let data = await fetch('https://dummyjson.com/products');

    console.log(data)

}