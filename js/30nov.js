// let head = document.getElementById('head')
// console.log(head)
// let head1 = document.getElementById('head1')
// console.log(head1)
// head.innerText = "Hi i am cuteBoy"
// head.innerHTML = "Hi i am cuteBoy"
// ! difference between innerText and innerHTML
// ! innerHTML : When you use the innerHTML property, it reads both the HTML markup and the text content of the element. This means when you use it to set the content of elements, you can include HTML tags, and the browser will render them correctly.
// ! innerText : This property focuses on the rendered text content. When you use innerText to read the content of an element, it returns the text as it appears on screen. It ignores HTML tags. And it also does not include text that is hidden with CSS styles.
// head.innerText = `<a href='#'>LINK</a>`
// head1.innerHTML = `<a href='#'>LINK</a>`

// ! events : events are used to perform some actions.
// !Click events

// function clickFunc(){
//     console.log("hi i am click event")
//     document.body.style.background = "yellow"
// }

// ! keyboard event

// function red(){
//     document.body.style.background= "red"
// }

// function green(){
//     document.body.style.background= "green"
// }

// ! mouse event


// function red(){
//     document.body.style.background= "red"
// }

// function green(){
//     document.body.style.background= "green"
// }


// <!-- ! difference between onmouseenter, onmousemove, onmouseover -->

// function OnMouseEnter(){
//    let div1 = document.getElementById("div1")
//    div1.innerHTML += '❤️'
// }

// function OnMouseOver(){
//     let div2 = document.getElementById('div2')
//     div2.innerHTML += '❤️'
// }

// function OnMouseMove(){
//     let div3 = document.getElementById("div3")
//     div3.innerHTML += "❤️"

// }

// !  fetch an api
let fetchApi = async()=>{
    let data = await fetch("https://api.github.com/users")
    let finalData = await data.json()
    console.log(finalData)
    let tbody = document.getElementById('tbody')
    console.log(tbody)
    finalData.map((m)=>{
        console.log(m)
        tbody.innerHTML += `
        <tr>
        <td>${m.id}</td>
        <td>${m.login}</td>
        <td><img src=${m.avatar_url}></td>
        <td>${m.type}</td>
        <td><a href=${m.url}>${m.url}</a></td>
        </tr>

        `
    })
}
fetchApi()