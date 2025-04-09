let arr=["cu", 4, 20, true, [5,6,7,"strArr"]]
// console.log(arr[0])
// console.log(arr[arr.length-1])
let sum = 0
let sum2 = 0

for(let i=0; i<arr.length; i++){
//    if(typeof arr[i]=="string"){
//     console.log(arr[i].length)
//    }
    if(typeof arr[i] == "object"){
        for(let j = 0; j < arr[i].length; j++){
            if(typeof arr[i][j] == "number"){
                sum = sum + arr[i][j]
            }
        }
    }
}

arr.forEach(element =>  {
    if(typeof element == "object"){
    element.forEach(element2 =>{
        if(typeof element2 == "number"){
            sum2 = sum2 + element2
        }
    })
    }
    
});


console.log(sum)
console.log(sum2)

//arr=["cu", 4, 20, true, [5,6,7,"strArr"]]
//filter
let arr2 = arr.filter(x=>x > 3)
console.log(arr2)

//Reduce method
let sum3 = arr2.reduce((a, b)=> a + b)
console.log(sum3)

let user = {
    id:1,
    first_name:"Davit",
    age: 25,
    email:"dbotchorishvili@cu.edu.ge",
    students:["gio","ano","zura"],
    email_out:function(){return `${this.first_name}-ის იმეილი არის ${this.email}`}
}

console.log(user.first_name)
console.log(`${user.first_name}-ის სტუდენტები არიან ${user.students.join(" ")}`)

console.log(user.email_out())

let users = [
    {
        id:1,
        first_name:"Davit",
        age: 25,
        email:"dbotchorishvili@cu.edu.ge",
        students:["gio","ano","zura"],
        email_out:function(){return `${this.first_name}-ის იმეილი არის ${this.email}`}
    },
    {
        id:2,
        first_name:"Tengo",
        age: 19,
        email:"t_iluridze@cu.edu.ge",
        students:["gio","ano","zura"],
        email_out:function(){return `${this.first_name}-ის იმეილი არის ${this.email}`}
    },
    {
        id:3,
        first_name:"Ano",
        age: 19,
        email:"a_kakhuashvili@cu.edu.ge",
        students:["gio","ano","zura"],
        email_out:function(){return `${this.first_name}-ის იმეილი არის ${this.email}`}
    }
]

users.forEach(element => {
    if(element.age == 19){
        console.log(`${element.first_name} არის ${element.age} და მისი სტუდენტები არიან ${element.students.join(' ')} დაუკავშირდით: ${element.email}`)
    }
})

