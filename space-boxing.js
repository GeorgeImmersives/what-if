const prompt = require('prompt-sync')();

let weight = prompt("What was your weight on Earth? ");
let planet = prompt("What planet do you want to fight on? ");

if(planet == 1){
    console.log(`Your weight on Venus will be ${weight * 0.78}`);
}
else if(planet == 2){
    console.log(`Your weight on Mars will be ${weight * 0.39}`);
}
else if(planet == 3){
    console.log(`Your weight on Jupiter will be ${weight * 2.65}`);
}
else if(planet == 4){
    console.log(`Your weight on Saturn will be ${weight * 1.17}`);
}
else if(planet == 5){
    console.log(`Your weight on Uranus will be ${weight * 1.05}`);
}
else if(planet == 6){
    console.log(`Your weight on Neptune will be ${weight * 1.23}`);
}