
const myrepo = () => {
     
    let data2 = fetch(https)
}



let repo = async() => {


    let data = await fetch('https://api.github.com/users')

    let finalData = await data.json();

    let content = '';
    let box = document.getElementById('card')

    finalData.map((m) => {
        console.log(m);

         content += `

        <div>
            <h4>${m.login}</h4>
            <p> ${m.id} </p>
            <img src="${m.avatar_url}" />
            <p> ${m.type}</p>

        </div>
    `
    })

    box.innerHTML = content;


}

repo();