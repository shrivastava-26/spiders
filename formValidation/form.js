let form = document.getElementById('form')
console.log(form)

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let email = document.getElementById('username').value;
    let password = document.getElementById('pwd').value;

    if(email == "" || password == ""){
        alert("both the field must be filled")
    }else{
        alert("logged sucessfully")
    }

})


let show_pwd = document.getElementById('show_pwd')
    let password = document.getElementById('pwd');
    let emoji = document.getElementById('emoji')
    show_pwd.addEventListener('click',()=>{
        if(password.value !== ""){
            if(password.type == "password"){
              password.type = "text"
              show_pwd.innerHTML = "hide Password"
              emoji.innerHTML = "🙈"                
            }else{
                password.type = "password"
              show_pwd.innerHTML = "Show Password"
              emoji.innerHTML = "🐵"   
            }
            
        }else{
            alert("Please enter the password")
        }
    })

let username = document.getElementById('username')
let submit_btn = document.getElementById('submit_btn')
let error = document.getElementById('error')

username.addEventListener('keyup',(e)=>{
    let validation = username.value.length<8;
    if(validation){
        username.classList.add("warning")
        username.classList.remove("success")
        submit_btn.disable = true;
        submit_btn.classList.add("disable")
        error.innerHTML = "Please Enter maximum 8 Char"
    }else{
        username.classList.add("success")
        username.classList.remove("warning")
        submit_btn.disable = false;
        submit_btn.classList.add("disable")
        error.innerHTML = ""
    }
})

let error1 = document.getElementById("error1")

password.addEventListener('keyup',(e)=>{
    let validation = password.value.length<8;
    if(validation){
        password.classList.add("warning")
        password.classList.remove("success")
        submit_btn.disable = true;
        submit_btn.classList.add("disable")
        error1.innerHTML = "Please Enter maximum 8 Char"
    }else{
        password.classList.add("success")
        password.classList.remove("warning")
        submit_btn.disable = false;
        submit_btn.classList.add("disable")
        error1.innerHTML = ""
    }
})