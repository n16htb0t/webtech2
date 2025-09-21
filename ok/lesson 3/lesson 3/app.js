let arr = ["cu", 4, 20, true, [5, 6, 7, "strArr"]]
// console.log(arr[0])
// console.log(arr[arr.length - 1])
let sum = 0
let sum2 = 0

for (let i = 0; i < arr.length; i++) {
    // if (typeof arr[i] == "string") {
    //     console.log(arr[i].length)
    // }
    if (typeof arr[i] == "object") {
        for (let j = 0; j < arr[i].length; j++) {
            if (typeof arr[i][j] == "number") {
                sum = sum + arr[i][j]
            }
        }
    }
}

arr.forEach(element => {
    if (typeof element == "object") {
        element.forEach(innerElement => {
            if (typeof innerElement == "number") {
                sum2 = sum2 + innerElement
            }
        })
    }
})

console.log(sum)
console.log(sum2)

// filter
let arr2 = arr.filter(x => x > 3)
console.log(arr2)

// reduce
let sum3 = arr2.reduce((a, b) => a + b)
console.log(sum3)

let user = {
    id: 1,
    first_name: "Davit",
    age: 25,
    email: "dbotchorishvili@cu.edu.ge",
    students: ["gio", "ano", "zura"],
    email_out: function () { return `${this.first_name}'s email is ${this.email}` }
}

console.log(user.first_name)
console.log(`${user.first_name}'s students are ${user.students.join(" ")}`)

console.log(user.email_out())

let users = [
    {
        id: 1,
        first_name: "Davit",
        age: 25,
        email: "dbotchorishvili@cu.edu.ge",
        students: ["gio", "ano", "zura"],
        email_out: function () { return `${this.first_name}'s email is ${this.email}` }
    },
    {
        id: 2,
        first_name: "Tengo",
        age: 19,
        email: "t_iluridze@cu.edu.ge",
        students: ["gio", "ano", "zura"],
        email_out: function () { return `${this.first_name}'s email is ${this.email}` }
    },
    {
        id: 3,
        first_name: "Ano",
        age: 19,
        email: "a_kakhuashvili@cu.edu.ge",
        students: ["gio", "ano", "zura"],
        email_out: function () { return `${this.first_name}'s email is ${this.email}` }
    }
]

users.forEach(user => {
    if (user.age == 19) {
        console.log(`${user.first_name} is ${user.age} years old and their students are ${user.students.join(' ')}. Contact: ${user.email}`)
    }
})
