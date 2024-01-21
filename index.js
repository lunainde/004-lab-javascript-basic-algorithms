console.log("test console");

// Iteration 1: Names and Input-------------------------------------------------------------------

let hacker1 = "Juan";
console.log("The driver's name is " + hacker1);
let hacker2 = "Mariana";
console.log("The navigator's name is " + hacker2);


// Iteration 2: Conditionals-------------------------------------------------------------------------

//The driver has the longest name, it has XX characters. or
//It seems that the navigator has the longest name, it has XX characters. or
//Wow, you both have equally long names, XX characters!.

if (hacker1.length > hacker2.length){
  console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker1.length < hacker2.length){
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
}
else { //(hacker1.length === hacker2.length)
  console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}


// Iteration 3: Loops --> for/while/--------------------------------------------------------------------

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

//initialize an empty string to save the new info
let spacedName = "";
//loop through the characters
for (let i=0; i<hacker1.length; i++) {
    spacedName += hacker1[i] + " ";        //x = i+1 + ⍉
}
console.log(spacedName.toUpperCase());         
// => J U A N 


// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
//initialize an empty string
let reversedName = "";
//loop through the characters starting from back
for(let i=hacker2.length -1; i>=0; i--) {
    reversedName += hacker2[i];
}
console.log(reversedName);
//=> anairaM
// REF: https://stackoverflow.com/questions/64433338/creating-a-string-from-charactersfor-loop-javascript-without-methods


// 3.3 Depending on the lexicographic order of the strings, print:

// The driver's name goes first.
// Yo, the navigator goes first, definitely.
// What?! You both have the same name?
if (hacker1 > hacker2){
    console.log("The driver's name goes first.")
} else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("What?! You both have the same name?")
}


//GIT DIRECTIONS-----------------------------------------------------

// - if you clone a fork, you just have to:
// git add .
// git commit -m “My Changes”
// git push

// - if you’re creating your own repository (for project)
// > git push -u origin main (when setting up your first commit)

// to run in terminal> node folder-name

//SOURCE: https://github.com/ironhack-labs/lab-javascript-basic-algorithms