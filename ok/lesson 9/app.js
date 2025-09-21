// let firstname="chachrilebi";
// localStorage.setItem("firstname",firstname)
// localStorage.setItem("firstname","chabarebulebi")
// console.log(localStorage.getItem("firstname"))
// // localStorage.removeItem("firstname")
// localStorage.clear()




// ================

// let First=document.querySelector("#fFirstName")
// let Email=document.querySelector("#fEmail")
// let SignUp=document.querySelector("#SignUp")

// SignUp.addEventListener("click", (e)=>{
//     e.preventDefault()
//     let userObj={
//         firstname:First.value,
//         email:Email.value
//     }
//     localStorage.setItem("users", JSON.stringify(userObj))

// })


//===================

let search = document.getElementById("search")
let btn = document.getElementById("btn")
let result = document.getElementById("result")

let arr= []

btn.addEventListener("click",function(){
    arr.push(search.value)

    localStorage.setItem("results",JSON.stringify(arr))
})

search.addEventListener("dblclick",function(){
    let result_arr = JSON.parse(localStorage.getItem("results"))
    result.innerHTML = null
    for(let i = 0; i < result_arr.length;i++){
        let line = result_arr[i]
        let div = document.createElement("div")
        div.innerText= line
        result.appendChild(div);
    }
})