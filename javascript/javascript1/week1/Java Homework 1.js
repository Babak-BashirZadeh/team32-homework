// Age-ify (A future age calculator)
var yearOfBirth = 1989;
var yearFuture = 2027;
var age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in " + yearFuture + ".");


// Goodboy-Oldboy (A dog age calculator)
 var dogYearOfBirth = 2016;
 var dogYearFuture = 2027;
 var dogYear = dogYearFuture - dogYearOfBirth;
 var shouldShowResultInDogYears = true;
    
 if (shouldShowResultInDogYears) {
        console.log("Your dog will be " + dogYear * 7 + " dog years old in " + dogYearFuture + ".");
    } else {
        console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture + ".");
    }

// Housey pricey (A house price estimator Peter)
var width = 8;
var depth = 10;
var height = 10;
var gardenSizeInM2 = 100;
var volumeInMeters = width * depth * height;
var housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if (housePrice < 2500000) {
    console.log("Peter paid too little for the house.");
} else {
    console.log("Peter paid too much for the house.");
}

// Housey pricey (A house price estimator Julia)
var width = 5;
var depth = 11;
var height = 8;
var gardenSizeInM2 = 70;
var volumeInMeters = width * depth * height;
var housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if (housePrice < 1000000) {
    console.log("Julia paid too little for the house.");
} else {
    console.log("Julia paid too much for the house.");
}

// Ez Namey (Startup name generator)
var firstWords = ["Easy", "Awesome", "Corporate", "Innovative", "Creative", "Smart", "Super", "Global", "Digital", "Tech"];
var secondWords = ["Nordisk", "house", "Force", "Eyes", "Sky", "Bit", "World", "Objects", "Hero", "Insight"];
const randomNumber = Math.floor(Math.random() * 10);
var startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];
console.log("The startup: " + startupName + " contains " + startupName.length + " characters.");