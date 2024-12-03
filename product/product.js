let search = document.getElementById('search');
let cards = document.getElementById('cards');

let fetchApi = async () => {
    let data = await fetch('https://dummyjson.com/products');
    let finalData = await data.json();
    let arr = finalData.products;


    let myCards = (i) => {
        cards.innerHTML = ""; 
        i.map((m) => {
            cards.innerHTML += `
                <div class="hello">
                    <h3>ID: ${m.id}</h3>
                    <h4>Title: ${m.title}</h4>
                    <img src="${m.images}"/>
                    <p>Desc: ${m.description.slice(0, 65)}...</p>
                    <h3>Category: ${m.category}</h3>
                    <h4>Price: $${m.price}</h4>
                </div>
            `;
        });
    };

    myCards(arr);

    search.addEventListener("keyup", () => {
        let inputValue = search.value.toLowerCase();
        let newCards = arr.filter((m) =>
            m.title.toLowerCase().includes(inputValue)
        );
        myCards(newCards);
    });
};

fetchApi();
