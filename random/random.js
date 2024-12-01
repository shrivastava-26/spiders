let store = [];
let currIndex = null;

let randomviewer = async() => {

    let data = await fetch ('https://dummyjson.com/products');
    let finalData = await data.json();

    //storing data in global storage
    store = finalData.products;

    //calling text element for display instruction
    let box = document.getElementById('card');
    box.innerHTML = `<p> Products </p>`
}

let randomShow = async () => {

    let box = document.getElementById('card')
    //condition for maximum length
    if(store.length===40){
        box.innerHTML= `<p>Invalid Items </p>`;
        return;
    }

    //random index
    let randomIndex = Math.floor(Math.random()* store.length)

    //randomly display using position of global store
    let result = store[randomIndex];
    
    //innerHtml element
    box.innerHTML = `
        <div class="product-card">
            <img src="${result.thumbnail}" alt="${result.title}" class="product-image" />
            <h3>${result.title}</h3>
            <p>${result.description}</p>
            <p>Price: $${result.price}</p>
            <p>Category: ${result.category}</p>
         </div>
    `
    //splice
    store.splice(randomIndex,1);

}

randomviewer();

//button event listener
document.getElementById('btn');