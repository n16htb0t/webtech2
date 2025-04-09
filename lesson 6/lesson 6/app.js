// let obj={
//     id:1,
//     firstName:"ani",
//     email:"ani@gmail.com"
// }
// console.log(obj.firstName)

let users=[
    {
        id:1,
        firstName:"ani",
        email:"ani@gmail.com"
    },
    {
        id:2,
        firstName:"david",
        email:"david@gmail.com"
    }
]

let usersStingify=JSON.stringify(users)
console.log(usersStingify)
console.log(usersStingify[0])
let usersParse=JSON.parse(usersStingify);
console.log(usersParse)
usersParse.forEach(element => {
    if (element.firstName=='ani') {
        console.log(element);
    }
});