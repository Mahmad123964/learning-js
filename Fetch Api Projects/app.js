
const button = document.querySelector("#btn")
const list = document.querySelector("#userList")

async function getUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        const data = await response.json()

        list.innerHTML = " "
        data.forEach((user)=>{
            const li = document.createElement("li")
            li.textContent = user.name
            list.append(li)
        })
    } catch (error){
        console.log(error)
    }
}

button.addEventListener("click",()=>{
    getUser()
})