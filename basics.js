let user = {
  name: "hila",
    age: 17,
    score: 120,
    creditCard:true
}

function greet(user){
    user.age < 18 ? console.log("you tainy") : console.log("welcome")
    user.score >= 100 ? console.log("gold") : console.log("silver")
    user.creditCard == true ? console.log("eligible") : console.log("not eligible")
}

userName = 3;

switch(userName){
    case 1:
        console.log("you 1");
        break;
    case 2:
        console.log("you 2");
        break;
    default:
        break;
}

//do while loop

let i = 0;

do {
    if(i % 2 === 0 ) console.log(i)
        i++;
} while(i <= 10);

let person = {
    name: "hila",
    age: 21
}

let colors = ["red", "green", "blue"]

//for in loop
for(let key in person){
    console.log(person[key])
}

for(let key in user){
    console.log(key, user[key])
}

for(let index in colors){
    console.log(index, colors[index])
}

//for of loop
//just for arrays not objects
for(let color of colors)
    console.log(color);
