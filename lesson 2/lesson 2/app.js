// let x="b12"
// console.log(typeof x)
// x=Number(x)
// console.log( x)
// console.log(x)\


// let names=2;

// console.log(func1()) // koba
// console.log(names) //2
// function func1(){
//    names="koba"

//     return names
// }

// console.log(expressionFunc())

// let expressionFunc=function(){
//     return "ano"
// }



function driverLicence(name, birthdate){
   let agee = age(birthdate)
    if(agee>=18 && agee<80){
        console.log("true");
    }else{
        console.log("false");
    }
}
function age(birthdate){
    let age = new Date().getFullYear()-birthdate; 
    return age;
}



console.log(age(1990));

driverLicence("david", 1997)
driverLicence("ana", 2019)
driverLicence("Jumberi", 1918)
let tengis = prompt("input your name");
let asaki = prompt("input your date of birth");

driverLicence(tengis, asaki);