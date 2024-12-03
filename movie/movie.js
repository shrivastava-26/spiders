

let btn = document.getElementById('btn')

let fetchApi = async (e) => {
    e.preventDefault;

    let apiKey = '1f3af220'
    let searchQuery = document.getElementById('search').value;
    let apiurl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}&type=movie`

    try {
        
        let data = await fetch(apiurl);
        console.log(data)

        let finalData = await data.json();
        console.log(finalData)
        let arr = finalData.Search

        let box = document.getElementById('movie')


        arr.map((m) => {
            console.log(m)

             box.innerHTML += `
            <div class="hello">
                <h2> ${m.Title} </h2>
                <img src="${m.Poster}" />
                <h2> ${m.Year} </h2>
                <h2> ${m.imdbID} </h2>
            </div>
        `
        })

        

    
    } catch (error) {
        console.log(error)
    }

}

btn.addEventListener("click",fetchApi)
fetchApi();