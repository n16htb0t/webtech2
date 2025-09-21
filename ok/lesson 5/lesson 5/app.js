// function func1(){
//     alert()
// }


// let btn=document.querySelector("#btn");

// // rgb(150,30,60)

// function randomNum(){
//     return Math.floor(Math.random() * 256);

// }
// btn.addEventListener("click", ()=>{

   
//     document.body.style.backgroundColor = `rgb(${randomNum()}, ${randomNum()},${randomNum()})` ;



// })

// let arr = ['red','green','blue']

// let btn2 = document.getElementById("btn2");
// let num = 0;
// btn2.addEventListener("click", ()=>{
//         document.body.style.backgroundColor = `${arr[num]}`;
//         if(num == arr.length-1){
//             num = 0
//         }else{
//             num++;
//         }
// })

// let li=document.querySelectorAll("li");
// console.log(li)
// li.forEach((value)=>{
//     value.addEventListener("click",(event)=>{
//         event.preventDefault()
//         console.log(event)
//         console.log(event.currentTarget.innerText)
//         console.log(event.currentTarget.textContent)
//         console.log(event.type)
//         console.log(event.currentTarget.parentElement.parentElement.lastElementChild)
//         console.log(event.currentTarget.parentElement.nextElementSibling)
//         console.log(event.target)
//     })
// })

const ul=document.querySelector("#result")
const input=document.querySelector("#textId")
const add_btn=document.querySelector("#btn")
add_btn.addEventListener("click",()=>{
    if(input.value==""){
        alert("oeee")
        return
    }
    const li=document.createElement("li")
    li.textContent=input.value
    const delete_btn=document.createElement("button")
    delete_btn.addEventListener("click",(e)=>{
        e.currentTarget.parentElement.remove()
    })
    delete_btn.textContent="delete"
    li.appendChild(delete_btn)
    ul.appendChild(li)
    input.value=""
})