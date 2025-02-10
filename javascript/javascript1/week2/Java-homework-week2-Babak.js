function getFullName(firstName, lastName) {
    if (useFormalName) {
        return `Lord ${firstName} ${lastName}`;
    } else {
        return `${firstName} ${lastName}`;
    }
}
console.log(useFormalName("Babak", "Bashirzadeh", true));

/*For the question about women, we should define a option that will return the gender of the person. after that we can define a new
function that will return the formal name of the person based on the gender.*/