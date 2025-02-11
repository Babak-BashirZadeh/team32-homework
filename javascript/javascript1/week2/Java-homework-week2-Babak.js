/*Flight booking fullname function*/
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

/*event application*/
function getEventWeekday(eventDay) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const eventDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + eventDay);
    return weekdays[eventDate.getDay()];
}
console.log(getEventWeekday(9));

/*Weather wear*/
function wearType (temperature) {
    if (temperature < 0) {
        return "Wear a coat, hat, scarf and gloves";
    } else if (temperature < 10) {
        return "Wear a coat and bring a hat";
    } else if (temperature < 20) {
        return "Wear a coat";
    } else (temperature < 30) {
        return "Get ready for summer";
    }
}
console.log(wearType(15));
