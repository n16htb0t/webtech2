// let request=new XMLHttpRequest
// console.log(request)
// request.open("get", "users.json")
// request.send()

// request.onload=()=>{
//     let info=JSON.parse(request.responseText)
//     console.log(info)
// }
let url = "https://jsonplaceholder.typicode.com/posts"
let container = document.querySelector("#container")
let btn = document.querySelector("#btn")
btn.addEventListener("click",function(){
fetch(url)
.then((res)=>res.json())
.then((data)=>{
    data.slice(0,10)
    for(let i = 0; i < 10; i++){
        let h2 = document.createElement("h2")
        h2.innerText = i + 1 + ") "+data[i].title
        // h2.addEventListener("click",function(){
        //     let h3 = document.createElement("h3")
        //     h3.innerText = data[i].body
        //     h2.appendChild(h3)
        // })
        let check = data.filter(a => a.title == data[i].title)
        if(check.length > 0){
           h2.addEventListener("click",function(){
            let h3 = document.createElement("h3")
            h3.innerText = check[0].body
            h2.appendChild(h3)
           }) 
        }
        container.appendChild(h2)
    }
})
})
