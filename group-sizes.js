const prompt = require('prompt-sync')();

let students = prompt("How many students are there? ");

if(students % 3 == 0){
    console.log(`There will be ${students / 3} groups of 3 students.`);
}
else if(students % 3 == 1){
    console.log(`There will be ${((students-1) / 3) - 1} groups of 3 students, and ${(students % 3) + 1} groups of 2`);
}
else if(students % 3 == 2){
    console.log(`There will be ${(students-2) / 3} groups of 3 students, and ${(students % 3) - 1} groups of 2`);
}