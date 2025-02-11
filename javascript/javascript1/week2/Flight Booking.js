/*Flight booking fullname function*/
function getFullName(firstName, lastName, useFormalName, gender) {
    if (!firstName || !lastName) {
        return "Please enter your full name";
    }
    if (useFormalName) {
        if (gender === "male") { 
            return `Lord ${firstName} ${lastName}`;
    }
        else {
            return `Lady ${firstName} ${lastName}`;
        }
    }
    return `${firstName} ${lastName}`;
}
console.log(getFullName("Babak", "Bashirzadeh", true, "male"));