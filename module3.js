let age = 5;
let func1 = function displayAge(){
    console.log(`John is ${age} years old`);
}

// module.exports = age; // exporting module to other files
module.exports ={age:age, func1:func1};